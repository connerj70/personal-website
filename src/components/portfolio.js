import React from "react"
import CoinImage from "../components/coin-image"
import ComingImage from "../components/coming-image"

const Portfolio = () => {
  return (
    <div className="lg:mt-12">
      <h1 className="text-4xl mt-6 underline" id="portfolio">
        Portfolio
      </h1>
      <div className="flex flex-col justify-center">
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            CryptoCompare
          </h2>
          <p className="mb-2">
            This was built using React.js and Node.js as well as CSS grid and
            flexbox. It makes use of sockets to continuously pull in live data
            about crypto currency prices and graphs them using chart.js
          </p>
          <CoinImage />
        </div>

        <h2 className="text-2xl font-semibold text-c-orange mt-4">
          ComingSoon
        </h2>
        <ComingImage />
        <h2 className="text-2xl font-semibold text-c-orange mt-4">
          ComingSoon
        </h2>
        <ComingImage />
        <h2 className="text-2xl font-semibold text-c-orange mt-4">
          ComingSoon
        </h2>
        <ComingImage />
      </div>
    </div>
  )
}

export default Portfolio
