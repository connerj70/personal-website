import React from "react"
import { Link } from "gatsby"
import GopherImage from "./gopher-image"

const BlogPopup = ({ show, setShowPopup }) => {
  if (show) {
    return (
      <div className="bounce-animation cool-gradient fixed bottom-0 rounded left-0 ml-5 mb-5 p-4 custom-shadow">
        <Link to="/">
          <h2 className="font-semibold cursor-pointer mt-3 text-lg text-center mr-2 ml-2">
            Download my free beginner go guide
          </h2>
          <p className="text-md cursor-pointer mt-1 text-center mb-3">
            Learn how to get started with go!
          </p>
          <div className="flex flex-row items-center justify-center content-center text-center">
            <GopherImage />
            <span className="text-white text-xl cursor-pointer bg-blue-500 p-1 pl-2 pr-2 rounded">
              Check it out ☝️
            </span>
          </div>
        </Link>
        <button
          onClick={() => setShowPopup(false)}
          className="font-semibold absolute top-0 right-0 mr-2 cursor-pointer z-10 text-2xl"
        >
          x
        </button>
      </div>
    )
  } else {
    return null
  }
}

export default BlogPopup
