import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import styles from '../../styles/templates/post/image.module.css'
import SEO from '../../components/seo'

export default ({ data }) => {
    const post = data.wpPost.ImageArticle
    return (
        <Layout>
            <SEO title={ post.imagetitle }/>
            <div className={ styles.containerImagePost }>
                { post.imagetheme != null ? <h2 className={ styles.themeImagePost }>{ post.imagetheme }</h2> : null }

                { post.imagetitle != null ? <h3 className={ styles.titleImagePost }>{ post.imagetitle }</h3> : null }

                { post.imageimage != null  ? <img className={styles.imageImagePost} src={ post.imageimage.localFile.childImageSharp.fixed.src } alt="" /> : null }

                { post.imageurl != null ? <a className={ styles.urlImagePost } href={ post.imageurl }>Watch the image</a> : null }  

                { post.imagetext != null ? <article className={ styles.articleImagePost }>{ post.imagetext }</article> : null }        
            </div>                                                                                                     
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        wpPost (slug: {eq: $slug}) {
            ImageArticle {
                imageimage {
                    localFile {
                        childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
            }
            imagetext
            imagetheme
            imagetitle
            imageurl
            }     
        }
    }
`