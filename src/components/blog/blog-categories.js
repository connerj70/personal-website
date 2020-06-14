import React from "react"

const BlogCategories = ({ categories }) => {
  let cats = categories.map(cat => {
    return (
      <span className="bg-c-orange mr-2 p-2 mt-2 text-white border rounded cursor-pointer">
        {cat.tag}{" "}
        <span className="text-gray-700 text-xs p-1">{cat.totalCount}</span>
      </span>
    )
  })
  return (
    <div className="rounded text-black border p-4 mt-4 w-full">
      <h2 className="mb-1 font-semibold">Blog Categories</h2>
      <div className="flex flex-wrap">{cats}</div>
    </div>
  )
}

export default BlogCategories
