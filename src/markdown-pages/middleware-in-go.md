---
path: "/blog/middleware-in-go"
title: "Middleware In Go"
date: "2020-06-14"
featuredImage: "../images/middleware-in-go/main.jpg"
tags: ["golang", "programming", "middleware", "api design"]
---

### How To Implement Your Own Middleware In Go

Middleware is an excellent way to clean up your code by wrapping similar functionality into common middleware functions.

For example, if you have routes in your api that can only be accessed by users who have a valid token, it would make sense to wrap the code that checks for this token into a **_authentication middleware_**, then apply this middleware on every endpoint that requires this kind of authentication.

Another useful middleware is a **_logging middleware_**. Instead of putting logging code everywhere throughout your application, you can put it at the top level of endpoints you would like to capture logs for, then just return errors from everywhere below in the call stack and know that they will be logged as they bubble up from the inner workings of your codebase.

Let's use the example of a logging middleware so we can see how it works in a go server.

First let's set up a simple web server with one endpoint called /hello.

    package main

    import (
    "log"
    "net/http"
    )

    func main() {

        http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
            w.Write([]byte("hi!"))
        })

        log.Panic(http.ListenAndServe(":8481", http.DefaultServeMux))

    }

Next let's give this endpoint a way to simulate an error. From this point forward I'm going to omit the package and import statements to make the code smaller.

    func main() {

        http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {

            // Simulate an error
            if r.Method == http.MethodPost {
    		    http.Error(w, "simulated error", 500)
                return
    	    }

            w.Write([]byte("hi!"))
        })

        log.Panic(http.ListenAndServe(":8481", http.DefaultServeMux))

    }

If we hit this endpoint with anything but a POST request we will receive the response "hi!", but if we hit it with a POST request we will receive the error "simulated error".

Now this error is returned to the user, which is good, but we also want to log this error so we can be made aware that it happened.
So lets add some code that will log this error.

    func main() {

        http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {

            // Simulate an error
            if r.Method == http.MethodPost {
                log.Println("simulated error")
    		    http.Error(w, "simulated error", 500)
                return
    	    }

            w.Write([]byte("hi!"))
        })

        log.Panic(http.ListenAndServe(":8481", http.DefaultServeMux))

    }

Now this may not look like to much of an inconvenience, but let's add a few more ways for this endpoint to create errors and then we will start to see how middleware can help us.

    func main() {

        http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {

            // Simulate an error.
            if r.Method == http.MethodPost {
                log.Println("simulated error #1")
    		    http.Error(w, "simulated error #1", 500)
                return
    	    }

            // Simulate error #2.
            if r.Method == http.MethodPut {
                log.Println("simulated error #2")
                http.Error(w, "simulated error #2", 500)
                return
    	    }

            // Simulate error #3.
    	    if r.Method == http.MethodDelete {
                log.Println("simulated error #3")
                http.Error(w, "simulated error #3", 500)
                return
    	    }

            w.Write([]byte("hi!"))
        })

        log.Panic(http.ListenAndServe(":8481", http.DefaultServeMux))

    }

At this point we have three lines of code that are mixed in with our application logic, whos only purpose is to log errors that occur. It may not seem like too much of a hastle, but if we stop and think for a second about how many possible errors we could return from an endpoint and then how many endpoints our applications may have, this could amount to hundreds of extra lines of code.

Another downside of coding these log statements direcly into the application logic, is if we decide to change our logger or log to an external service, we will have to go through our code and make a change at everypoint that we want to log an error. This makes our code brittle and hard to change.

So lets wrap up this logic into a middleware that will allow us to have all our logging functionality in one place.

What we are about to do may seem slightly confusing at first, but it will make sense if you read over the code a few times.

The basic idea behind what we are doing is this. We will create a struct called writerWithLog that we will embed an http.ResponseWriter inside of. We will also give this writerWithLog struct two other properties, a **_status and message_**. We will then override the default http.ReponseWriter **_Write_** and **_WriteHeader_** methods, by implementing our own versions of these methods on our writerWithLog struct.

**_The nice part about embedding a full http.ResponseWriter inside of our writerWithLog struct is that we have access to all the default methods that http.ResponseWriter does and we can manually override the methods we want to without effecting any existing functionality._**

Then whenever we call these methods our custom implementations will be invoked and we can at that time do whatever we want, but in our case we will just save some information on our writerWithLog struct.

    type writerWithLog struct {
        http.ResponseWriter
        status  int // This is where we will save the status
        message string // This is where we will save the error message
    }

    func (rec *writerWithLog) WriteHeader(code int) {
        rec.status = code
        rec.ResponseWriter.WriteHeader(code)
    }

    func (rec *writerWithLog) Write(b []byte) (int, error) {
        rec.message = string(b)
        return rec.ResponseWriter.Write(b)
    }

    func loggingMiddleware(next func(w http.ResponseWriter, r *http.Request)) func(w http.ResponseWriter, r *http.Request) {
        return func(w http.ResponseWriter, r *http.Request) {

            writerWithLog := writerWithLog{w, 200, ""}

            next(&writerWithLog, r)

            if writerWithLog.status != 200 {
                log.Println(writerWithLog.message)
            }
        }
    }

Finally, we wrap our handler func with our new middleware and remove the log statments in our main function.

    func main() {

       http.HandleFunc("/hello", loggingMiddleware(func(w http.ResponseWriter, r *http.Request) {

    	if r.Method == http.MethodPost {
    		http.Error(w, "simulated error #1", 500)
    		return
    	}

    	if r.Method == http.MethodPut {
    		http.Error(w, "simulated error #2", 500)
    		return
    	}

    	if r.Method == http.MethodDelete {
    		http.Error(w, "simulated error #3", 500)
    		return
    	}

    	w.Write([]byte("hi!"))
       }))

        log.Panic(http.ListenAndServe(":8481", http.DefaultServeMux))

    }

Now whenever a non 200 response is returned from our /hello endpoint it will be logged. We can apply this middleware to all our endpoints that need logging and if we ever want to do something extra like log to an external service or write our logs to a different file, we only need to change the code in our loggingMiddleware function!

Thanks for reading about how to create middleware in go, I hope you learned something useful!
