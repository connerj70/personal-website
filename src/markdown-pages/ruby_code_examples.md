---
path: "/blog/ruby-code-examples"
title: "Ruby Code Examples Vs. Python Code Examples"
date: "2020-12-11"
featuredImage: "../images/ruby_code_examples/main.jpg"
tags: ["ruby", "programming", "python"]
description: "Ruby code examples vs Python code examples. Which one is easier to understand? Which one is more concise?"
---

### In this post I will prove that Ruby is better than Python.

.
<br />
.
<br />
.
<br />
.

Just kidding. **I'm going to show off some cool Ruby code examples**, then compare and contrast them with the same examples done in Python.

The reason behind this post is to have some fun comparing the two languages and to show off some of my favorite examples of Ruby's expressivness and power.

You may not agree with some of the examples, and might think they are difficult to understand, sub optimal, or just plain ugly.

That is completely understandable.

Let's get started with a little example of opening a file and reading it line by line.

#### Opening and reading files by line
<br />

**Ruby Code Example**

    file = File.open('example.txt').read

    file.each_line do |line|
        puts line
    end

I enjoy how simple it is to open and read text files in Ruby. The fact that Ruby has a built in ```each_line``` method on the ```String``` object speaks to how the Ruby language wants to make developers <a class="text-blue-500 no-underline- hover:underline" href="https://www.artima.com/intv/ruby.html">happy</a> by taking care of the little things for them.

<blockquote>Programmers often feel joy when they can concentrate on the creative side of programming, So Ruby is designed to make programmers happy. -<b>Yukihiro Matsumoto</b> (Creator of Ruby)
</blockquote>

**Python Code Example**

    file = open('example.txt', 'r') 
    lines = file.readlines() 

    for line in lines: 
        print(line.strip())

This example seems fine too. However, I don't like how one has to specify 'r' as the second parameter to ```open``` and how one needs to call ```strip()``` on each line.

These examples are both four lines long and they are simple enough, but I prefer the Ruby example. The way it reads is not only clearer, but there are less details for the programmer to remember.

Looking at the ruby example it feels very much like english. There is no remembering to specify an 'r' as the second parameter to ```open```, and no need to call ```strip()``` on each line.

**I'd imagine that someone who knew neither Ruby or Python would have an easier time understanding the Ruby code example as opposed to the Python example.**

The differences between these examples may seem small, but the way a language handles the small stuff can often times shed light on how things are handled in the language as a whole.

Ok, on to the next example.

#### Returning early from a function/method

**Ruby Code Example**

    def example_method(x, y)
        return if x == 7
        return unless y == 10

        x + y
    end

One of my favorite features of Ruby is the unless keyword. It's the same as a ```!=``` but I think it makes the code not only look nicer, but also easier to read.


**Python Code Example**

    def example_method(x, y):
        if x == 7:
            return
        if y != 10:
            return

        return x + y

This Python example is completely fine, but I don't think it has the succinctness and character that the Ruby example has.

My eye much prefers the Ruby examples. It seems so clean and neat, with the return on the same line as the conditional check. The assumed return at the end of the Ruby example is also very pleasing and puts all the focus on the actual "logic" that's being preformed.

However, I do like how Python methods do not need an ```end```, this not only makes them shorter but cleans up nested methods, functions, and classes.


#### Defining a class with a constructor method
<br />

**Ruby Code Example**

    class ExampleClass
        def initialize(a, b)
            @a, @b = a, b
        end
    end

    ec = ExampleClass.new(1,2)

In this example, I like how there is no need to pass in a reference to the object being constructed. I also think the ruby syntax of using an @ sign to denote an instance variable looks clean and reads well.

One thing I don't like about Ruby is how you must use the **new** method on the class to instantiate an object. I much prefer using just the class name, like Python does (ExampleClass()).

**Python Code Example**

    class ExampleClass: 

        def __init__(self, a, b): 
            self.a, self.b = a, b

    ec = ExampleClass(1,2)

As I said above I prefer how you instantiate an object with Python, because there is no need for the **new** keyword.

I don't enjoy the name of either Ruby's or Python's constructor. In Ruby, the word initialize is difficult to type and I don't like how it is not abbreviated in any way. In Python the "dunders" (__) are unsightly, however they do make it easy to see the constructor while scanning lines of code.

**Overall, I like Ruby's constructor better, mainly because of the lack of selfs scattered all over the place.**

#### Error Handling
<br />

**Ruby Code Example** 

    begin
        1+2
        raise 'EXCEPTION'
    rescue StandardError => e
        puts "An exception #{e} was raised"
    end