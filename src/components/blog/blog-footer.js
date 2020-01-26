import React from "react"
import { Link } from "gatsby"

const BlogFooter = () => {
  return (
    <div className="w-full h-20 bg-black p-4">
      <ul className="flex-initial flex-col text-white content-center justify-center">
        <li className="text-xl">
          <Link to="/">
            CONNER<span className="text-c-orange">JENSEN</span>
          </Link>
          <a
            className="text-sm ml-4 text-c-orange"
            href="https://app.termly.io/document/privacy-policy/e78c30c7-8bc9-4c98-b9b7-201825828752"
          >
            Privacy Policy
          </a>
        </li>

        <li className="text-xs">
          <span className="text-c-orange">*</span>This blog is produced with the
          assistance of urlong tea 🍵
        </li>
      </ul>
    </div>
  )
}

export default BlogFooter
