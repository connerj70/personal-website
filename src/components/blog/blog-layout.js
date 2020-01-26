import React, { useState } from "react"

import BlogHeader from "./blog-header"
import BlogFooter from "./blog-footer"
import BlogSidebar from "./blog-sidebar"
import BlogPopup from "./blog-popup"

import "./blog.css"

const BlogLayout = ({ children, categories }) => {
  const [showPopup, setShowPopup] = useState(true)

  const backToTop = () => {
    console.log("hi")
  }

  return (
    <div
      style={{ maxWidth: "1200px", margin: "0 auto" }}
      className="flex flex-col justify-center"
    >
      <BlogHeader />
      <main className="flex flex-col md:flex-row justify-between">
        <div>{children}</div>
        <BlogSidebar categories={categories} />
      </main>
      <BlogFooter />
      <div
        onClick={() => backToTop()}
        className="cursor-pointer bg-black text-white rounded-full fixed z-10 bottom-0 right-0 mr-5 mb-5 p-5"
      >
        ^
      </div>
      <BlogPopup show={showPopup} setShowPopup={setShowPopup} />
    </div>
  )
}

export default BlogLayout
