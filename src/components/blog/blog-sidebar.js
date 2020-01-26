import React from "react"

import BlogEmailOffer from "./blog-email-offer"
import BlogCategories from "./blog-categories"

const BlogSidebar = ({ categories }) => {
  return (
    <div className="mt-4 mb-4 md:w-2/5 md:ml-4 border-l pl-8">
      <div className="border w-full h-40">Advertisement</div>
      <BlogEmailOffer />
      <BlogCategories categories={categories} />
    </div>
  )
}

export default BlogSidebar
