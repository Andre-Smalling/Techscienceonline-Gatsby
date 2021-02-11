import { graphql } from "gatsby"

import React from "react"
import Pagination from "../components/Pagination.component"

export default function ForumContent({ data, pageContext }) {
  // const forumContent = data.allMarkdownRemark.nodes

  return (
    <>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/forums"
      />
      <div>
        {/* {forumContent.map(forum => (
          <div>
            <Link to={`/forum/${forum.id}`}>
              <h2>
                <span className="mark">{forum.frontmatter.title}</span>
              </h2>
            </Link>
            <p className="description">{forum.frontmatter.description}</p>
          </div>
        ))} */}
      </div>
    </>
  )
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    forumContent: allMarkdownRemark(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          description
        }
      }
    }
  }
`
