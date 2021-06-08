import PropTypes from "prop-types"
import React from "react"
import "./Layout.css"

const Layout = ({ children }) => (
  <div className="layout">
    <main className="main">{children}</main>
  </div>
)

// To ensure we’re passing JSX to the `Layout` component
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
