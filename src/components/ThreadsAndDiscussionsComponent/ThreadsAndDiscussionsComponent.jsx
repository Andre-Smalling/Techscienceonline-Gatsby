import ChatIcon from "@heroicons/react/outline/ChatAlt2Icon"
import { Link } from "gatsby"
import React from "react"
import "./../components.styles.css"
import "./ThreadsAndDiscussionsComponent.css"

export default function ThreadsAndDiscussionsComponent() {
  return (
    <div className="threads-discuss-component lg:pt-60 lg:px-80 sm:p-8">
      <div className="component-heading-threads inline-flex space-x-4 items-center justify-end lg:mb-4 lg:ml-0 sm:ml-20 sm:mb-4 md:ml-32">
        <ChatIcon className="w-10 h-10 text-gray-500" />
        <p className="text-3xl font-bold text-gray-700 font-headline">
          Threads and Discussions
        </p>
      </div>

      <div className="threads-discuss-component-card relative lg:m-0 sm:mx-16 sm:my-8">
        <div
          className="threads-discuss-component-card-inner absolute left-0 top-0 bg-white shadow rounded lg:mx-0 lg:my-0 sm:my-8 sm:w-full"
          style={{ width: 800, height: 220 }}
        ></div>
        <div
          className="threads-discuss-component-card-inner-top inline-flex space-x-72 items-center justify-end absolute py-6 lg:m-0 sm:my-16"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="flex space-x-2.5 items-center justify-end w-1/2 h-full">
            <img
              className="w-10 h-full shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc"
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
            className="w-12 h-5 text-base leading-normal text-right text-gray-400 font-body lg:block sm:hidden"
            style={{ width: "4rem" }}
          >
            3h ago
          </p>
        </div>

        <Link
          className="threads-discuss-component-card-inner-link inline-flex flex-col space-y-4 items-center justify-end absolute py-24 px-6 lg:flex lg:m-0 sm:block sm:my-16 sm:mx-8 sm:px-0"
          to="/blogpage-with-image-template"
        >
          <h4 className="text-2xl font-semibold text-gray-700 font-headline">
            Any idea about the award scholarship from Zeqr?
          </h4>
          <p
            className="text-base leading-normal text-gray-500 font-body lg:block sm:hidden"
            style={{ width: 583, height: 46 }}
          >
            Hey! So I thought of applying to this scholarship offered from Zeqr.
            There seems to be a problem while I go through the application. I’m
            not...
          </p>
        </Link>
      </div>

      {/* CARD 2 */}
      <div
        className="threads-discuss-component-card relative lg:mx-0 lg:my-0 sm:mx-16 sm:my-8"
        style={{ marginTop: "17rem" }}
      >
        <div
          className="threads-discuss-component-card-inner absolute left-0 top-0 bg-white shadow rounded lg:mx-0 lg:my-0 sm:my-8 sm:w-full"
          style={{ width: 800, height: 220 }}
        ></div>
        <div
          className="threads-discuss-component-card-inner-top inline-flex space-x-72 items-center justify-end absolute py-6 lg:m-0 sm:my-16 sm:-mx-8"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="flex space-x-2.5 items-center justify-end w-1/2 h-full">
            <img
              className="w-10 h-full shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc"
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
            className="w-12 h-5 text-base leading-normal text-right text-gray-400 font-body lg:block sm:hidden"
            style={{ width: "4rem" }}
          >
            23h ago
          </p>
        </div>

        <Link
          className="threads-discuss-component-card-inner-link inline-flex flex-col space-y-4 items-center justify-end absolute py-24 px-6 cursor-pointer lg:flex lg:m-0 sm:block sm:my-16 sm:mx-0"
          to="/blogpage-with-image-template"
        >
          <h4 className="text-2xl font-semibold text-gray-700 font-headline">
            Is it normal to forget concepts within weeks to months?
          </h4>
          <p
            className="text-base leading-normal text-gray-500 font-body lg:block sm:hidden"
            style={{ width: 583, height: 46 }}
          >
            Something that’s been bugging me in my career and now schooling is
            my ability to forget things so easily. I’m currently about to wrap
            up a college quarter...
          </p>
        </Link>
      </div>

      {/* CARD 3 */}
      <div
        className="threads-discuss-component-card relative lg:mx-0 lg:my-0 sm:mx-16 sm:my-8"
        style={{ marginTop: "34rem" }}
      >
        <div
          className="threads-discuss-component-card-inner absolute left-0 top-0 bg-white shadow rounded lg:mx-0 lg:my-0 sm:my-8 sm:w-full"
          style={{ width: 800, height: 220 }}
        ></div>
        <div
          className="threads-discuss-component-card-inner-top inline-flex space-x-72 items-center justify-end absolute py-6 lg:m-0 sm:my-16"
          style={{ paddingLeft: "1rem" }}
        >
          <div className="flex space-x-2.5 items-center justify-end w-1/2 h-full">
            <img
              className="w-10 h-full shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc"
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
            className="w-12 h-5 text-base leading-normal text-right text-gray-400 font-body lg:block sm:hidden"
            style={{ width: "5rem" }}
          >
            1 day ago
          </p>
        </div>

        <Link
          className="threads-discuss-component-card-inner-link inline-flex flex-col space-y-4 items-center justify-end absolute py-24 px-6 lg:flex lg:m-0 sm:block sm:my-16 sm:mx-0"
          to="/blogpage-with-image-template"
        >
          <h4 className="text-2xl font-semibold text-gray-700 font-headline">
            The new added Classroom management for subs.
          </h4>
          <p
            className="text-base leading-normal text-gray-500 font-body lg:block sm:hidden"
            style={{ width: 583, height: 46 }}
          >
            I’ve been a full-time teacher for 10 years, but I want to focus on
            finishing grad school next year as a full-time student instead...
          </p>
        </Link>
      </div>
    </div>
  )
}
