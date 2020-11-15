import React from "react"

import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 uppercase text-glitch">
        <ul className="mb-5">
          <li className="text-2xl underline">
            <Link to="mailto:onisciukas.tomas@gmail.com">Email</Link>
          </li>
          <li className="text-2xl underline">
            <Link to="https://github.com/ontomas">Github</Link>
          </li>
          <li className="text-2xl underline">
            <Link to="https://www.linkedin.com/in/ontomas/">LinkedIN</Link>
          </li>
        </ul>
        <span>© {new Date().getFullYear()}, Built by my fingers</span>
      </div>
    </footer>
  )
}

export default Footer
