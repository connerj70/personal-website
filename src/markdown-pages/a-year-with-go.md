---
path: "/blog/a-year-with-go"
title: "A Year With Go"
date: "2020-06-07"
featuredImage: "../images/a-year-with-go/a-year-with-go-min.jpg"
tags: ["golang", "programming", "go"]
---

It’s been about a year since I started programming in Go. I come from a javascript background, having went to a web development coding bootcamp, so Go is the first statically typed, compiled language that I’ve used extensively.

### Types?!?!

When I first started programming in Go, my biggest shock was having to define types. “What do you mean I have to specify exactly what the JSON I’m receiving will look like?!”. Initially I thought this was a pain and that it required so much extra work. Defining structs, adding struct tags, Unmarshaling, using pointers to handle null values, all these things were so new to me and there seemed to be so many steps and potential pitfalls. Especially when compared to javascript, where I never thought about any of these things. In javascript I would just make a request for data, receive the response and then use whatever fields I liked off that response. But, now that I have been programming in Go for a year, I’ve come to appreciate it’s explicit nature. Jumping through the hoops of go, allows you to have much more confidence in the data you are using in your programs. And having confidence in your data is such a huge part of programming.

Bill Kennedy of <a class="text-blue-500 no-underline- hover:underline" href="https://www.ardanlabs.com/">Ardan Labs</a> (A great resource for learning go btw) has said that

> Go is a data oriented programming language, data dominates. Every problem you’ve ever solved with code has been a data transformation problem. Every data transformation you perform has to be accurate, consistent. Type Is Life.

### Safety With Types

With this in mind the hurdles go makes you jump over to bring data into your program make sense. You define the structure of your data so explicitly, that you know if your program makes it past the Unmarshaling step, that the data you are working with is consistent and is what you expect. With javascript (not including typescript) you don’t have this reliability, a field that you are expecting to be an int could one day show up as a string, and this could crash your entire program. I think that the slight convenience javascript and other untyped languages provide is not worth the cost of reduced reliability and safety. I think Go embodies the saying of “Make things easy to understand, not easy to do”. It doesn’t matter if it takes one an extra 30 minutes (like it did when I first started using Go) to set up a struct and Unmarshal some JSON, you will be thanking oneself when debugging, refactoring, or extending your application.

### Maturing Into Go

Once I got used to the type system, my productivity and confidence with go increased dramatically, however, I was mainly using the features of the language that were familiar to me. For loops, if statements, and functions. I was still programming in a way that was reminiscent of javascript. I kept this up for a few months, until out of necessity I started learning about the more unique parts of Go, Channels, go routines, and mutexs. I think around the 7 or 8 month mark is when I started to think about writing more “Go” specific code as opposed to just writing my normal javascript programs in a different language. I’ve only recently started using some of these new features and I am excited to learn more about these feature and dig deeper into the inner workings of Go.

Thanks for reading about my first year with Go, I'm excited to become more a part of the Go community (GopherCon 2020 here I come!) and to keep learning about the language.
