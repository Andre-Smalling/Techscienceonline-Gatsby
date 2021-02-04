import React, { lazy, Suspense } from "react"

import "./Forum.css"

const ForumContentComponent = lazy(() =>
  import("../ForumContent/ForumContent.component")
)
const SearchBarComponent = lazy(() =>
  import("../Searchbar/Searchbar.component")
)

const renderLoader = () => <p>Loading...</p>

// The `Forum` component has its sub-navigation, a searchbar and renders the `ForumContent` component
export default function Forum() {
  return (
    <Suspense fallback={renderLoader}>
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
    </Suspense>
  )
}
