import React from "react"
import { Link } from "gatsby"
import GopherImage from "./gopher-image"

const BlogPopup = ({ show, setShowPopup }) => {
  if (show) {
    return (
      <div className="bounce-animation cool-gradient fixed bottom-0 rounded left-0 ml-5 mb-5 p-4">
        <Link to="/">
          <h2 className="font-semibold cursor-pointer">
            Download my free beginner go guide
          </h2>
          <p className="font-medium cursor-pointer">
            Learn how to get started with go
          </p>
          <div className="flex flex-row items-center content-center">
            <GopherImage />
            <span className="text-white text-xl font-bold cursor-pointer">
              Check it out ☝️
            </span>
          </div>
        </Link>
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-0 right-0 mr-2 cursor-pointer z-10"
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
