import { Link } from "gatsby"
import React from "react"

export default function FourOhFourPage() {
  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "2rem" }}>
        Hey! That page doesn't exists! <br /> Maybe go back to{" "}
        <Link to="/">home</Link>?
      </p>
    </div>
  )
}
