import React from "react"

import TrendingIcon from "@heroicons/react/outline/TrendingUpIcon"

export default function TrendingComponent() {
  return (
    <div className="space-x-96 items-center justify-end h-full pt-4 pb-4">
      <div
        className="flex space-x-4 items-center justify-end w-72 h-full"
        style={{ marginLeft: "20rem", marginTop: "2rem" }}
      >
        <TrendingIcon className="w-10 h-10 rounded-lg text-gray-500" />
        <p className="w-56 h-full text-3xl font-bold font-headline text-gray-700">
          Trending now
        </p>
        {/* <a
          href="#"
          className="w-12 h-5 text-base font-body leading-normal text-right text-indigo-700"
        >
          See all
        </a> */}
      </div>

      <div className="flex" style={{ marginLeft: "20rem", marginTop: "2rem" }}>
        {/* First card */}
        <div className="px-4">
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
        </div>
        {/* First card */}

        <div className="px-4">
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
        </div>

        <div className="px-4">
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
        </div>
      </div>
    </div>
  )
}
