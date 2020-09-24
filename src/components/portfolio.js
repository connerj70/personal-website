import React from "react"
import CoinImage from "../components/coin-image"
import ComingImage from "../components/coming-image"
import AgilityImage from "../components/agility-image"
import BedsImage from "../components/beds-image"

const Portfolio = () => {
  return (
    <div className="lg:mt-12">
      <h1 className="text-4xl mt-6 underline" id="portfolio">
        Portfolio
      </h1>
      <a className="text-c-orange" href="/conner-jensen-resume.pdf" download>
        Download Resume
      </a>

      <div className="flex flex-col justify-center">
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            Beds: Habit Tracking App
          </h2>
          <p className="mb-2">
            Beds is built using <span className="text-c-orange">Go, React, and Vue</span>. It allows users to create goals, challenge friends, and win prizes by building habit streaks.
            <br />
          </p>
          <BedsImage />
        </div>
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            Agility Ads Self Service Platform
          </h2>
          <p className="mb-2">
            This was built using React.js, Golang, and PostgreSQL. It allows
            businesses to run geo fencing and addressable advertising campaigns.
          </p>
          <AgilityImage />
        </div>
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            CryptoCompare
          </h2>
          <p className="mb-2">
            This was built using React.js and Node.js as well as CSS grid and
            flexbox. It makes use of sockets to continuously pull in live data
            about crypto currency prices and graph them using chart.js
            <br />
            <span className="text-red-600">
              *Note this was not built to be compatible with mobile devices
            </span>
          </p>
          <CoinImage />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
