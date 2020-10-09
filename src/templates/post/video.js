import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import styles from '../../styles/templates/post/video.module.css'
import SEO from '../../components/seo'

export default ({ data }) => {
    const post = data.wpPost.VideoArticle
    return (
        <Layout>
            <SEO title={ post.videotitle }/>
            <div className={ styles.containerVideoPost }>
                { post.videotheme != null ? <h2 className={ styles.themeVideoPost }>{ post.videotheme }</h2> : null }
                { post.videotitle != null ? <h3 className={ styles.titleVideoPost }>{ post.videotitle }</h3> : null }
                { post.videovideo != null ? <iframe className={ styles.videoVideoPost } title={ post.videotitle } width="420" height="315" src={post.videovideo } /> : null}
                { post.videourl != null ? <a className={ styles.urlVideoPost } href={ post.videourl }>Watch the video</a> : null }
                { post.videotext != null ? <article className={ styles.articleVideoPost }>{ post.videotext }</article> : null }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        wpPost (slug: {eq: $slug}) {
            VideoArticle {
                videotheme
                videotitle
                videovideo
                videourl
                videotext
            }         
        }
    }
`