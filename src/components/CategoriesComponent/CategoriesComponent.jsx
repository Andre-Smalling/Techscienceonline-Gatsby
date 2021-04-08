import React from "react"

import CollectionIcon from "@heroicons/react/outline/CollectionIcon"
import ClockIcon from "@heroicons/react/outline/ClockIcon"
import PhotoIcon from "@heroicons/react/outline/PhotographIcon"
import GroupIcon from "@heroicons/react/outline/UserGroupIcon"
import JobIcon from "@heroicons/react/outline/BriefcaseIcon"
import ChatIcon from "@heroicons/react/outline/ChatIcon"
import BlogIcon from "@heroicons/react/outline/NewspaperIcon"

export default function ThreadsAndDiscussionsComponent() {
  return (
    <div
      className="inline-flex flex-col space-y-8 items-center justify-end w-80 h-64"
      style={{ marginLeft: "76rem" }}
    >
      <div className="inline-flex space-x-4 items-center justify-end w-72 h-10">
        <CollectionIcon className="w-10 h-10 text-gray-500" />
        <p className="w-56 h-full text-3xl font-bold text-gray-700 font-headline">
          Categories
        </p>
      </div>
      <div className="w-full h-3/4">
        <div className="flex items-center justify-center flex-1 h-full py-8 pr-7 bg-white shadow rounded">
          <div className="relative" style={{ width: 260, height: 140 }}>
            <div className="grid grid-cols-3 space-x-5 items-center justify-end w-64 h-12 absolute right-0 bottom-0">
              <div className="inline-flex flex-col space-y-2.5 items-center justify-end w-20 h-full">
                <ClockIcon className="w-5 h-5 text-gray-500" />
                <p className="w-20 h-5 text-xl font-medium leading-tight text-center text-gray-800">
                  Activity
                </p>
              </div>

              <div className="inline-flex flex-col space-y-2.5 items-center justify-end w-20 h-full">
                <PhotoIcon className="w-5 h-5 text-gray-500" />
                <p className="w-full h-5 text-xl font-medium leading-tight text-center text-gray-800">
                  Photos
                </p>
              </div>

              <div className="inline-flex flex-col space-y-2.5 items-center justify-end w-20 h-full">
                <GroupIcon className="w-5 h-5 text-gray-500" />
                <p className="w-full h-5 text-xl font-medium leading-tight text-center text-gray-800">
                  Groups
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 space-x-5 items-center justify-end w-64 h-12 relative right-0 bottom-0">
              <div className="inline-flex flex-col space-y-2.5 items-center justify-end w-20 h-full">
                <JobIcon className="w-5 h-5 text-gray-500" />
                <p className="w-full h-5 text-xl font-medium leading-tight text-center text-gray-800">
                  Jobs
                </p>
              </div>

              <div className="inline-flex flex-col space-y-2.5 items-center justify-end w-20 h-full">
                <ChatIcon className="w-5 h-5 text-gray-500" />
                <p className="w-full h-5 text-xl font-medium leading-tight text-center text-gray-800">
                  Chat
                </p>
              </div>

              <div className="inline-flex flex-col space-y-2.5 items-center justify-end w-20 h-full">
                <BlogIcon className="w-5 h-5 text-gray-500" />
                <p className="w-full h-5 text-xl font-medium leading-tight text-center text-gray-800">
                  Activity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
