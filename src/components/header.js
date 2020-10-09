import {useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

import styles from "../styles/menu/menu.module.css"

export default ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query{
    allWpPost {
      nodes {
        title
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
    allWpPage {
      nodes {
        title
        slug
      }
    }
  }
  `)

  return (
    <header>       
        <ul className={styles.ulStart}>
          <li>
          <Link to="/">{ siteTitle }
          </Link>
            <ul>
              <li className={styles.liLink}>Post :</li>
                { data.allWpPost.nodes.map((node) => (
              <li className={styles.liLink} key={ node.slug }>
                <Link to={ "/" + node.slug }>{ node.title }</Link>
              </li>
            ))}
            </ul>
          </li>
        </ul>
    </header>
  )
}