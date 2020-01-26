import React from "react"
import { graphql } from "gatsby"

const BlogCategories = ({ categories }) => {
  console.log("cat", categories)
  return (
    <div className="rounded text-black border p-4 mt-4 w-full">
      Blog categories
    </div>
  )
}

export default BlogCategories
