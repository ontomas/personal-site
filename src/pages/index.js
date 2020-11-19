import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Layout, SEO, Animations } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar-xs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      map: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Animations turnOn />
      <div className="pointer-events-auto">
        <div className="mb-10 mx-auto" style={{ maxWidth: "150px" }}>
          <Img fluid={data.avatar.childImageSharp.fluid} />
        </div>
        <p className="text-3xl uppercase text-glitch mb-5">
          Hi, I'm{" "}
          {/* <Tooltip content="That's me right there">
            <span>
              <mark>Tomas Oniščiukas</mark>
            </span>
          </Tooltip> */}
        </p>
        <p className="text-3xl uppercase text-glitch mb-5">
          A bunch of atoms held together and propeld forward by frontend
          development, process optimisation and problem solving in general.
        </p>
        <p className="text-3xl uppercase text-glitch">
          Currently doing all that at{" "}
          <Link to="https://nordsec.com">
            <span className="underline">Nordsec</span>
          </Link>{" "}
          in{" "}
          {/* <Tooltip content={data.map}>
            <span>
              <mark>Vilnius</mark>
            </span>
          </Tooltip> */}
          .
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
