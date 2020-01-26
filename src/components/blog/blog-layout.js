import React, { useState, useEffect, useRef } from "react"

import BlogHeader from "./blog-header"
import BlogFooter from "./blog-footer"
import BlogSidebar from "./blog-sidebar"
import BlogPopup from "./blog-popup"
import BlogIntro from "./blog-intro"

import "./blog.css"
import { element } from "prop-types"

const BlogLayout = ({ children, categories }) => {
  const scrollRef = useRef(null)
  const [showPopup, setShowPopup] = useState(true)
  const [showScroll, setShowScroll] = useState(false)

  const backToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleScroll = () => {
    console.log(scrollRef.current.getBoundingClientRect().top)
    if (scrollRef.current.getBoundingClientRect().top <= -200) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      style={{ maxWidth: "1200px", margin: "0 auto" }}
      className="flex flex-col justify-center"
    >
      <BlogHeader />
      <BlogIntro />
      <main className="flex flex-col md:flex-row justify-between">
        <div>{children}</div>
        <BlogSidebar categories={categories} />
      </main>
      <BlogFooter />
      {showScroll ? (
        <div
          onClick={() => backToTop()}
          className="flex justify-center items-center cursor-pointer bg-gray-500 text-white text-3xl w-12 h-12 rounded-full fixed z-10 bottom-0 right-0 mr-5 mb-5 p-5"
        >
          ^
        </div>
      ) : null}
      <BlogPopup show={showPopup} setShowPopup={setShowPopup} />
    </div>
  )
}

export default BlogLayout
