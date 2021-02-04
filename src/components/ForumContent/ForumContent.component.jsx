import React, { useState } from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import { IoChatbubblesOutline } from "@react-icons/all-files/io5/IoChatbubblesOutline"

import "./ForumContent.css"

// The `ForumContent` component renders the data from GraphQL to the Gatsby app
export default function ForumContentComponent() {
  // Define the initial states for the "Read More" link
  const [readMore, setReadMore] = useState(false)

  // Dynamically change the link label
  const linkName = readMore ? "Read Less ˗" : "Read More +"

  return (
    // Use GraphQL's `StaticQuery` to get the data
    <StaticQuery
      query={graphql`
        query AllBlogsPosts($skip: Int! = 0) {
          # Get the date, title, description, expandedDescription, author details
          allMarkdownRemark(skip: $skip, limit: 5) {
            edges {
              node {
                frontmatter {
                  date
                  title
                  description
                  expandedDescription
                  author
                  tags
                  path
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {/* Loop through the list of `data` from the `AllBlogsPosts` query */}
          {data.allMarkdownRemark.edges.map(post => {
            const {
              title,
              author,
              date,
              description,
              expandedDescription,
              tags,
              path,
            } = post.node.frontmatter

            {
              /* A function which displays the `expandedDescription` on click. */
            }
            const extraContent = (
              <div>
                <p className="extra-content">{expandedDescription}</p>
              </div>
            )

            return (
              <div className="forum-content-feed">
                <div className="forum-content-feed-card">
                  <div className="forum-content-feed-card-icon-container">
                    <IoChatbubblesOutline />
                  </div>
                  <div className="forum-content-feed-card-info">
                    <Link
                      to={path}
                      className="forum-content-feed-card-info-title"
                    >
                      {title}
                    </Link>

                    {/* Render tags */}
                    <p className="forum-content-feed-card-info-tags">
                      {tags &&
                        tags
                          .split("")
                          .map(t => <span key={`${title}-${t}`}>{t}</span>)}
                    </p>

                    {/* Show or remove the `desc` based on the click state of the link */}
                    <p
                      className="desc"
                      style={{
                        display: !readMore ? "block" : "none",
                      }}
                    >
                      {description}
                    </p>

                    {/* Show the default `desc` or `extraContent` based on the click state of the link */}
                    <p className="forum-content-feed-card-info-desc">
                      {readMore && extraContent}
                    </p>
                    <a
                      className="forum-content-feed-card-info-link"
                      onClick={() => {
                        // Toggle the "Read More" link label
                        setReadMore(!readMore)
                      }}
                    >
                      {linkName}
                    </a>
                  </div>
                  <div className="forum-content-feed-card-information">
                    <p className="forum-content-feed-card-topic">12</p>
                    <p className="forum-content-feed-card-posts">30</p>
                    <div className="forum-content-feed-card-freshness">
                      <p>{date}</p>
                      <p className="forum-content-feed-card-freshness-author">
                        {author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      )}
    />
  )
}
