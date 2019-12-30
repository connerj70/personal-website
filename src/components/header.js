import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ siteTitle }) => {
  const [showHeader, setShowHeader] = useState(false)
  const headerLinks = ["ABOUT", "SKILLS", "PORTFOLIO", "CONTACT"]
  return (
    <header className="text-white max-w-md lg:flex-grow bg-black">
      <div
        className={
          "z-10 fixed w-12 h-12 bg-black flex justify-center items-center rounded-br lg:hidden" +
          (showHeader ? " hidden" : "")
        }
        onClick={() => setShowHeader(true)}
      >
        <FaBars color="#fff" />
      </div>
      <div
        className={
          "z-10 fixed w-3/4 md:w-1/4 lg:w-full lg:static h-screen bg-black lg:visible" +
          (showHeader ? " visible" : " invisible")
        }
      >
        <span
          className="z-10 fixed ml-4 mt-4 lg:invisible"
          onClick={() => setShowHeader(false)}
        >
          X
        </span>
        <ul className="p-10 fixed">
          {headerLinks.map(item => {
            return (
              <li
                onClick={() => {
                  scrollTo(`#${item.toLowerCase()}`)
                  setShowHeader(false)
                }}
                className="cursor-pointer mb-6 hover:text-c-orange lg:text-2xl"
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
