import React from "react"

import ChatIcon from "@heroicons/react/outline/ChatAlt2Icon"
// import FilledChatIcon from "@heroicons/react/solid/ChatAlt2Icon"

export default function ThreadsAndDiscussionsComponent() {
  return (
    <div className="pt-60 px-80">
      <div
        className="inline-flex space-x-4 items-center justify-end"
        style={{ marginBottom: "1rem" }}
      >
        <ChatIcon className="w-10 h-10 text-gray-500" />
        <p className="text-3xl font-bold text-gray-700 font-headline">
          Threads and Discussions
        </p>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bg-white shadow rounded"
          style={{ width: 800, height: 220 }}
        >
          {/* <FilledChatIcon className="w-64 h-56 text-gray-50" /> */}
        </div>
        <div
          className="inline-flex space-x-72 items-center justify-end absolute py-6"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="flex space-x-2.5 items-center justify-end w-1/2 h-full">
            <img
              className="w-10 h-full shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc/300"
            />
            <div className="flex space-x-1 items-center justify-end w-80 h-6">
              <p className="w-52 h-5 text-base leading-normal text-gray-500 font-body">
                Posted by Darrell Steward in
              </p>
              <p className="text-base leading-normal text-indigo-700 font-body">
                #scholarships
              </p>
            </div>
          </div>
          <p
            className="w-12 h-5 text-base leading-normal text-right text-gray-400 font-body"
            style={{ width: "4rem" }}
          >
            3h ago
          </p>
        </div>

        <div className="inline-flex flex-col space-y-4 items-center justify-end absolute py-24 px-6">
          <p className="text-2xl font-semibold text-gray-700 font-headline">
            Any idea about the award scholarship from Zeqr?
          </p>
          <p
            className="text-base leading-normal text-gray-500 font-body"
            style={{ width: 583, height: 46 }}
          >
            Hey! So I thought of applying to this scholarship offered from Zeqr.
            There seems to be a problem while I go through the application. I’m
            not...
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative" style={{ marginTop: "17rem" }}>
        <div
          className="absolute left-0 top-0 bg-white shadow rounded"
          style={{ width: 800, height: 220 }}
        >
          {/* <FilledChatIcon className="w-64 h-56 text-gray-50" /> */}
        </div>
        <div
          className="inline-flex space-x-72 items-center justify-end absolute py-6"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="flex space-x-2.5 items-center justify-end w-1/2 h-full">
            <img
              className="w-10 h-full shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc/300"
            />
            <div className="flex space-x-1 items-center justify-end w-80 h-6">
              <p className="w-52 h-5 text-base leading-normal text-gray-500 font-body">
                Posted by Arlene McCoy in
              </p>
              <p className="text-base leading-normal text-indigo-700 font-body">
                #learning
              </p>
            </div>
          </div>
          <p
            className="w-12 h-5 text-base leading-normal text-right text-gray-400 font-body"
            style={{ width: "4rem" }}
          >
            23h ago
          </p>
        </div>

        <div className="inline-flex flex-col space-y-4 items-center justify-end absolute py-24 px-6">
          <p className="text-2xl font-semibold text-gray-700 font-headline">
            Is it normal to forget concepts within weeks to months?
          </p>
          <p
            className="text-base leading-normal text-gray-500 font-body"
            style={{ width: 583, height: 46 }}
          >
            Something that’s been bugging me in my career and now schooling is
            my ability to forget things so easily. I’m currently about to wrap
            up a college quarter...
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative" style={{ marginTop: "34rem" }}>
        <div
          className="absolute left-0 top-0 bg-white shadow rounded"
          style={{ width: 800, height: 220 }}
        >
          {/* <FilledChatIcon className="w-64 h-56 text-gray-50" /> */}
        </div>
        <div
          className="inline-flex space-x-72 items-center justify-end absolute py-6"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="flex space-x-2.5 items-center justify-end w-1/2 h-full">
            <img
              className="w-10 h-full shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc/300"
            />
            <div className="flex space-x-1 items-center justify-end w-80 h-6">
              <p className="w-52 h-5 text-base leading-normal text-gray-500 font-body">
                Posted by Eleanor Pena in
              </p>
              <p className="text-base leading-normal text-indigo-700 font-body">
                #management
              </p>
            </div>
          </div>
          <p
            className="w-12 h-5 text-base leading-normal text-right text-gray-400 font-body"
            style={{ width: "5rem" }}
          >
            1 day ago
          </p>
        </div>

        <div className="inline-flex flex-col space-y-4 items-center justify-end absolute py-24 px-6">
          <p className="text-2xl font-semibold text-gray-700 font-headline">
            The new added Classroom management for subs.
          </p>
          <p
            className="text-base leading-normal text-gray-500 font-body"
            style={{ width: 583, height: 46 }}
          >
            I’ve been a full-time teacher for 10 years, but I want to focus on
            finishing grad school next year as a full-time student instead...
          </p>
        </div>
      </div>
    </div>
  )
}
