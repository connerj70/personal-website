import React from "react"
import ConnerImage from "../components/conner-image"

const About = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl underline mb-4" id="about">
        About
      </h1>
      <div className="max-w-md">
        <ConnerImage />
      </div>
      <div className="leading-loose text-left">
        <h2 className="text-3xl mt-4 text-center lg:text-left lg:text-4xl animated-text mb-3">
          Hey! I'm <span className="font-semibold text-c-orange">Conner</span>
        </h2>
        <div>
          <p className="animated-text" style={{ animationDuration: "6s" }}>
            I'm a{" "}
            <span className="font-semibold text-c-orange">
              software engineer.
            </span>{" "}
            <br />I love building web apps and services.
          </p>
          <p className="animated-text" style={{ animationDuration: "12s" }}>
            I like to use{" "}
            <span className="font-semibold text-c-orange">Ruby,</span>{" "}
            <span className="font-semibold text-c-orange">React,</span>{" "}
            <span className="font-semibold text-c-orange">Go,</span>{" "}
            <span className="font-semibold text-c-orange">TypeScript</span>{" "}
            <span>and</span>{" "}
            <span className="font-semibold text-c-orange">Foundry</span>
          </p>
          <p className="animated-text" style={{ animationDuration: "18s" }}>
            In my free time you can find me hiking, working out, reading, and
            learning new things about{" "}
            <span className="font-semibold text-c-orange">
              computer science
            </span>{" "}
            and{" "}
            <span className="font-semibold text-c-orange">
              software development
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
