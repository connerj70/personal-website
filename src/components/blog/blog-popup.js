import React from "react"

const BlogPopup = ({ show, setShowPopup }) => {
  if (show) {
    return (
      <div className="bounce-animation cool-gradient fixed bottom-0 rounded left-0 ml-5 mb-5 p-4">
        <h2>Get your free stuff here</h2>
        <p>This is some great free stuff!</p>
        <p>Wow so cool!</p>
        <span className="text-white">Check it out ></span>
        <span
          onClick={() => setShowPopup(false)}
          className="absolute top-0 right-0 mr-2 cursor-pointer"
        >
          x
        </span>
      </div>
    )
  } else {
    return null
  }
}

export default BlogPopup
