---
path: "/blog/concurrency-patterns-runner"
title: "Concurrency Patterns In Go: The Runner Pattern"
date: "2020-06-13"
featuredImage: "../images/concurrency-patterns-runner/main.jpg"
tags: ["golang", "programming", "go", "concurrency", "design patterns"]
---

### Using Channels To Monitor and Terminate Programs

This article was inspired by the concurrency patterns chapter of the fantastic book <a class="text-blue-500 no-underline- hover:underline" href="https://www.amazon.com/Go-Action-William-Kennedy/dp/1617291781">_Go In Action_</a> which was written by <a class="text-blue-500 no-underline- hover:underline" href="https://twitter.com/goinggodotnet">William Kennedy</a>, <a class="text-blue-500 no-underline- hover:underline" href="https://twitter.com/bketelsen">Brian Ketelsen</a> and <a class="text-blue-500 no-underline- hover:underline" href="https://twitter.com/erikstmartin">Erik St. Martin</a>.

The runner concurrency pattern is used when you want to set up some go routines to do work, but you still want a way to communicate with them and cancel, or expire them after a given time limit. It is an extremely useful pattern when writing programs that will be executed on a schedule as a background process or as a cron job.

There are **_three main components_** that make up the runner pattern.

<ol class="special-list pl-10 mb-5 mt-5 list-decimal">
    <li class="mb-2 text-lg">A way for the program to finish and terminate <b>normally</b></li>
    <li class="mb-2 text-lg">A way for the program to terminate itself after a given time limit is <b>exceeded</b></li>
    <li class="mb-2 text-lg">And a way for an operating system signal to <b>kill</b> the program</li>
</ol>

**_I like to use the simple acronym of NEK to remember these three components_** (I think of a runner with a very thick neck, because I think that would look kind of funny.)
![Runner](../images/concurrency-patterns-runner/runner.jpg)

Side note: I'm trying to use <a class="text-blue-500 no-underline- hover:underline" href="https://thepeakperformancecenter.com/educational-learning/learning/memory/memory-techniques/">acronyms</a> more to aid with memorization

A common way these three components are implemented in go is by using channels. We will store each of these channels in a struct called Runner.

    type Runner struct {
        // Component 1
        complete chan error

        // Component 2
        expire <- chan time.Time

        // Component 3
        kill chan os.Signal
    }

We will now add a slice of functions to represent the work that our runner must finish before the timout expires

     type Runner struct {
        // Component 1
        complete chan error

        // Component 2
        expire <- chan time.Time

        // Component 3
        kill chan os.Signal

        // Work out runner must finish before timeout expires
        work []func()
    }

So before we get into any more code, let's discuss the desired behavior of our Runner. Without getting into the details just yet, lets assume that we create a runner with a given expiration time and add some functions to the work slice.

Our Runner begins to happily process the work we have given it, while at the same time it waits for values to come off of each of the three channels.

If our Runner receives a value off the complete channel, that means that our Runner is complete (It either finished all the work or ran into some error).

If our Runner receives a value off the expire channel, then that means the expiration time we gave it to complete it's work has expired.

Finally, if our Runner receives a value off the kill channel, that means someone manually asked the runner to shutdown and terminate.

Now that we understand the desired behavior of our Runner let's write some code to implement this behavior.

        // This method tells the runner to start working
        // and listening for values to come off it's channels
        func (r *Runner) begin() error {
            // "Forward" incoming os.Interrupt signals to our kill channel
            signal.Notify(r.kill, os.Interrupt)

            go func() {
                // When our process routine finishes (because of an error or it completed it's work) tell the complete channel it are done.
                complete <- r.process()
            }()

            select {
                case err := <- r.complete:
                    return err

                case <- r.expire:
                    return errors.New("expiration time exceeded")
            }
        }

The key point off this block of code is to start a new go routine that will go process the work, then wait for it to either complete or expire.

        func (r *Runner) process() error {
            for _, w := range work {
                // Check if a signal came off the kill channel
                if r.killed() {
                    return errors.New("runner was killed")
                }

                // Perform the work.
                w()
            }

            return nil
        }

This method is just processing all the work but before it does it will check if anyone signalled for the process to be killed.

        func (r *Runner) killed() bool {
            select {
                case <- r.kill:
                    signal.Stop(r.interrupt)
                    return true

                default:
                    return false
            }
        }

This killed method uses a very useful nonblocking select statement. If there is a value waiting in the kill channel, then it will take this value off the channel and execute the kill case. If there is no value to be taken off the kill channel (noone has signalled for the runner to stop) then it will choose the default case and return false.

As you can see, the main functionality channels provide us in this program is to allow us to do work in a seperate go routine, but still communicate with the "main" go routine and allow for the worker go routine to be cancelled manually or if it exceeds it's expiration time.

To see how this would all work together, let's create a small main program.

        func main() {
            // Create a value of type Runner
            runner := &Runner{
                // This is an unbuffered channel
                complete: make(chan error),
                //Expire after 4 seconds
                expire: make(chan <- time.After(4 * time.Second)),
                // A buffered channel
                kill: make(chan os.Signal, 1),
                // Add work
                work: createWork()
            }

            if err := runner.begin(); err != nil {
                log.Fatal("error was terminated", err)
            }
        }

        func createWork() []func() {
            work := []func()
            for i := 0; i < 5; i++ {
                work = append(work, func(){time.Sleep(time.Second * i)})
            }
            return work
        }

This will create a pointer to a runner with it's three channels and a slice of work to process. It will then begin the runner and wait for an error to be return, if the error is not null then it will log the error and terminate the program.

The runner concurrency patterns can be extended to solve much more complicated problems and is a great way to handle concurrency, while still allowing your program to maintain control over when it will terminate and give it the ability to shutdown cleanly by being notified of shutdown signals give from the operating system.

I learned most of what I've covered in this post from the book <a class="text-blue-500 no-underline- hover:underline" href="https://www.amazon.com/Go-Action-William-Kennedy/dp/1617291781">_Go In Action_</a> please check it out if you haven't already. It's a great resource for learning how to use go in real world situations.

Thanks for reading, let me know if you have any suggestions by leaving a comment below or reaching out to me on <a class="text-blue-500 no-underline- hover:underline" href="https://twitter.com/connerjensen780">Twitter</a>.
