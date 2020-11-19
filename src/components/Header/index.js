import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="py-8">
    <div className="container mx-auto px-4 text-2xl uppercase text-glitch">
      <h1>
        <Link
          to="/"
          className="Header__menu-item"
          activeClassName="Header__menu-item--active"
        >
          <span className="underline">{siteTitle}</span>
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            to="/projects"
            className="Header__menu-item"
            activeClassName="Header__menu-item--active"
          >
            <span className="underline">Project</span>
          </Link>
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
