import React from "react"

const BlogRecommended = () => {
  return (
    <div style={{ top: "630px" }} className="p-2 sticky">
      <h2 className="text-xl font-semibold bg-gray-300 p-2 pt-3 pb-3">
        ⭐ Recommended Posts
      </h2>
      <ul>
        <a href="/blog/top-programming-languages-2020">
          <li className="p-3 border-b-4 transition duration-300 hover:bg-c-orange">
            {" "}
            Top Programming Languages 2020
          </li>
        </a>
        <a href="/blog/highest-paying-programming-jobs">
          <li className="p-3 border-b-4 transition duration-300 hover:bg-c-orange">
            {" "}
            Highest Paying Programming Jobs
          </li>
        </a>
        <a href="/blog/concurrency-patterns-runner">
          <li className="p-3 border-b-4 transition duration-300 hover:bg-c-orange">
            Concurrency Patterns In Go
          </li>
        </a>
      </ul>
    </div>
  )
}

export default BlogRecommended
