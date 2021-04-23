import React from "react"

import TrendingIcon from "@heroicons/react/outline/TrendingUpIcon"
import { Link } from "gatsby"

export default function TrendingComponent() {
  return (
    <div
      className="space-x-96 items-center justify-end h-full pt-4 pb-4"
      style={{ width: "max-content" }}
    >
      <div
        className="flex space-x-4 items-center"
        style={{ marginTop: "2rem", marginLeft: "20.5rem" }}
      >
        <TrendingIcon className="w-10 h-10 rounded-lg text-gray-500" />
        <p className="w-56 h-full text-3xl font-bold font-headline text-gray-700">
          Trending now
        </p>
        <Link
          className="h-5 text-base leading-normal text-right text-indigo-700 font-body"
          style={{ marginLeft: "auto" }}
          to="/tags-page"
        >
          See all
        </Link>
      </div>

      <div className="flex" style={{ marginLeft: "20rem", marginTop: "2rem" }}>
        {/* First card */}
        <Link className="px-4" to="/blogpage-with-image-template">
          <div className="w-16 h-6 bg-cover">
            <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 bg-gray-800 rounded">
              <p className="flex-1 h-full text-base leading-normal text-gray-200 font-body">
                #study
              </p>
            </div>
          </div>
          <img
            className="w-80 h-72 rounded object-cover"
            src="https://picsum.photos/200/300"
          />
          <p className="w-44 h-5 text-base leading-normal text-gray-700 font-body">
            Annette Black
          </p>
          <p className="w-64 h-14 text-2xl font-semibold text-gray-800 font-headline w-64">
            Taking notes when you are not focussed.
          </p>
        </Link>
        <Link className="px-4" to="/blogpage-with-image-template">
          <div className="w-16 h-6">
            <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 bg-gray-800 rounded">
              <p className="flex-1 h-full text-base leading-normal text-gray-200 font-body">
                #maths
              </p>
            </div>
          </div>
          <img
            className="w-96 h-72 rounded object-cover"
            src="https://picsum.photos/200/300"
          />
          <p className="w-44 h-5 text-base leading-normal text-gray-700 font-body">
            Kathryn Murphy
          </p>
          <p className="w-64 h-14 text-2xl font-semibold text-gray-800 font-headline">
            Derivating quadratic equations with elimination.
          </p>
        </Link>
        <Link className="px-4" to="/blogpage-with-image-template">
          <div className="w-16 h-6">
            <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 bg-gray-800 rounded">
              <p className="flex-1 h-full text-base leading-normal text-gray-200 font-body">
                #study
              </p>
            </div>
          </div>
          <img
            className="w-80 h-72 rounded object-cover"
            src="https://picsum.photos/200/300"
          />
          <p className="w-44 h-5 text-base leading-normal text-gray-700 font-body">
            Darrell Steward
          </p>
          <p className="w-64 h-14 text-2xl font-semibold text-gray-800 font-headline">
            Are you overpowering in your studies?
          </p>
        </Link>
      </div>
    </div>
  )
}
