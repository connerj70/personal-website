import React from "react"

import BlogEmailOffer from "./blog-email-offer"
// import BlogCategories from "./blog-categories"
import BlogRecommend from "./blog-recommended"

const BlogSidebar = ({ categories }) => {
  return (
    <div className="md:mt-4 lg:mb-4 lg:w-1/3 lg:ml-4 lg:border-l lg:pl-8">
      {/* <div className="border w-full h-40">Advertisement</div> */}
      <BlogEmailOffer />
      <BlogRecommend />
      {/* <BlogCategories categories={categories} /> */}
    </div>
  )
}

export default BlogSidebar
