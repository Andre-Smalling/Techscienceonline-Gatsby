import HashIcon from "@heroicons/react/outline/HashtagIcon"
import { Link } from "gatsby"
import React from "react"
import HeaderComponent from "../components/Header/Header.component"
import "./tags-page.css"

const TagsPage = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <HeaderComponent />
      <div
        className="inline-flex flex-col space-y-7 items-start justify-start"
        style={{ width: 1713, height: 337, margin: "5rem 10rem" }}
      >
        <div className="inline-flex space-x-5 items-center justify-end">
          <HashIcon className="w-14 h-full text-gray-500" />
          <p className="h-12 text-3xl font-bold text-gray-800 font-headline">
            Tags home
          </p>
        </div>
        <p className="w-1/5 h-8 text-2xl font-semibold text-gray-700 font-headline">
          Popular across the platform
        </p>

        <div className="tags-cards grid grid-cols-5 gap-4">
          <div
            className="inline-flex space-x-10 items-center justify-end"
            style={{ width: 1713, height: 198 }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              style={{ margin: "20rem 10rem" }}
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 119, top: 85 }}
              >
                #tech
              </p>
            </Link>
          </div>
          <div
            className="inline-flex space-x-10 items-center justify-end absolute"
            style={{ width: 1713, height: 198, margin: "1rem 22rem" }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 40, top: 85 }}
              >
                #computerscience
              </p>
            </Link>
          </div>
          <div
            className="inline-flex space-x-10 items-center justify-end absolute"
            style={{ width: 1713, height: 198, margin: "1rem 44rem" }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 90, top: 85 }}
              >
                #chemistry
              </p>
            </Link>
          </div>
          <div
            className="inline-flex space-x-10 items-center justify-end absolute"
            style={{ width: 1713, height: 198, margin: "1rem 66rem" }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 100, top: 85 }}
              >
                #physics
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ margin: "1rem 0" }}>
        <p
          className="w-32 h-12 text-3xl font-bold text-gray-800 font-headline"
          style={{ margin: "2rem 10rem" }}
        >
          All tags
        </p>

        <div className="grid grid-cols-5 gap-4 absolute">
          <div
            className="inline-flex space-x-10 items-center justify-end"
            style={{ width: 1713, height: 198 }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              style={{ margin: "1rem 10rem" }}
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 119, top: 85 }}
              >
                #tech
              </p>
            </Link>
          </div>
          <div
            className="inline-flex space-x-10 items-center justify-end absolute"
            style={{ width: 1713, height: 198, margin: "1rem 32rem" }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 40, top: 85 }}
              >
                #computerscience
              </p>
            </Link>
          </div>
          <div
            className="inline-flex space-x-10 items-center justify-end absolute"
            style={{ width: 1713, height: 198, margin: "1rem 54rem" }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 90, top: 85 }}
              >
                #chemistry
              </p>
            </Link>
          </div>
          <div
            className="inline-flex space-x-10 items-center justify-end absolute"
            style={{ width: 1713, height: 198, margin: "1rem 76rem" }}
          >
            <Link
              className="w-80 h-48 absolute left-0 top-0 shadow rounded hover:-translate-y-0.5 hover:shadow-xl transition transform"
              to="/blogpage-with-image-template"
            >
              <img
                className="relative rounded object-cover object-center"
                style={{ width: "100%", height: "12.4rem" }}
                src="https://picsum.photos/200/300"
              />
              <div
                className="w-full absolute left-0 top-0 bg-gradient-to-b from-gray-800 to-gray-800 rounded opacity-80"
                style={{ height: "12.4rem" }}
              />
              <p
                className="absolute text-2xl font-medium text-center text-white uppercase font-body"
                style={{ left: 100, top: 85 }}
              >
                #physics
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagsPage
