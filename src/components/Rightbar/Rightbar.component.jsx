import React from "react"

import { BsChat } from "@react-icons/all-files/bs/BsChat"

import "./Rightbar.css"
import { Link, StaticQuery } from "gatsby"

// The `Rightbar` contains the recent topics and footer sections
export default function Rightbar() {
  return (
    <StaticQuery
      query={graphql`
        query recentPostsQuery {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="rightbar">
            <div className="rightbar-recent">
              <h3>Recent Topics</h3>
              <div className="rightbar-recent-line" />
              {data.allMarkdownRemark.edges.map(post => {
                const { title, path } = post.node.frontmatter

                return (
                  <ul className="rightbar-recent-list">
                    <li className="rightbar-recent-list-item">
                      <BsChat />
                      <li>
                        <Link
                          to={path}
                          className="rightbar-recent-list-item-link"
                        >
                          {title} &#8250;
                        </Link>
                      </li>
                    </li>
                  </ul>
                )
              })}
            </div>
            <footer>
              <p>Home</p>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Blog</p>
              <p>Contact</p>
            </footer>
          </div>
        </>
      )}
    />
  )
}
