import React from "react"
import { Link } from "gatsby"

import { Layout, Animations, SEO } from "../components"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Animations />
    <ul className="uppercase text-glitch">
      <li>
        <Link to="#">
          <h2 className="underline text-3xl">This website</h2>
          <p className="uppercase">Design / Frontend</p>
        </Link>
      </li>
    </ul>
  </Layout>
)

export default ProjectsPage
