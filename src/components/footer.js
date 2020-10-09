import React from "react"

import {useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
    query {
        allWpCategory {
            nodes {
                name
                posts {
                    nodes {
                        slug
                        title
                    }
                }
            }
        }
    }`)

    return (
        <footer>
            ©  {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>

        </footer>
    )
}