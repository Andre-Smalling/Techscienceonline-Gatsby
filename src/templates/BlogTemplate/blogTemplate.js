import React from "react"
import { graphql, Link } from "gatsby"
import Rightbar from "../../components/Rightbar/Rightbar.component"

import "./blogTemplate.css"

// This is the common JSX for Individual blog page
export default function BlogTemplate({ data }) {
  const post = data.markdownRemark
  const { title, author, date } = post.frontmatter

  return (
    <div className="template-container">
      <div>
        <Link to="/" className="back-to-blogs">
          ← Back to blogs
        </Link>
        <h1 className="template-title">{title}</h1>
        <p>
          Posted by {author} on {date}
        </p>
        <div
          className="template-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Rightbar className="template-rightbar" />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`
