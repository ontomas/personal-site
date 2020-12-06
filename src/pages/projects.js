import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Layout, Animations, SEO } from "../components"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              date
              tags
              title
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Projects" />
      <Animations />
      <ul className="uppercase text-glitch">
        {data.allMarkdownRemark.edges.map(({ node }, projectIdx) => {
          const { id, frontmatter } = node
          const { url, title, tags } = frontmatter
          return (
            <li key={id} className={projectIdx !== 0 ? "mt-6" : ""}>
              <Link to={url}>
                <h2 className="underline text-3xl">{title}</h2>
                <p className="uppercase text-xl">
                  {tags.map((tag, tagsIdx) =>
                    tagsIdx === 0 ? `${tag}` : ` / ${tag}`
                  )}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default ProjectsPage
