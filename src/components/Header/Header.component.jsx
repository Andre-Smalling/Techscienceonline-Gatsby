import React from "react"

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"
import SearchIcon from "@heroicons/react/outline/SearchIcon"

// import "./Header.css"

import logo from "./../../images/logo/final.webp"
import { Link } from "gatsby"

// The `Header` components features the searchbar and right navigation
export default function Header() {
  return (
    <div
      className="flex space-x-80 items-center justify-end py-4 bg-white shadow rounded font-body"
      style={{ margin: "0 10rem" }}
    >
      <Link to="/">
        <img className="w-40 h-full" src={logo} />
      </Link>

      <div className="flex items-center justify-start py-2.5 pl-5 pr-72 bg-gray-200 rounded-full">
        <div className="inline-flex space-x-2.5 items-center w-24 h-5 font-body">
          <SearchIcon className="h-5 w-4 text-gray-800 absolute" />
          <input
            type="text"
            placeholder="Search..."
            id="global-search"
            className="px-3 bg-gray-200 placeholder-gray-500"
          />
        </div>
      </div>
      <div className="w-36 h-11">
        <Link
          to="/signup"
          className="flex items-center justify-center flex-1 h-full px-5 py-3 text-white font-body bg-indigo-700 shadow rounded hover:-translate-y-0.5 hover:bg-indigo-800 hover:shadow-md transition transform "
        >
          Login/Signup
        </Link>
      </div>
    </div>
  )
}
