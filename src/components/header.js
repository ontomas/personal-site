import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="py-8">
    <div className="container mx-auto px-4 text-2xl uppercase text-glitch">
      <h1 className="underline">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul>
        <li className="underline">
          <Link to="/projects">Project</Link>
        </li>
        {/* <li className="underline">
          <Link to="#">Future</Link>
        </li> */}
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
