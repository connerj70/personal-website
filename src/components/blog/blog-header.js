import React from "react"
import { Link } from "gatsby"

const BlogHeader = ({ siteTitle }) => {
  return (
    <header className="flex flex-row justify-between p-4 pt-6 sticky top-0 bg-white z-10 border-b">
      <Link to="/blog" className="text-2xl">
        <span className="text-c-orange">CONNER</span>JENSEN
      </Link>
      <ul className="pl-4 flex flex-row flex-initial">
        <li className="cursor-pointer mb-6 hover:text-c-orange mr-4">
          <Link to="/">ABOUT</Link>
        </li>
        <li className="cursor-pointer mb-6 hover:text-c-orange">
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    </header>
  )
}

export default BlogHeader
