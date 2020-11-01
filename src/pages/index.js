import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Mon site"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Bienvenue !{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Dans ce site vous retrouverez toutes nos actualités</p>
        <Link to="/blog/">
          <Button marginTop="35px">Nos actualités</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
