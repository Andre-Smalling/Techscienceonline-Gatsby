import { Link } from "gatsby"
import React from "react"

export default function FooterComponent() {
  return (
    <div
      className="inline-flex flex-col space-y-2.5 items-start justify-end w-72 h-12 mt-7"
      style={{ marginLeft: "76rem", width: "auto" }}
    >
      <div className="inline-flex space-x-2.5 items-center justify-end w-full h-5">
        <Link
          className="w-12 h-full text-base leading-normal text-gray-400 font-body"
          to="/"
        >
          Home
        </Link>
        <p className="w-16 h-full text-base leading-normal text-gray-400 font-body">
          About
        </p>
        <p className="w-1/5 h-full text-base leading-normal text-gray-400 font-body">
          Contact
        </p>
        <p className="w-11 h-full text-base leading-normal text-gray-400 font-body">
          FAQs
        </p>
        <p className="w-11 h-full text-base leading-normal text-gray-400 font-body">
          Blog
        </p>
      </div>
      <p className="w-48 h-5 text-sm leading-tight text-gray-400 font-body">
        © 2021 Techscienceonline.
      </p>
    </div>
  )
}
