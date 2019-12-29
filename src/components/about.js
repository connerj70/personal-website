import React from "react"
import ConnerImage from "../components/conner-image"

const About = () => {
  return (
    <div>
      <h1 className="text-4xl underline">About</h1>
      <ConnerImage />
      <div className="leading-loose text-left">
        <h2 className="text-3xl mt-6 text-center">
          Hello! I'm{" "}
          <span className="font-semibold text-c-orange">Conner.</span>
        </h2>
        <p className="mt-2">
          I'm a{" "}
          <span className="font-semibold text-c-orange">web developer</span>{" "}
          from Sandy, Utah.
        </p>
        <p className="mt-2">
          I enjoy building clean and performant web applications using{" "}
          <span className="font-semibold text-c-orange">React</span> and{" "}
          <span className="font-semibold text-c-orange">Golang.</span>
        </p>
        <p className="mt-2">
          In my free time you can find me hiking, powerlifting, reading,
          spending time with my family, and learning new things about{" "}
          <span className="font-semibold text-c-orange">computer science</span>{" "}
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
