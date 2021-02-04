import React from "react"

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"

import "./Header.css"

// The `Header` components features the searchbar and right navigation
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-search">
          <AiOutlineSearch className="header-search-icon" />
          <label for="global-search">Search</label>
          <input type="text" placeholder="Search..." id="global-search" />
        </div>
        <div className="header-cart-container">
          <FiShoppingCart className="header-cart" />
        </div>
        <a href="#" className="header-login">
          Login
        </a>
      </header>
    </div>
  )
}
