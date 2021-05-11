import TrendingIcon from "@heroicons/react/outline/TrendingUpIcon"
import { Link } from "gatsby"
import React from "react"
import "./../components.styles.css"
import "./TrendingComponent.css"

export default function TrendingComponent() {
  return (
    <div
      className="items-center justify-end h-full pt-4 pb-4"
      style={{ width: "max-content" }}
    >
      <div className="component-heading flex items-center lg:ml-80 md:mx-52 sm:mx-44 md:mt-8">
        <TrendingIcon className="w-10 h-10 rounded-lg text-gray-500 sm:mr-2 md:mr-2" />
        <p className="w-56 h-full text-3xl font-bold font-headline text-gray-700">
          Trending now
        </p>
        <Link
          className="see-all-link h-5 text-base leading-normal text-right text-indigo-700 font-body lg:ml-auto"
          to="/tags-page"
        >
          See all
        </Link>
      </div>

      <div className="trending-cards-container lg:flex lg:ml-80 lg:mt-8 md:mt-8 md:block md:mx-40 sm:mt-8 sm:block sm:mx-32">
        {/* First card */}
        <Link
          className="trending-cards-container-card px-4"
          to="/blogpage-with-image-template"
        >
          <div className="w-16 h-6 bg-cover">
            <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 bg-gray-800 rounded">
              <p className="flex-1 h-full text-base leading-normal text-gray-200 font-body">
                #study
              </p>
            </div>
          </div>
          <img
            className="lg:w-80 h-72 rounded object-cover md:w-4/5 sm:w-3/4"
            src="https://picsum.photos/200/300"
          />
          <p className="w-44 h-5 text-base leading-normal text-gray-700 font-body sm:mx-0 sm:my-2 md:mx-0 md:my-4 lg:m-0">
            Annette Black
          </p>
          <p className="lg:w-64 h-14 text-2xl font-semibold text-gray-800 font-headline lg:w-64 sm:w-3/4 md:w-3/4 sm:mb-8 md:mb-10">
            Taking notes when you are not focussed.
          </p>
        </Link>
        <Link
          className="trending-cards-container-card px-4"
          to="/blogpage-with-image-template"
        >
          <div className="w-16 h-6">
            <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 bg-gray-800 rounded">
              <p className="flex-1 h-full text-base leading-normal text-gray-200 font-body">
                #maths
              </p>
            </div>
          </div>
          <img
            className="lg:w-96 h-72 rounded object-cover md:w-4/5 sm:w-3/4"
            src="https://picsum.photos/200/300"
          />
          <p className="w-44 h-5 text-base leading-normal text-gray-700 font-body sm:mx-0 sm:my-2 md:mx-0 md:my-4 lg:m-0">
            Kathryn Murphy
          </p>
          <p className="lg:w-64 h-14 text-2xl font-semibold text-gray-800 font-headline sm:w-3/4 md:w-3/4 sm:mb-8 md:mb-10">
            Derivating quadratic equations with elimination.
          </p>
        </Link>
        <Link
          className="trending-cards-container-card px-4"
          to="/blogpage-with-image-template"
        >
          <div className="w-16 h-6">
            <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 bg-gray-800 rounded">
              <p className="flex-1 h-full text-base leading-normal text-gray-200 font-body">
                #study
              </p>
            </div>
          </div>
          <img
            className="lg:w-80 h-72 rounded object-cover md:w-4/5 sm:w-3/4"
            src="https://picsum.photos/200/300"
          />
          <p className="w-44 h-5 text-base leading-normal text-gray-700 font-body sm:mx-0 sm:my-2 md:mx-0 md:my-4 lg:m-0">
            Darrell Steward
          </p>
          <p className="lg:w-64 h-14 text-2xl font-semibold text-gray-800 font-headline sm:w-3/4 md:w-3/4 sm:mb-8 md:mb-10">
            Are you overpowering in your studies?
          </p>
        </Link>
      </div>
    </div>
  )
}
