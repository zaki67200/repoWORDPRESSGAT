import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  
  return (
    <Layout>
        <SEO title="Home" />
        <h1>Home</h1>
        <p>{data.allWpPost.totalCount} Posts</p>
        <p>{data.allWpPage.totalCount} Pages</p>
        <Image />
        <Link to="https://www.gatsbyjs.com/">Go to Gatsby :p </Link>
      </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost {
      totalCount
    }
    allWpPage {
      totalCount
    }
  } 
`