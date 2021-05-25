import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Layout, SEO, Animations } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar-xs.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      map: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Animations turnOn channel />
      <div className="pointer-events-auto">
        <div className="mb-10 mx-auto w-40">
          <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} />
        </div>
        <p className="text-3xl uppercase text-glitch mb-5">
          Hi, I'm <mark>Tomas Oniščiukas</mark>
        </p>
        <p className="text-3xl uppercase text-glitch mb-5">
          A bunch of atoms held together and propelled forward by frontend
          development, process optimisation and problem solving in general.
        </p>
        <p className="text-3xl uppercase text-glitch">
          Currently doing all that at{" "}
          <a
            className="underline"
            href="https://nordsec.com"
            target="_blank"
            rel="noreferrer"
          >
            Nordsec
          </a>{" "}
          in <mark>Vilnius</mark>.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
