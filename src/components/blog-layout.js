import React from "react"

import BlogHeader from "./blog-header"
import BlogFooter from "./blog-footer"

const BlogLayout = ({ children }) => {
  return (
      <div>
        <div className="lg:flex">
        <BlogHeader />
        <div className="flex-col lg:flex-grow p-3 md:p-10 justify-center items-center">
            <main style={{ margin: "0 auto", maxWidth: "900px" }}>{children}</main>
        </div>
        </div>
        <BlogFooter />
    </div>
  )
}

export default BlogLayout
