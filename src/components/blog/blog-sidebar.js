import React from "react"

import BlogEmailOffer from "./blog-email-offer"
// import BlogCategories from "./blog-categories"
import BlogRecommend from "./blog-recommended"

const BlogSidebar = ({ categories }) => {
  return (
    <div className="md:mt-4 md:mb-4 md:w-2/5 md:ml-4 md:border-l md:pl-8">
      {/* <div className="border w-full h-40">Advertisement</div> */}
      <BlogEmailOffer />
      <BlogRecommend />
      {/* <BlogCategories categories={categories} /> */}
    </div>
  )
}

export default BlogSidebar
