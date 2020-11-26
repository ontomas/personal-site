import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Layout, SEO, Animations } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar-xs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      map: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
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
          <Img fluid={data.avatar.childImageSharp.fluid} />
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
