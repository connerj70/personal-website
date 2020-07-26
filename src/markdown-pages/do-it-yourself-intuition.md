---
path: "/blog/do-it-yourself-intuition"
title: "Do It Yourself Technique Or Use Your Intuition"
date: "2020-07-25"
featuredImage: "../images/do-it-yourself-intuition/brain-min.jpg"
tags: ["interviews", "algorithms"]
---

In the book <a class="text-blue-500 no-underline- hover:underline" href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850">Cracking the Coding Interview</a>, there is a section titled Optimize & Solve DIY (Do It Yourself), which stresses the importance of solving a problem by first using your intuition, before trying to think of an algorithm.

Imagine you are given a problem (taken straight from the book). You are given a smaller string S and a bigger string B and you must design an algorithm to find all the permutations of the smaller string S in B.

Here’s an example you can use:
<br/>
S: abbc
<br/>
B: babcaacbbdbccabcb

Give it a try and see what your brain naturally does to find all the permutations of S in B.

When I tried to solve this I intuitively started at the very left of B and then looked at chunks of size length of S, to see if they contained all the characters of S. If I found all the characters then I would write down the index of the character I started searching from. Then I would move right one character and start the process over.

When I got to a position where there was a character that was not in S I intuitively thought I could save some time by skipping that character and some of the characters before it. This is a small optimization that was immediately apparent.

At this point we seem to have a fairly good intuition for how to solve the problem and the only thing that’s left is to transfer what our brain is doing into code. It’s astounding to me that our brains can so naturally and easily find a solution to a problem. It’s as if we can just feel the solution without giving it much conscious thought.

When I initially started finding permutations of S in B I did not consciously think about what I was doing. It was only after I had found the first few permutations that it became apparent to me. In a sense, I taught myself how to solve the problem, by solving the problem.

Keeping this in mind during interviews can be key to coming up with a solution. It may not be the most optimal solution, but it will get you unstuck and at least give you a starting point.

This technique may seem obvious, but it can be easy to forget when you're under pressure in an interview. During an interview one can be tempted to jump straight into trying to solve the problem with an elegant and optimized solution, before trying to solve the problem in an intuitive or obvious way.

I'm going to try to keep this way of solving problems in mind when attempting to solve interview questions.

I've enjoyed Cracking The Coding Interview so far and will continue to post about what I'm learning from it.
