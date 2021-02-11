import React from "react"

import "./Forum.css"

import ForumContentComponent from "../ForumContent/ForumContent.component"

import SearchBarComponent from "../Searchbar/Searchbar.component"

// The `Forum` component has its sub-navigation, a searchbar and renders the `ForumContent` component
export default function Forum() {
  return (
    <div className="forum">
      <div className="forum-content">
        <nav className="forum-subnavigation">
          <a href="#" className="header-login active">
            All Forum
          </a>
          <a href="#" className="header-login">
            Topics
          </a>
        </nav>
        <hr className="horizontal-rule" />
        <SearchBarComponent />
        <hr className="horizontal-rule" />
        <nav className="forum-content-nav">
          <p className="forum-content-nav-primary">Forum</p>
          <div className="forum-content-nav-secondary-container">
            <p className="forum-content-nav-secondary">Topics</p>
            <p className="forum-content-nav-secondary">Posts</p>
            <p className="forum-content-nav-secondary">Freshness</p>
          </div>
        </nav>
        <hr className="horizontal-rule" />
        <ForumContentComponent />
      </div>
    </div>
  )
}
