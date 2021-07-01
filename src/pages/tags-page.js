import HashIcon from "@heroicons/react/outline/HashtagIcon"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import HeaderComponent from "../components/Header/Header.component"
import "./tags-page.css"

function TagsCards({ tag }) {
  return (
    <div>
      <Link
        className="flex w-52 h-12 mr-8 bg-black rounded shadow opacity-80 flex-auto justify-center items-center hover:-translate-y-0.5 hover:shadow-lg transition transform"
        to="#"
        title={tag.description}
      >
        <p className="text-white font-body text-lg">#{tag.title}</p>
      </Link>
    </div>
  )
}

const TagsPage = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      tag: allSanityTags {
        nodes {
          id
          title
          description
        }
        totalCount
      }
    }
  `)

  const tags = data.tag.nodes
  const outerTags = data.tag

  return (
    <div className="bg-gray-50 h-screen">
      <HeaderComponent />
      <div
        className="inline-flex flex-col space-y-7 items-start justify-start"
        style={{ width: 1713, height: 337, margin: "5rem 10rem" }}
      >
        <div className="inline-flex space-x-5 items-center justify-end">
          <HashIcon className="w-14 h-full text-gray-500" />
          <p className="h-12 text-3xl font-bold text-gray-800 font-headline">
            Tags home
          </p>
        </div>
        <p className="text-2xl font-semibold text-gray-700 font-headline">
          Tags across the platform ({outerTags.totalCount})
        </p>

        <div className="flex">
          {tags.map(tag => (
            <TagsCards key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TagsPage
