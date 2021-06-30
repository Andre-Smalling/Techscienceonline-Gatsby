import ChatIcon from "@heroicons/react/outline/ChatAlt2Icon"
import HashIcon from "@heroicons/react/outline/HashtagIcon"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "../components.styles.css"

function Tags({ tag }) {
  return (
    <div className="inline-flex space-x-4 items-center justify-start w-full h-5">
      <p className="w-28 h-full text-xl font-medium leading-tight text-gray-800 font-body">
        #{tag.title}
      </p>
      <div className="flex space-x-1.5 items-center justify-end w-12 h-5">
        <ChatIcon className="w-10 h-10 text-gray-500" />
        <p className="w-5 h-3/4 text-base leading-none text-gray-500 font-body">
          14
        </p>
      </div>
    </div>
  )
}

export default function ThreadsAndDiscussionsComponent() {
  const data = useStaticQuery(graphql`
    query PostTagsQuery {
      tags: allSanityTags(sort: { order: DESC, fields: _createdAt }, limit: 6) {
        nodes {
          id
          title
        }
      }
    }
  `)

  const postTags = data.tags.nodes
  console.log("TAHA", postTags)
  return (
    <div
      className="recent-topics inline-flex flex-col space-y-8 items-center justify-end w-80 float-right absolute"
      style={{ marginLeft: "76rem", marginTop: "-54rem" }}
    >
      <div className="inline-flex space-x-4 items-center justify-end w-72 h-10">
        <HashIcon className="w-10 h-10 text-gray-500" />
        <p className="w-56 h-full text-3xl font-bold text-gray-700 font-headline">
          Recent topics
        </p>
      </div>
      <div className="w-full h-5/6">
        <div className="flex items-end justify-end flex-1 h-full pl-6 pr-0.5 bg-white shadow rounded">
          <div className="relative" style={{ width: 287.57, height: 293.91 }}>
            <div
              className="inline-flex flex-col space-y-8 items-start justify-end h-64 absolute right-0"
              style={{ marginTop: "1rem" }}
            >
              <p className="w-full h-1/6 text-base leading-normal text-gray-800 font-body">
                Topics on which people are talking about frequently.
              </p>
              <div className="flex flex-col space-y-5 items-center w-48 h-48">
                {postTags.map(postTag => (
                  <Tags key={postTag.id} tag={postTag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
