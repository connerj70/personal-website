---
path: "/blog/go-docker-development-environment"
title: "Developing Go Apps With Docker"
date: "2020-08-11"
featuredImage: "../images/go-docker-development-environment/main.jpg"
tags: ["programming", "go", "docker"]
---

Most people know the benefits of running their production applications in docker containers. However, many people seem to overlook the upsides of using docker containers for day to day development.

### Why develop in Docker containers?

There are some great benefits to running your go app in a docker container during development, below are just a few of my favorites.

<ol class="pl-10 mb-5 mt-5 list-disc">
    <li class="mb-2 text-lg">Gives you the ability to easily use different versions of golang without needing to mess with your local go install.</li>
    <li class="mb-2 text-lg">Makes the transition from development to production quicker and smoother.</li>
    <li class="mb-2 text-lg">Allows you to onboard new developers with minimal effort.</li>
    <li class="mb-2 text-lg">Provides some powerful options for testing your database code.</li>
</ol>

Let's expound on these four benefits a little more.

#### Different versions of golang

Developing in a docker container means you can use any version of go that you want. This comes in handy if you work on multiple go applications each using their own go version.

For example, there is an application that I work with that uses go version 1.11.3. This application is not yet set up for docker development, so I have go version 1.11.3 installed on my local machine. That way when I develop this application, I can use the specific version of go that it will be running with in production.

This may not seem like a big deal but there were a few times I wrote code that worked on my machine, only to later find out that certain features I was using were only available in go versions later than 1.11.3

Although there are fantastic options like <a class="text-blue-500 no-underline- hover:underline" href="https://github.com/moovweb/gvm">gvm</a> for having multiple versions of go installed on your machine. I find it simpler and less frustrating to just use a Docker image with the specific version of go I need.

#### Transition from development to production

This some what ties into the above point, having a development environment that is as close to production as possible is always a good thing (always is a strong word, but I can't think of a reason why it would be better to have a development environment differ from production more than it needs to).

Having this similarity between development and production can really help cut down on "It works on my machine" errors and can make the CI/CD flow simpler.

Developing inside a container will also get you familiar with docker commands and quirks that may help you when debugging docker containers in production.

#### Easy onboarding

Doing your development in a docker container can mean that onboarding a new developer is as simple as installing Docker, sending them your .env file, and then having them run a simple command such as docker-compose up.

If everything is set up correctly, then the new developer should have the application up and running in a matter of minutes, instead of hours, or days.

Dockerfiles can also be great documentation for new developers to look over. They show exactly what evironment the application needs to be running in and the dependencies it needs.

#### Testing database code

Testing database code can be frustrating. Mocking is difficult and doesn't seem to give one the confidence one needs. Spinning up a local database requires one to install many dependencies and comes with a set of it's own problems, such as maintaining proper versions, remembering to have the database running and takes up valuable space on your hard drive.

When developing with Docker these problems vanish. Starting your application with docker-compose easily brings up a test database that is automagically added to your applications network. This makes it easy to swap in and out database versions, removes the need to remember to start up the database and allows you to easily delete images when you no longer need them.

When collaborating with other developers, it also makes it simple to ensure that you are working off the same version of the database.

### Downsides of developing in Docker containers

After going over these positives of developing inside Docker containers, it is fair to mention some of the drawbacks.

<ol class="pl-10 mb-5 mt-5 list-disc">
    <li class="mb-2 text-lg">More work on initial project set up</li>
    <li class="mb-2 text-lg">Debugging can be more complex</li>
    <li class="mb-2 text-lg">Adds another layer of complexity</li>
</ol>

#### More work to set up a project

Doing your development in docker usually means you must have another Dockerfile specifically for development. This means you have to go through the work of setting this up. You'll also likely want to use docker-compose, which means you'll need a docker-compose.yml file. This adds a small amount of extra work when you first set up your project, but over the long term I believe it saves you time and makes your develompent life easier.

#### Debugging is more complex

You can no longer just run your local debugger. This can be a pain if you are used to using the debugger regularly. However, With tools like <a class="text-blue-500 no-underline- hover:underline" href="https://code.visualstudio.com/docs/remote/remote-overview">VsCode Remote Development</a> it is now not much more complex than local debugging.

#### Adds another layer of complexity

Developing in Docker adds another layer of complexity you must think about, but if your app is running in Docker during production it is a good habit to think about this complexity on a regular basis. Not only this but the complexity comes with so many benefits that I think it's worth it in the long run.

### Conclusion

Thanks for reading about why I like to use Docker containers during development. I hope you learned something and are considering using Docker in development as well as production.
