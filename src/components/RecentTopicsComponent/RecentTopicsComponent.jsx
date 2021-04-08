import React from "react"

import HashIcon from "@heroicons/react/outline/HashtagIcon"
import ChatIcon from "@heroicons/react/outline/ChatAlt2Icon"

export default function ThreadsAndDiscussionsComponent() {
  return (
    <div
      className="inline-flex flex-col space-y-8 items-center justify-end w-80 float-right absolute"
      style={{ marginLeft: "76rem", marginTop: "-38.5rem" }}
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
              <p className="w-full h-1/6 text-base leading-normal text-gray-800">
                Topics on which people are talking about frequently.
              </p>
              <div className="flex flex-col space-y-5 items-center justify-end w-48 h-48">
                <div className="inline-flex space-x-4 items-center justify-start w-full h-5">
                  <p className="w-4 h-5 text-xl font-medium leading-tight text-gray-800">
                    1.
                  </p>
                  <p className="w-28 h-full text-xl font-medium leading-tight text-gray-800">
                    #chemistry
                  </p>
                  <div className="flex space-x-1.5 items-center justify-end w-12 h-5">
                    <ChatIcon className="w-10 h-10 text-gray-500" />
                    <p className="w-5 h-3/4 text-base leading-none text-gray-500">
                      14
                    </p>
                  </div>
                </div>
                <div className="inline-flex space-x-3.5 items-center justify-start w-full h-5">
                  <p className="w-4 h-5 text-xl font-medium leading-tight text-gray-800">
                    2.
                  </p>
                  <p className="w-28 h-full text-xl font-medium leading-tight text-gray-800">
                    #geography
                  </p>
                  <div className="flex space-x-1.5 items-center justify-end w-12 h-5">
                    <ChatIcon className="w-10 h-10 text-gray-500" />
                    <p className="w-5 h-3/4 text-base leading-none text-gray-500">
                      5
                    </p>
                  </div>
                </div>
                <div className="inline-flex space-x-4 items-center justify-start w-full h-5">
                  <p className="w-4 h-5 text-xl font-medium leading-tight text-gray-800">
                    3.
                  </p>
                  <p className="w-28 h-full text-xl font-medium leading-tight text-gray-800">
                    #cs
                  </p>
                  <div className="flex space-x-1.5 items-center justify-end w-12 h-5">
                    <ChatIcon className="w-10 h-10 text-gray-500" />
                    <p className="w-5 h-3/4 text-base leading-none text-gray-500">
                      19
                    </p>
                  </div>
                </div>
                <div className="inline-flex space-x-4 items-center justify-start w-full h-5">
                  <p className="w-4 h-5 text-xl font-medium leading-tight text-gray-800">
                    4.
                  </p>
                  <p className="w-28 h-full text-xl font-medium leading-tight text-gray-800">
                    #english
                  </p>
                  <div className="flex space-x-1.5 items-center justify-end w-12 h-5">
                    <ChatIcon className="w-10 h-10 text-gray-500" />
                    <p className="w-5 h-3/4 text-base leading-none text-gray-500">
                      22
                    </p>
                  </div>
                </div>
                <div className="inline-flex space-x-4 items-center justify-start w-full h-5">
                  <p className="w-4 h-5 text-xl font-medium leading-tight text-gray-800">
                    5.
                  </p>
                  <p className="w-28 h-full text-xl font-medium leading-tight text-gray-800">
                    #learning
                  </p>
                  <div className="flex space-x-1.5 items-center justify-end w-12 h-5">
                    <ChatIcon className="w-10 h-10 text-gray-500" />
                    <p className="w-5 h-3/4 text-base leading-none text-gray-500">
                      32
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
