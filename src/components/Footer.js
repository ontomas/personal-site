import React from "react"

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-4 uppercase text-glitch">
        <ul className="mb-5">
          <li className="text-2xl underline">
            <a href="mailto:onisciukas.tomas@gmail.com">Email</a>
          </li>
          <li className="text-2xl underline">
            <a
              href="https://github.com/ontomas"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="text-2xl underline">
            <a
              href="https://www.linkedin.com/in/ontomas/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIN
            </a>
          </li>
        </ul>
        <span>© {new Date().getFullYear()}, Built by my fingers</span>
      </div>
    </footer>
  )
}

export default Footer
