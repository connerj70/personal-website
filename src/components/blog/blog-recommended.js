import React from "react"

const BlogRecommended = () => {
  return (
    <div
      style={{ top: "630px", maxWidth: "500px", margin: "0 auto" }}
      className="p-2 md:sticky"
    >
      <h2 className="text-xl font-semibold bg-gray-700 p-2 pt-3 pb-3 text-white">
        ⭐ <span className="ml-2">Recommended Posts</span>
      </h2>
      <ul>
        <a href="/blog/ruby-abstract-class">
          <li className="p-3 border-b-4 transition duration-300 hover:bg-gray-300">
            {" "}
            Ruby Abstract Classes
          </li>
        </a>
        <a href="/blog/the_ruby_programming_language_review">
          <li className="p-3 border-b-4 transition duration-300 hover:bg-gray-300">
            {" "}
            The Ruby Programming Language Review Part 1
          </li>
        </a>
        <a href="/blog/concurrency-patterns-runner">
          <li className="p-3 border-b-4 transition duration-300 hover:bg-gray-300">
            Concurrency Patterns In Go
          </li>
        </a>
      </ul>
    </div>
  )
}

export default BlogRecommended
