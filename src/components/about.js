import React from "react"
import ConnerImage from "../components/conner-image"

const About = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl underline" id="about">
        About
      </h1>
      <div className="max-w-md">
        <ConnerImage />
      </div>
      <div className="leading-loose text-left">
        <h2 className="text-3xl mt-4 text-center lg:text-left lg:text-4xl animated-text">
          Hello! I'm{" "}
          <span className="font-semibold text-c-orange">Conner.</span>
        </h2>
        <p>
          <span className="animated-text" style={{ animationDuration: "6s" }}>
            I'm a{" "}
            <span className="font-semibold text-c-orange">
              software engineer
            </span>{" "}
            from Sandy, Utah. <br />
          </span>
          <span className="animated-text" style={{ animationDuration: "12s" }}>
            <br /> I enjoy building clean and performant web applications using{" "}
            <span className="font-semibold text-c-orange">React</span> and{" "}
            <span className="font-semibold text-c-orange">Golang.</span>
          </span>
          <br />
          <br />
          <span className="animated-text" style={{ animationDuration: "18s" }}>
            In my free time you can find me hiking, powerlifting, reading,
            spending time with my family, and learning new things about{" "}
            <span className="font-semibold text-c-orange">
              computer science
            </span>{" "}
            and{" "}
            <span className="font-semibold text-c-orange">
              software architecture.
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default About
