import TrendingIcon from "@heroicons/react/outline/TrendingUpIcon"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import "./../components.styles.css"
import "./TrendingComponent.css"

function TrendingCards({ thread }) {
  return (
    <div className="flex-auto">
      <Link
        className="trending-cards-container-card px-4"
        to={`/thread/${thread.slug.current}`}
      >
        <img
          className="lg:w-80 h-72 rounded object-cover md:w-4/5 sm:w-3/4"
          src={thread.mainImage.asset.url}
        />
        <p className="trending-cards-container-card-author text-base leading-normal text-gray-700 font-body sm:mx-0 sm:my-2 md:mx-0 md:my-4 lg:m-0">
          {thread.author.name}
        </p>
        <p className="trending-cards-container-card-title h-14 text-2xl font-semibold text-gray-800 font-headline lg:w-64 sm:w-3/4 md:w-3/4 sm:mb-8 md:mb-10">
          {thread.title}
        </p>
      </Link>
    </div>
  )
}

export default function TrendingComponent() {
  const data = useStaticQuery(graphql`
    query TrendingQuery {
      # Renaming 'allSanityPost' to 'posts'
      trendingPosts: allSanityPost(
        limit: 3
        sort: { order: DESC, fields: _createdAt }
      ) {
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
          }
          slug {
            current
          }
          mainImage {
            asset {
              url
            }
          }
        }
        totalCount
      }
    }
  `)

  const posts = data.trendingPosts.nodes
  // const image = data.trendingPosts.nodes.mainImage
  // console.log("IMG", image)

  return (
    <div className="trending items-center justify-end h-full pt-4 pb-4">
      <div className="component-heading flex items-center lg:ml-80 md:mx-52 sm:mx-44 md:mt-8">
        <TrendingIcon className="w-10 h-10 rounded-lg text-gray-500 sm:mr-2 md:mr-2" />
        <p className="w-56 h-full text-3xl font-bold font-headline text-gray-700">
          Trending now
        </p>
        <Link
          className="trending-link see-all-link h-5 text-base leading-normal text-right text-indigo-700 font-body lg:ml-auto"
          to="/tags-page"
        >
          See all
        </Link>
      </div>

      <div className="trending-cards-container lg:flex lg:ml-80 lg:mt-8 md:mt-8 md:block md:mx-40 sm:mt-8 sm:block sm:mx-32">
        {posts.map(post => (
          <TrendingCards key={post.id} thread={post} />
        ))}
      </div>
    </div>
  )
}
