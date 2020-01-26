import React from "react"
import CoinImage from "../components/coin-image"
import ComingImage from "../components/coming-image"
import AgilityImage from "../components/agility-image"

const Portfolio = () => {
  return (
    <div className="lg:mt-12">
      <h1 className="text-4xl mt-6 underline" id="portfolio">
        Portfolio
      </h1>
      <a className="text-c-orange" href="/resume.pdf" download>Download Resume</a>
      <div className="flex flex-col justify-center">
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            Agility Ad Platform
          </h2>
          <p className="mb-2">
            Agility Ads Platform was built using React.js, and Golang. 
            This platform helped stremline customer onboarding and
            it produced $100,000 extra revenue in the first year of its release.
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
