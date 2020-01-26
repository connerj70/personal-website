import React from "react"
import { Link } from "gatsby"

const BlogHeader = ({ siteTitle }) => {
  return (
    <header className="bg-blue">
      <ul className="pl-4 md:p-10 sticky top-0">
        <li className="cursor-pointer mb-6 lg:text-2xl pt-2">
          <Link to="/">
            <span className="text-c-orange">CONNER</span>JENSEN
          </Link>
        </li>
        <li className="cursor-pointer mb-6 hover:text-c-orange lg:text-2xl pt-2">
          <Link to="/">HOME</Link>
        </li>
        <li className="cursor-pointer mb-6 hover:text-c-orange lg:text-2xl">
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    </header>
  )
}

export default BlogHeader
