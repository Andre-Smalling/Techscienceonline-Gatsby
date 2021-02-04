import { Link } from "gatsby"
import React from "react"

import "./Post.css"

// This is where the posts are rebdering as lists

const Post = ({ title, author, date, description, path }) => (
  <div className="post">
    <h3 className="post-title">{title}</h3>
    <p className="post-description">{description}</p>
    <p className="post-written-by">
      Written by {author} on {date}
    </p>
    <Link to={path}>Read More</Link>
  </div>
)

export default Post
