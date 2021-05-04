import CalenderIcon from "@heroicons/react/outline/CalendarIcon"
import ChatIcon from "@heroicons/react/outline/ChatAlt2Icon"
import InfoIcon from "@heroicons/react/outline/InformationCircleIcon"
import FilledChatIcon from "@heroicons/react/solid/ChatAlt2Icon"
import { Link } from "gatsby"
import React from "react"
import HeaderComponent from "../components/Header/Header.component"
import TrendingComponent from "../components/TrendingComponent/TrendingComponent"
import "./author-profile.css"

const AuthorProfileTemplate = () => {
  return (
    <div className="bg-gray-50">
      <HeaderComponent />
      <div
        className="author-sidebar relative"
        style={{
          width: 517,
          height: 1268,
          marginLeft: "2rem",
          marginTop: "2rem",
        }}
      >
        <div
          className="absolute left-0 top-0 bg-white shadow rounded"
          style={{ width: 516, height: 1268 }}
        />
        <div
          className="inline-flex flex-col space-y-14 items-center justify-end absolute m-auto inset-0"
          style={{ width: 517, height: 1110 }}
        >
          <div className="flex flex-col space-y-10 items-center justify-end w-80">
            <img
              className="w-72 h-72 shadow rounded-3xl object-cover object-center"
              src="https://i.pravatar.cc"
            />
            <div className="flex flex-col space-y-10 items-center justify-end w-full h-1/3">
              <div className="flex flex-col space-y-1 items-center justify-end w-72 h-20">
                <p className="w-full h-10 text-3xl font-bold text-center text-gray-800 font-headline">
                  Cameron
                </p>
                <p className="w-full h-8 text-2xl leading-9 text-center text-gray-600 font-body">
                  Chemistry teacher
                </p>
              </div>
              <div className="inline-flex space-x-5 items-center justify-end w-full h-1/3">
                <a className="w-40 h-full cursor-pointer" href="#">
                  <div className="flex items-center justify-center flex-1 h-full py-3 px-6 border rounded border-indigo-700">
                    <p className="flex-1 h-full text-2xl leading-9 text-center text-indigo-700 font-body">
                      Message
                    </p>
                  </div>
                </a>
                <a className="w-40 h-full cursor-pointer" href="#">
                  <div className="flex items-center justify-center flex-1 h-full py-3 px-8 bg-indigo-700 rounded">
                    <p className="flex-1 h-full text-2xl leading-9 text-center text-gray-50 font-body">
                      Connect
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="opacity-50 border-gray-400"
            style={{ width: 517, height: 1 }}
          />
          <div
            className="flex flex-col space-y-10 items-center justify-end"
            style={{ width: 416, height: 488 }}
          >
            <div
              className="flex flex-col space-y-5 items-center justify-end"
              style={{ width: 416, height: 234 }}
            >
              <div className="inline-flex space-x-2.5 justify-end w-28 h-8">
                <InfoIcon className="w-6 h-6 rounded-lg text-gray-500" />
                <p className="w-20 h-full text-2xl font-semibold text-gray-600 font-headline">
                  About
                </p>
              </div>
              <p
                className="author-sidebar-about text-2xl leading-9 text-gray-600 font-body"
                style={{ width: 416, height: 182 }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div
              className="flex flex-col space-y-5 justify-end"
              style={{ width: 416, height: 87 }}
            >
              <div className="author-sidebar-date-title inline-flex space-x-2.5 items-center justify-end w-44 h-8">
                <CalenderIcon className="w-6 h-6 rounded-lg text-gray-500" />
                <p className="w-36 h-full text-2xl font-semibold text-gray-600 font-headline">
                  Date joined
                </p>
              </div>
              <p
                className="author-sidebar-date-value text-2xl leading-9 text-gray-600 font-body"
                style={{ width: 416, height: 35 }}
              >
                10/28/12
              </p>
            </div>
            <div
              className="flex flex-col space-y-5 justify-end"
              style={{ width: 416, height: 87 }}
            >
              <div className="author-sidebar-threads-title inline-flex space-x-2.5 items-center justify-end w-64 h-8">
                <ChatIcon className="w-6 h-6 rounded-lg text-gray-500" />
                <p className="w-56 h-full text-2xl font-semibold text-gray-600 font-headline">
                  Number of threads
                </p>
              </div>
              <p
                className="author-sidebar-threads-value text-2xl leading-9 text-gray-600 font-body"
                style={{ width: 416, height: 35 }}
              >
                36
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="author-trending"
        style={{
          position: "absolute",
          margin: "-82rem 15rem",
          width: "max-content",
        }}
      >
        <TrendingComponent />
      </div>

      <div
        className="author-posts inline-flex flex-col space-y-8 items-center justify-end"
        style={{
          width: 1177.72,
          height: 851,
          position: "absolute",
          margin: "-40rem 21rem",
        }}
      >
        <div
          className="flex flex-col space-y-2.5 justify-end"
          style={{ width: 722, height: 97, paddingLeft: "1rem" }}
        >
          <div
            className="inline-flex space-x-5 items-center justify-end"
            style={{ width: 562, height: 46.01 }}
          >
            <ChatIcon className="w-11 h-full rounded-lg text-gray-500" />
            <p
              className="text-3xl font-bold text-gray-800 font-headline"
              style={{ width: 496, height: 37 }}
            >
              All threads posted by Cameron
            </p>
          </div>
          <p
            className="author-posts-desc text-2xl leading-9 text-gray-700 font-body"
            style={{ width: 722, height: 40 }}
          >
            Since they joined, Cameron has posted 12 posts and 24 comments.
          </p>
        </div>
        <div
          className="author-posts-grid grid grid-cols-2 gap-2"
          style={{ width: 1177.72, height: 724, marginLeft: "30rem" }}
        >
          <Link
            className="right-0 bottom-0"
            style={{ width: 572.72, height: 220 }}
            to="/blogpage-with-image-template"
          >
            <div
              className="relative bg-white shadow rounded"
              style={{ width: 572.72, height: 220 }}
            >
              <div
                className="inline-flex flex-col space-y-2.5 items-start justify-end absolute m-auto inset-0"
                style={{ width: 522, height: 162 }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-end"
                  style={{ width: 522, height: 24 }}
                >
                  <p className="w-1/5 text-base leading-normal text-indigo-700 font-body">
                    #metals
                  </p>
                  <p className="w-16 h-5 text-base leading-normal text-right text-gray-400 font-body">
                    21h ago
                  </p>
                </div>
                <div
                  className="flex flex-col space-y-2.5 items-center justify-end"
                  style={{ width: 417, height: 128 }}
                >
                  <p
                    className="text-2xl font-semibold text-gray-800 font-headline"
                    style={{ width: 417, height: 60 }}
                  >
                    Aqua regia dissolving gold powder.
                  </p>
                  <p
                    className="text-lg leading-relaxed text-gray-500 font-body"
                    style={{ width: 417, height: 58 }}
                  >
                    It is excellent for cleaning frits of heavy metal, as it is
                    capable of dissolving most transition metals...
                  </p>
                </div>
              </div>
              <FilledChatIcon className="text-gray-50 w-28 h-28 absolute right-0 bottom-0 rounded-lg" />
            </div>
          </Link>

          <Link
            className="right-0 bottom-0"
            style={{ width: 572.72, height: 220 }}
            to="/blogpage-with-image-template"
          >
            <div
              className="relative bg-white shadow rounded"
              style={{ width: 572.72, height: 220 }}
            >
              <div
                className="inline-flex flex-col space-y-2.5 items-start justify-end absolute m-auto inset-0"
                style={{ width: 522, height: 162 }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-end"
                  style={{ width: 522, height: 24 }}
                >
                  <p className="w-1/5 text-base leading-normal text-indigo-700 font-body">
                    #crystals
                  </p>
                  <p className="w-16 h-5 text-base leading-normal text-right text-gray-400 font-body">
                    3 days ago
                  </p>
                </div>
                <div
                  className="flex flex-col space-y-2.5 items-center justify-end"
                  style={{ width: 417, height: 128 }}
                >
                  <p
                    className="text-2xl font-semibold text-gray-800 font-headline"
                    style={{ width: 417, height: 60 }}
                  >
                    Copper Formate crystals - the chemistry behind it.
                  </p>
                  <p
                    className="text-lg leading-relaxed text-gray-500 font-body"
                    style={{ width: 417, height: 58 }}
                  >
                    I am ashamed to say I would have picked these up and eaten
                    them as I thought they were jello...
                  </p>
                </div>
              </div>
              <FilledChatIcon className="text-gray-50 w-28 h-28 absolute right-0 bottom-0 rounded-lg" />
            </div>
          </Link>

          <Link
            className="right-0 bottom-0"
            style={{ width: 572.72, height: 220 }}
            to="/blogpage-with-image-template"
          >
            <div
              className="relative bg-white shadow rounded"
              style={{ width: 572.72, height: 220 }}
            >
              <div
                className="inline-flex flex-col space-y-2.5 items-start justify-end absolute m-auto inset-0"
                style={{ width: 522, height: 162 }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-end"
                  style={{ width: 522, height: 24 }}
                >
                  <p className="w-1/5 text-base leading-normal text-indigo-700 font-body">
                    #crystals
                  </p>
                  <p className="w-16 h-5 text-base leading-normal text-right text-gray-400 font-body">
                    3 days ago
                  </p>
                </div>
                <div
                  className="flex flex-col space-y-2.5 items-center justify-end"
                  style={{ width: 417, height: 128 }}
                >
                  <p
                    className="text-2xl font-semibold text-gray-800 font-headline"
                    style={{ width: 417, height: 60 }}
                  >
                    Copper Formate crystals - the chemistry behind it.
                  </p>
                  <p
                    className="text-lg leading-relaxed text-gray-500 font-body"
                    style={{ width: 417, height: 58 }}
                  >
                    I am ashamed to say I would have picked these up and eaten
                    them as I thought they were jello...
                  </p>
                </div>
              </div>
              <FilledChatIcon className="text-gray-50 w-28 h-28 absolute right-0 bottom-0 rounded-lg" />
            </div>
          </Link>

          <Link
            className="right-0 bottom-0"
            style={{ width: 572.72, height: 220 }}
            to="/blogpage-with-image-template"
          >
            <div
              className="relative bg-white shadow rounded"
              style={{ width: 572.72, height: 220 }}
            >
              <div
                className="inline-flex flex-col space-y-2.5 items-start justify-end absolute m-auto inset-0"
                style={{ width: 522, height: 162 }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-end"
                  style={{ width: 522, height: 24 }}
                >
                  <p className="w-1/5 text-base leading-normal text-indigo-700 font-body">
                    #crystals
                  </p>
                  <p className="w-16 h-5 text-base leading-normal text-right text-gray-400 font-body">
                    3 days ago
                  </p>
                </div>
                <div
                  className="flex flex-col space-y-2.5 items-center justify-end"
                  style={{ width: 417, height: 128 }}
                >
                  <p
                    className="text-2xl font-semibold text-gray-800 font-headline"
                    style={{ width: 417, height: 60 }}
                  >
                    Copper Formate crystals - the chemistry behind it.
                  </p>
                  <p
                    className="text-lg leading-relaxed text-gray-500 font-body"
                    style={{ width: 417, height: 58 }}
                  >
                    I am ashamed to say I would have picked these up and eaten
                    them as I thought they were jello...
                  </p>
                </div>
              </div>
              <FilledChatIcon className="text-gray-50 w-28 h-28 absolute right-0 bottom-0 rounded-lg" />
            </div>
          </Link>

          <Link
            className="right-0 bottom-0"
            style={{ width: 572.72, height: 220 }}
            to="/blogpage-with-image-template"
          >
            <div
              className="relative bg-white shadow rounded"
              style={{ width: 572.72, height: 220 }}
            >
              <div
                className="inline-flex flex-col space-y-2.5 items-start justify-end absolute m-auto inset-0"
                style={{ width: 522, height: 162 }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-end"
                  style={{ width: 522, height: 24 }}
                >
                  <p className="w-1/5 text-base leading-normal text-indigo-700 font-body">
                    #crystals
                  </p>
                  <p className="w-16 h-5 text-base leading-normal text-right text-gray-400 font-body">
                    3 days ago
                  </p>
                </div>
                <div
                  className="flex flex-col space-y-2.5 items-center justify-end"
                  style={{ width: 417, height: 128 }}
                >
                  <p
                    className="text-2xl font-semibold text-gray-800 font-headline"
                    style={{ width: 417, height: 60 }}
                  >
                    Copper Formate crystals - the chemistry behind it.
                  </p>
                  <p
                    className="text-lg leading-relaxed text-gray-500 font-body"
                    style={{ width: 417, height: 58 }}
                  >
                    I am ashamed to say I would have picked these up and eaten
                    them as I thought they were jello...
                  </p>
                </div>
              </div>
              <FilledChatIcon className="text-gray-50 w-28 h-28 absolute right-0 bottom-0 rounded-lg" />
            </div>
          </Link>

          <Link
            className="right-0 bottom-0"
            style={{ width: 572.72, height: 220 }}
            to="/blogpage-with-image-template"
          >
            <div
              className="relative bg-white shadow rounded"
              style={{ width: 572.72, height: 220 }}
            >
              <div
                className="inline-flex flex-col space-y-2.5 items-start justify-end absolute m-auto inset-0"
                style={{ width: 522, height: 162 }}
              >
                <div
                  className="inline-flex space-x-96 items-center justify-end"
                  style={{ width: 522, height: 24 }}
                >
                  <p className="w-1/5 text-base leading-normal text-indigo-700 font-body">
                    #crystals
                  </p>
                  <p className="w-16 h-5 text-base leading-normal text-right text-gray-400 font-body">
                    3 days ago
                  </p>
                </div>
                <div
                  className="flex flex-col space-y-2.5 items-center justify-end"
                  style={{ width: 417, height: 128 }}
                >
                  <p
                    className="text-2xl font-semibold text-gray-800 font-headline"
                    style={{ width: 417, height: 60 }}
                  >
                    Copper Formate crystals - the chemistry behind it.
                  </p>
                  <p
                    className="text-lg leading-relaxed text-gray-500 font-body"
                    style={{ width: 417, height: 58 }}
                  >
                    I am ashamed to say I would have picked these up and eaten
                    them as I thought they were jello...
                  </p>
                </div>
              </div>
              <FilledChatIcon className="text-gray-50 w-28 h-28 absolute right-0 bottom-0 rounded-lg" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthorProfileTemplate
