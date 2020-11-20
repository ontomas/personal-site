import React from "react"

import { Layout, Animations, SEO } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Animations extraGlitch />
    <div className="text-4xl text-center">
      <h1 className="text-glitch underline">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
