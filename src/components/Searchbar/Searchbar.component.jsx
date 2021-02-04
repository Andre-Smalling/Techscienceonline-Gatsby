import React, { useState } from "react"

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"

import "./Searchbar.css"
import { graphql, StaticQuery } from "gatsby"

const SearchBar = () => {
  const handleInputChange = event => {
    console.log("Search here")
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                excerpt
                frontmatter {
                  date
                  title
                  description
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="forum-searchbar">
          <input
            type="text"
            aria-label="Search"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          {console.table(data)}
          <div className="forum-searchbar-icon-container">
            <AiOutlineSearch className="forum-searchbar-icon" />
          </div>
        </div>
      )}
    />
  )
}

export default SearchBar

/*

const [state, setState] = useState({
    filteredPosts: [],
    query: "",
  })

  // if (!data) {
  //   return null
  // }

  const allPosts = data.allMarkdownRemark.edges

  const handleInputChange = event => {
    const query = event.target.value
    const filteredPosts = allPosts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    setState({
      query,
      filteredPosts,
    })
  }

*/
