import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import styles from '../../styles/templates/post/default.module.css'
import SEO from '../../components/seo'

export default ({ data }) => {
    const post = data.wpPost
    return (
        <Layout>
            <SEO title={ post.title }/>
            <div className={ styles.containerDefaultPost }>
                <h3 className={ styles.titleDefaultPost }>{ post.title }</h3>
                <p className={ styles.textDefaultPost }>This is a default template</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        wpPost (slug: {eq: $slug}) {
            title
            slug          
        }
    }
`