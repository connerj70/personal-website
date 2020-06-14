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
        <h2 className="text-3xl mt-4 text-center lg:text-left lg:text-4xl">
          Hello! I'm{" "}
          <span className="font-semibold text-c-orange">Conner.</span>
        </h2>
        <p>
          I'm a{" "}
          <span className="font-semibold text-c-orange">web developer</span>{" "}
          from Sandy, Utah. <br />
          <br /> I enjoy building clean and performant web applications using{" "}
          <span className="font-semibold text-c-orange">React</span> and{" "}
          <span className="font-semibold text-c-orange">Golang.</span>
          <br />
          <br />
          In my free time you can find me hiking, powerlifting, reading,
          spending time with my family, and learning new things about{" "}
          <span className="font-semibold text-c-orange">
            computer science
          </span>{" "}
          and{" "}
          <span className="font-semibold text-c-orange">
            software architecture.
          </span>
        </p>
      </div>
    </div>
  )
}

export default About
