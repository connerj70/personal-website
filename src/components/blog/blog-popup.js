import React from "react"
import {Link} from "gatsby"

const BlogPopup = ({ show, setShowPopup }) => {
  if (show) {
    return (
      
        <div className="bounce-animation cool-gradient fixed bottom-0 rounded left-0 ml-5 mb-5 p-4">
          <Link to="/">
          <h2 className="cursor-pointer">Download our free go guide</h2>
          <p className="cursor-pointer">Learn how to get started learning go</p>
          <span className="text-white font-bold cursor-pointer">Check it out ></span>
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
