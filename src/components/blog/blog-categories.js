import React from "react"
import { graphql } from "gatsby"

const BlogCategories = ({ categories }) => {
  let cats = categories.map(cat => {
    return (
      <span className="bg-c-orange mr-2 p-2 text-white border rounded cursor-pointer">
        {cat.tag} {cat.totalCount}
      </span>
    )
  })
  return (
    <div className="rounded text-black border p-4 mt-4 w-full">
      <h2 className="mb-4">Blog Categories</h2>
      {cats}
    </div>
  )
}

export default BlogCategories
