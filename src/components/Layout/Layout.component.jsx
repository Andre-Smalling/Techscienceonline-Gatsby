import React from "react"
import PropTypes from "prop-types"

// import Nav from "./Nav"
import "./Layout.css"

const Layout = ({ children }) => (
  <div className="layout">
    {/* <Nav /> */}
    <main className="main">{children}</main>
  </div>
)

// To ensure we’re passing JSX to the `Layout` component
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
