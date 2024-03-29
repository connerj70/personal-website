import React from "react"
import CoinImage from "../components/coin-image"
import BatonImage from "./baton-image"
import YourStoryImage from "./your-story-image"

const Portfolio = () => {
  return (
    <div className="lg:mt-4">
      <h1 className="text-4xl mt-6 underline" id="portfolio">
        Portfolio
      </h1>
      <a className="text-c-orange" href="/conner-jensen-resume.pdf" download>
        Download Resume
      </a>

        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            YourStory
          </h2>
          <p className="mb-2">
            YourStory is an interactive choose your own adventure storybook app for kids.
            It was built with Next.js and TailwindCSS
            <br />
          </p>
          <YourStoryImage />
        </div>
      <div className="flex flex-col justify-center">
        <div className="lg:max-w-md">
          <h2 className="text-2xl font-semibold text-c-orange mt-4">
            Baton: A Lukso Relayer Service
          </h2>
          <p className="mb-2">
            Built to provide users with gas free transactions on the Lukso
            blockchain. Built with TypeScript, PostgreSQL, and ethers.js
            <br />
          </p>
          <BatonImage />
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
