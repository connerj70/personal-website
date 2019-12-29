import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const [showHeader, setShowHeader] = useState(true)
  const headerLinks = ["about", "skills", "portfolio", "contact"]
  return (
    <header className="text-white">
      <div
        className={
          "fixed w-10 h-10 bg-black flex justify-center items-center rounded-r" +
          (showHeader ? " invisible" : " visible")
        }
        onClick={() => setShowHeader(true)}
      >
        <FaBars color="#fff" />
      </div>
      <div
        className={
          "fixed w-3/4 md:w-1/4 lg:1/6 h-screen bg-black lg:visible" +
          (showHeader ? " visible" : " invisible")
        }
      >
        <span
          className="fixed ml-4 mt-4 lg:invisible"
          onClick={() => setShowHeader(false)}
        >
          X
        </span>
        <ul className="p-10 mt-5">
          {headerLinks.map(item => {
            return <li className="cursor-pointer">{item}</li>
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
