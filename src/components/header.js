import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = ({ siteTitle }) => {
  const [showHeader, setShowHeader] = useState(false)
  const headerLinks = ["ABOUT", "PORTFOLIO", "CONTACT"]

  const handleIndexLinkClick = (item) => {
    setShowHeader(false)
    if (window.location.pathname === "/") {
      scrollTo(`#${item.toLowerCase()}`)
    } else {
      navigate("/")
    }
  }

  return (
    <header className="text-white max-w-sm lg:flex-grow bg-black">
      <div
        className={
          "z-10 fixed w-12 h-12 bg-black flex justify-center items-center rounded-br lg:hidden cursor-pointer" +
          (showHeader ? " hidden" : "")
        }
        onClick={() => setShowHeader(true)}
      >
        <FaBars color="#fff" />
      </div>
      <div
        className={
          "z-10 fixed lg:static h-screen bg-black lg:visible" +
          (showHeader ? " visible w-3/4 md:w-1/4 lg:w-full" : " invisible")
        }
      >
        <span
          className="z-10 fixed ml-4 mt-4 lg:invisible cursor-pointer transition-header"
          onClick={() => setShowHeader(false)}
        >
          X
        </span>
        <ul className="p-10 fixed">
          <li className="mb-8 lg:text-2xl">
            <span className="text-c-orange">CONNER</span>JENSEN
          </li>
          {headerLinks.map((item) => {
            return (
              <li
                key={item}
                onClick={() => {
                  handleIndexLinkClick(item)
                }}
                className="cursor-pointer mb-6 hover:text-c-orange lg:text-2xl"
              >
                {item}
              </li>
            )
          })}
          <Link to="/blog">
            <li className="cursor-pointer mb-6 hover:text-c-orange lg:text-2xl">
              BLOG
            </li>
          </Link>
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
