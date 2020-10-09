import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import styles from '../../styles/templates/post/text.module.css'
import SEO from '../../components/seo'

export default ({ data }) => {
    const post = data.wpPost.TextArticle
    return (
        <Layout>
            <SEO title={ post.texttitle }/>
            <div className={ styles.containerTextPost }>
                { post.texttheme != null ? <h2 className={ styles.themeTextPost }>{ post.texttheme }</h2> : null }
                { post.texttitle != null ? <h3 className={ styles.titleTextPost }>{ post.texttitle }</h3> : null }
                { post.texttext != null ? <article className={ styles.articleTextPost }>{ post.texttext }</article> : null }
                { post.texturl != null ? <a className={ styles.urlTextPost } href={ post.texturl }>More informations</a> : null }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        wpPost (slug: {eq: $slug}) {
            TextArticle {
                texttext
                texttheme
                texttitle
                texturl
            }          
        }
    }
`