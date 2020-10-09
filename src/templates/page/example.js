import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
    const page = data.wpPage
    return (
        <Layout>
            <div>
                <h1>{page.title}</h1>
                <hr />
                <h2>Content avec dangerouslySetInnerHTML</h2>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
                <hr />
                <h2>Content Brut</h2>
                {page.content}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        wpPage(slug: {eq: $slug}) {
            title
            content
        }
    }
`