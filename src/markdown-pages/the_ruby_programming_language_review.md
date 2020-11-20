---
path: "/blog/the_ruby_programming_language_review"
title: "The Ruby Programming Language Review Part 1"
date: "2020-10-16"
featuredImage: "../images/the_ruby_language_main.jpeg"
tags: ["ruby", "programming", "review"]
---

### My Review of The Ruby Programming Language

I needed to learn Ruby for a new job I was starting, and after a quick google search I came across _The Ruby Programming Language_.

After ordering it off <a class="text-blue-500 no-underline- hover:underline" href="https://www.amazon.com/Ruby-Programming-Language-Everything-Need/dp/0596516177/ref=sr_1_3?dchild=1&keywords=the+ruby+programming+language&qid=1602857932&sr=8-3">Amazon</a> and receiving it in the mail, I cracked it open and began reading.

**_The following is a list of things that I learned from reading this book, hopefully they will be as helpful to you as they were to me._**

One of the first things I was curious about is how Ruby developers view documentation.

The book quickly answered my question by introducing me to _ri_ ruby documentation tool.

#### ri ruby documentation

_ri_ can be invoked followed by the name of a Ruby class, module or method and you can view the documentation right there in your terminal.

    ri String

The next great thing this book introduced to me was the ability to run ruby with the -w flag

#### Ruby with the -w flag

Coming from a compiled language I was missing some of the feedback it gave me while writing programs.

The ruby -w flag will warn you about possible things that could break your program while it is executing and takes the place of helpful compile time errors/warnings

#### All numeric objects are immutable

There are no methods that allow you to change the value of a numeric object. This is nice to know when passing numeric objects around, there is no need to worry that a method will modify the numeric object.

#### Avoid using string literals in loops

String literals are mutable, therefore Ruby cannot use the same object to represent two identical string literals.

    i = 0
    while i < 100
        print "hello".object_id
    end

If you are using string literals in a loop, a new string will be created for each iteration of the loop.

#### Make a copy of an array

You can make a copy of an existing array by passing it to `Array.new(array_to_be_copied)`

This will be useful if you don't want to mutate the old array and you want to keep your methods pure.

#### Use symbols when you don't care about content

If you are using strings not for their content, but as a unique identifier, then you should use a symbol, they are cheaper and immutable by default.

#### Most objects are passsed by reference (pass-reference-by-value)

All objects, except for Fixnum, and Symbol are passed by reference, which means the method they are passed to can mutate them.

Changes made to an object inside a method are visible outside the methods scope.

Ruby actually uses <a class="text-blue-500 no-underline- hover:underline" href="https://robertheaton.com/2014/07/22/is-ruby-pass-by-reference-or-pass-by-value/">pass-reference-by-value</a> semantics, which has some subtle, but important, differences (thanks to <a class="text-blue-500 no-underline- hover:underline" href="https://news.ycombinator.com/user?id=billyruffian">billyruffian</a> for pointing this out).

#### Difference between an Objects **Class** and an Objects **Type**

An object only ever has one class and it never changes throughout the life of the object.

An objects's type can change throughout the life of the object. Type is defined as the set of behaviors that an object responds to, or put another way, the set of methods this object has.

Use is \_ a? to check an objects class and respond \_ to? to check an objects type.

An Objects type is also known as duck typing, if it walks like a duck and talks like a duck, then it's a duck.

#### Only nil and false are False

The only two values in ruby that are False are nil and false. Even an empty string "" or 0 are truthy.

#### Multiple assignment with many left values and a single right value

    x, y, z = [1,2,3]

This assignment will produce the outcome of x = 1, y = 2, and z = 3

#### The ? operator is the only ternary operator (three operands) in ruby

    n == 1 ? 'message' : 'message'

This acts as a compact if/then/else statements

If the expression on the left evalutates to true, then the value on the left side of : is used, otherwise the value on the right side of : is used.

#### Raising exceptions

Raise an exception with `raise` method. If called with no arguments it raises a **RuntimeError**. If called with a single string argument it creates a new RuntimeError exception object with the specified string as its message.

#### Handling exceptions

Handle an exception with the a `begin` statement and a `rescue` clause.

    begin
      #attempt some statements
    rescue
      #write your exceptions handling code here
    end

#### Name the exception object

You can name the exception in the rescue clause, then use it in your exception handling code.

    begin
      #attempt some statements
    rescue => ex
      #handle the exception here
      puts "#{ex.class}: #{ex.message}"
    end

#### Using Proc objects

If you have the following code

    a, b = [1,2,3], [4,5]
    sum = a.inject(0) { |total, x| total + x }
    sum = b.inject(sum) { |total, x| total + x }

You can remove the duplication of the blocks by creating a proc object

    summation = Proc.new { |total, x| total +x }

Then, as long as you prefix it with &, you can pass this proc Object as the last parameter of any method invocation,

    sum = a.inject(0, &summation)
    sum = b.inject(sum, &summation)

#### Return statements in blocks and Procs

Using `return` in a block will not only return to the invoking iterator, but it also returns from the method that invoked the iterator

Using `return` in a Proc has the same behavior, but with some added complexity.

Because turning a block into a Proc object allows us to pass this Proc object around to other methods, when the Proc object calls `return` it may attempt to return from a method call that has already been returned from. This will raise a **_LocalJumpError_**

#### Return statements in Lambdas

Because lambdas are much like methods, using `return` in a lambda will work like a `return` statement in a method. It will return control to the enclosing scope in which the lambda was called in.

This makes it so we never need to worry about a **_LocalJumpError_**

### Conclusion

Hopefully, you learned something new from this post, I would highly recommend picking up _The Ruby Programming Language_ it has much more to offer and does an excellent job of teaching the intricacies of the language.

Thanks for reading!

I will be following this post up with another post about what I'm learning from _The Ruby Programming Language_ so keep an eye out for that.

Feel free to connect with me on Twitter @connerjensen780
