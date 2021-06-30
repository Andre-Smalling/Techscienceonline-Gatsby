import ChatIcon from "@heroicons/react/outline/ChatAlt2Icon"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import clip from "text-clipper"
import "./../components.styles.css"
import "./ThreadsAndDiscussionsComponent.css"

function ThreadsCards({ thread }) {
  const postExcerpt = thread.excerpt
  const clippedString = clip(postExcerpt, 150)

  return (
    <Link to={`/thread/${thread.slug.current}`}>
      <div
        className="threads-cards my-20 p-12 block w-max bg-white shadow rounded sm:my-8 hover:shadow-md"
        style={{ width: 800, height: 220 }}
      >
        <div className="flex justify-end">
          <div className="flex mr-auto">
            <p className="h-5 text-base leading-normal text-gray-500 font-body">
              Posted by &nbsp;
              <Link
                to={`/author/${thread.author.slug.current}`}
                className="text-indigo-700"
              >
                {thread.author.name}
              </Link>
            </p>
          </div>
          <p className="threads-cards-time text-base leading-normal text-right text-gray-400 font-body lg:block sm:hidden">
            {thread._createdAt}
          </p>
        </div>
        <h4 className="threads-cards-heading mt-4 text-2xl font-semibold text-gray-700 font-headline">
          {thread.title}
        </h4>
        <p className="threads-cards-excerpt mt-4 text-base leading-normal text-gray-500 font-body lg:block sm:hidden">
          {clippedString}
        </p>
      </div>
    </Link>
  )
}

export default function ThreadsAndDiscussionsComponent() {
  const data = useStaticQuery(graphql`
    query PostQuery {
      # Renaming 'allSanityPost' to 'posts'
      posts: allSanityPost(sort: { order: DESC, fields: _createdAt }) {
        nodes {
          id
          title
          excerpt
          _createdAt(fromNow: true)
          author {
            name
            slug {
              current
            }
            image {
              asset {
                url
              }
            }
          }
          slug {
            current
          }
        }
        totalCount
      }
    }
  `)
  const outerPosts = data.posts
  const posts = data.posts.nodes

  return (
    <div className="threads-discuss-component lg:pt-60 lg:px-80 sm:p-8">
      <div className="component-heading-threads inline-flex space-x-4 items-center justify-end lg:mb-4 lg:ml-0 sm:ml-20 sm:mb-4 md:ml-32">
        <ChatIcon className="w-10 h-10 text-gray-500" />
        <p className="text-3xl font-bold text-gray-700 font-headline">
          Threads and Discussions ({outerPosts.totalCount.toString()})
        </p>
      </div>

      <div style={{ width: "fit-content" }}>
        {posts.map(post => (
          <ThreadsCards key={post.id} thread={post} />
        ))}
      </div>
    </div>
  )
}
