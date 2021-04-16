import { Link } from "gatsby"
import React from "react"

import HeaderComponent from "./../components/Header/Header.component"
import RecentTopicsComponent from "./../components/RecentTopicsComponent/RecentTopicsComponent"
import FooterComponent from "./../components/FooterComponent/FooterComponent"

import ShareIcon from "@heroicons/react/solid/ShareIcon"
import ReportIcon from "@heroicons/react/solid/ExclamationIcon"
import ViewsIcon from "@heroicons/react/solid/EyeIcon"
import HashIcon from "@heroicons/react/outline/HashtagIcon"

const BlogpageWithImageTemplate = () => {
  return (
    <div className="bg-gray-50">
      <HeaderComponent />
      <div style={{ marginLeft: "20rem", marginTop: "2rem", width: "690px" }}>
        <img
          className="rounded object-cover"
          style={{
            width: 678,
            height: 348.96,
          }}
          src="https://picsum.photos/200/300"
        />
        <div
          className="inline-flex flex-col space-y-11 items-center justify-end"
          style={{
            width: 700,
            height: 549,
            marginTop: "1rem",
          }}
        >
          <div
            className="flex flex-col space-y-5 items-start justify-end"
            style={{ width: 700, height: 158 }}
          >
            <Link
              className="h-5 text-base leading-normal text-gray-500 cursor-pointer"
              style={{ paddingTop: "1rem" }}
              to="/"
            >
              ← Back to home
            </Link>
            <p
              className="text-3xl font-bold text-gray-800 font-headline"
              style={{ width: 700, height: 73, paddingTop: "1rem" }}
            >
              Is it normal to forget concepts within weeks to months?
            </p>
            <div
              className="inline-flex space-x-8 items-center justify-end w-80 h-6"
              style={{ marginLeft: "1.3rem" }}
            >
              <p className="text-base leading-normal text-indigo-700">
                #learning
              </p>
              <div className="flex space-x-5 items-center justify-end w-60 h-full">
                <div className="flex space-x-1.5 items-center justify-end w-16 h-full">
                  <ShareIcon className="text-gray-600" />
                  <p className="w-2/3 text-base leading-normal text-gray-600">
                    Share
                  </p>
                </div>
                <div className="flex space-x-1.5 items-center justify-end w-20 h-full">
                  <ReportIcon className="w-4 h-4 text-gray-600" />
                  <p className="w-12 text-base leading-normal text-gray-600">
                    Report
                  </p>
                </div>
                <div className="flex space-x-1.5 items-center justify-end w-14 h-5/6">
                  <ViewsIcon className="w-4 h-4 text-gray-600" />
                  <p className="w-7 h-full text-base leading-normal text-gray-600">
                    103
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col space-y-2.5 items-end justify-end"
            style={{ width: 695, height: 188 }}
          >
            <div
              className="inline-flex space-x-2.5 items-center justify-end"
              style={{ margin: "0 30rem" }}
            >
              <img
                className="w-1/6 h-full shadow border rounded-full border-gray-200"
                src="https://i.pravatar.cc"
              />
              <div className="flex space-x-1.5 items-center justify-end h-5">
                <p className="w-28 h-full text-base font-medium leading-normal text-gray-600">
                  {" "}
                  Arlene McCoy
                </p>
                <p className="w-14 h-5 text-base leading-normal text-gray-500">
                  3h ago
                </p>
              </div>
            </div>
            <p
              className="text-base leading-normal text-gray-600"
              style={{
                width: 645,
                height: 142,
                margin: "0 .5rem",
                paddingTop: "1rem",
              }}
            >
              Something that’s been bugging me in my career and now schooling is
              my ability to forget things so easily. I’m currently about to wrap
              up a college quarter...
              <br />
              <br />
              Some things I learned in January and understood very well are
              almost foreign to me. I remember learning the concepts. Is this
              normal? I’m not asking for medical advice I just want to know if
              it’s worth looking into or I’m being paranoid?
            </p>
          </div>
          <div
            className="flex flex-col space-y-4 items-start justify-end"
            style={{
              width: 457,
              height: 118,
              padding: "0 4rem",
              marginTop: "5rem",
            }}
          >
            <div
              className="inline-flex space-x-2.5 items-center justify-end"
              style={{ width: 457, height: 65, padding: "0 17rem" }}
            >
              <div className="relative" style={{ width: 35, height: 35 }}>
                <div className="w-9 h-9 bg-gray-200 border rounded-full border-gray-200" />
                <img
                  className="absolute right-0 bottom-0 rounded-full"
                  src="https://i.pravatar.cc"
                />
              </div>
              <input
                className="flex items-start justify-start pl-2.5 pr-60 pt-2.5 pb-8 bg-gray-200 border rounded border-gray-400"
                style={{ width: 412, height: 65 }}
                type="text"
                placeholder="Login to reply to Arlene..."
              ></input>
            </div>
            <a
              className="w-40 flex items-center justify-center flex-1 h-full px-5 pt-2 pb-3 border rounded-full border-indigo-700 text-base leading-normal text-center text-indigo-700 cursor-pointer"
              href="#"
              style={{ margin: "1rem -9rem" }}
            >
              Add a comment
            </a>
          </div>
        </div>

        <p
          className="w-40 text-2xl font-semibold text-gray-600 font-headline"
          style={{ margin: "3rem 0" }}
        >
          3 comments
        </p>
        <div
          className="inline-flex space-x-3 items-center justify-end"
          style={{ width: 700, height: 35, marginTop: "-3rem" }}
        >
          <img
            className="w-9 h-full shadow border rounded-full border-gray-200"
            src="https://i.pravatar.cc"
          />
          <div
            className="flex space-x-2 justify-end"
            style={{ width: 653.54, height: 24 }}
          >
            <p className="w-full h-4 text-base font-medium leading-normal text-gray-600">
              Darrell Steward
            </p>
            <p
              className="text-base leading-normal text-gray-600"
              style={{ width: "400%" }}
            >
              Check out this article on Ebbinghaus' forgetting curve. Might give
              you <br />
              <span style={{ margin: "0 -8.5rem" }}>
                some insights of how things are actually happening (along with
                some examples): <br />
              </span>
              <a
                className="text-base leading-normal underline text-indigo-700"
                href="https://www.mindtools.com/pages/article/forgetting-curve.htm"
                style={{ margin: "0 -8.5rem" }}
              >
                https://www.mindtools.com/pages/article/forgetting-curve.htm
              </a>
              <div className="space-x-2.5" style={{ margin: "1rem -8.5rem" }}>
                <a
                  className="w-8 text-base leading-normal text-gray-500"
                  href="#"
                >
                  Like
                </a>
                <a
                  className="w-10 text-base leading-normal text-gray-500"
                  href="#"
                >
                  Reply
                </a>
                <a
                  className="w-1/6 text-base leading-normal text-gray-500"
                  href="#"
                >
                  2h
                </a>
              </div>
            </p>
          </div>
        </div>

        <div
          className="relative"
          style={{ width: 655, height: 138, margin: "6rem 2rem" }}
        >
          <p
            className="absolute text-base leading-normal text-gray-600"
            style={{ width: 611, left: 44, top: 31 }}
          >
            teachers/professor encourage note-taking in order to help you
            refresh yourself.
          </p>
          <p
            className="absolute text-base leading-normal text-gray-600"
            style={{ width: 611, left: 44, top: 56 }}
          >
            It's also why you're typically given some time to study for a test
            so you can go through the concepts again and brush up.
          </p>
          <div
            className="inline-flex space-x-2.5 items-center justify-end h-6 absolute"
            style={{ left: 44, top: 114 }}
          >
            <p className="w-7 text-base leading-normal text-gray-500">Like</p>
            <p className="w-10 text-base leading-normal text-gray-500">Reply</p>
            <p className="w-1/6 text-base leading-normal text-gray-500">1h</p>
          </div>
          <p
            className="absolute right-0 top-0 text-base leading-normal text-gray-600"
            style={{ width: 507, margin: "0.4rem -0.5rem" }}
          >
            This is pretty much completely normal and exactly why
          </p>
          <p
            className="h-4 absolute text-base font-medium leading-normal text-gray-600"
            style={{ left: 44, top: 6 }}
          >
            Wade Warren
          </p>
          <img
            className="h-9 absolute left-0 top-0 shadow border rounded-full border-gray-200"
            src="https://i.pravatar.cc"
          />
        </div>

        <div
          className="relative"
          style={{ width: 655, height: 138, margin: "-4rem 2rem" }}
        >
          <p
            className="absolute text-base leading-normal text-gray-600"
            style={{ width: 611, left: 44, top: 31 }}
          >
            learning. My education professors believed in a full constructivist
            approach and did very little lecture and the little they did do,
            they discouraged us from taking notes (it was too boring).
          </p>
          <div
            className="inline-flex space-x-2.5 items-center justify-end h-6 absolute"
            style={{ left: 44, top: 114 }}
          >
            <p className="w-7 text-base leading-normal text-gray-500">Like</p>
            <p className="w-10 text-base leading-normal text-gray-500">Reply</p>
            <p className="w-1/6 text-base leading-normal text-gray-500">1h</p>
          </div>
          <p
            className="absolute right-0 top-0 text-base leading-normal text-gray-600"
            style={{ width: 507, margin: "0.4rem -3rem" }}
          >
            I agree with taking notes as important in adolescent and adult
          </p>
          <p
            className="h-4 absolute text-base font-medium leading-normal text-gray-600"
            style={{ left: 44, top: 6 }}
          >
            Brooklyn Simmons
          </p>
          <img
            className="h-9 absolute left-0 top-0 shadow border rounded-full border-gray-200"
            src="https://i.pravatar.cc"
          />
        </div>

        <div
          className="inline-flex flex-col space-y-8 items-center justify-end w-80 absolute"
          style={{ top: "7rem", marginLeft: "60rem" }}
        >
          <div className="inline-flex space-x-4 items-center justify-end w-72 h-10">
            <HashIcon className="w-10 text-gray-500" />
            <p className="w-56 h-full text-3xl font-bold text-gray-800 font-headline">
              learning
            </p>
          </div>
          <div className="w-full h-5/6">
            <div className="flex items-center justify-start flex-1 h-full pl-5 pr-8 pt-5 pb-7 bg-white shadow rounded">
              <div className="inline-flex flex-col space-y-5 items-start justify-end flex-1 h-full">
                <p className="w-full h-36 text-base leading-normal text-gray-800">
                  The goal of #learning is to provide a series of threads and
                  discussions. Make sure all the content you post here are
                  sensible, are answered correctly and follow our rules and
                  guidelines.
                </p>
                <div className="inline-flex space-x-8 items-center justify-end w-36 h-12">
                  <div className="inline-flex flex-col space-y-1.5 items-center justify-end w-16 h-full">
                    <p className="w-10 h-5 text-xl leading-loose text-gray-800 font-headline">
                      1.2k
                    </p>
                    <p className="w-full h-5 text-base leading-normal text-gray-800">
                      Members
                    </p>
                  </div>
                  <div className="inline-flex flex-col space-y-1.5 items-center justify-end w-1/3 h-full">
                    <p className="w-5/6 h-5 text-xl leading-loose text-center text-gray-800 font-headline">
                      171
                    </p>
                    <p className="w-full h-5 text-base leading-normal text-center text-gray-800">
                      Online
                    </p>
                  </div>
                </div>
                <a className="flex items-center justify-center flex-1 h-full px-5 py-3 shadow border rounded-full border-indigo-700 text-base font-medium text-center text-indigo-700 cursor-pointer">
                  Join learning
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-20rem", marginLeft: "-16rem" }}>
          <RecentTopicsComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  )
}

export default BlogpageWithImageTemplate
