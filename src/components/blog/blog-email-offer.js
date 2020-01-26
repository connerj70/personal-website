import React from "react"

const BlogEmailOffer = () => {
  return (
    <div
      style={{ top: "110px" }}
      className="cool-gradient rounded text-white border p-4 mt-4 w-full mb-4 sticky"
    >
      Join 28,141 other programmers
      <p className="text-black">
        Get programming and business tips, delivered to your inbox
      </p>
      <input
        className="mb-2 p-2 mr-2 text-black"
        type="text"
        placeholder="first name"
      />
      <input className="mb-2 p-2 text-black" type="text" placeholder="email" />
      <button className="pl-4 pr-4 pt-2 pb-2 rounded bg-blue-500 hover:bg-blue-700">
        Subscribe
      </button>
    </div>
  )
}

export default BlogEmailOffer
