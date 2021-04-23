import React from "react"
import { Link } from "gatsby"

import ManIllustration from "./../images/vectors/Man.svg"
import GoogleLogo from "../images/vectors/GoogleLogo.svg"

import logo from "../images/logo/final.webp"

const SignIn = () => {
  return (
    <div className="relative bg-gray-50" style={{ width: 2000, height: 1470 }}>
      <div
        className="inline-flex flex-col space-y-52 items-center justify-end px-6 pt-96 absolute left-0 top-0 bg-indigo-700"
        style={{ width: 683, height: 1470 }}
      >
        <p
          className="text-5xl font-semibold text-gray-50 leading-tight font-headline"
          style={{ width: 554, height: 122, marginBottom: "auto" }}
        >
          Start diving straight into conversations!
        </p>
        <ManIllustration />
      </div>
      <Link to="/">
        <img
          className="w-40 h-15 absolute"
          src={logo}
          style={{ margin: "2rem 53rem" }}
        />
      </Link>
      <div
        className="inline-flex flex-col space-y-2 items-end justify-end pb-5 absolute"
        style={{ width: 906, height: 624, left: 843, top: 423 }}
      >
        <div
          className="flex flex-col space-y-8 items-center justify-end"
          style={{ width: 675, height: 164, margin: "13rem 14rem" }}
        >
          <p className="w-48 h-1/3 text-5xl font-bold text-gray-800 font-headline">
            Login
          </p>
          <p
            className="text-2xl leading-10 text-gray-600 font-body"
            style={{ width: 675 }}
          >
            Welcome back! Login with your credentials and enjoy new threads and
            discussions.
          </p>
        </div>
        <div
          className="inline-flex space-x-24 items-center justify-end"
          style={{ width: 906, height: 390 }}
        >
          <div className="inline-flex flex-col space-y-10 items-center justify-end w-96">
            <div className="flex flex-col space-y-11 items-center justify-end w-full h-72">
              <div className="flex flex-col space-y-4 items-center justify-end w-full h-28">
                <p className="text-3xl font-medium text-gray-600 font-body">
                  Email
                </p>
                <input
                  className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-4 items-center justify-end w-full h-28">
                <p className="text-3xl font-medium text-gray-600 font-body">
                  Password
                </p>
                <input
                  className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
                  type="password"
                />
              </div>
            </div>
            <div className="w-full h-1/5">
              <div className="flex items-center justify-center flex-1 h-full px-28 py-6 bg-indigo-700 shadow rounded">
                <a
                  className="flex-1 h-full text-2xl font-semibold text-center text-white cursor-pointer font-body"
                  href="#"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex space-x-24 items-center justify-end"
            style={{ width: 431, height: 65 }}
          >
            <p className="w-10 text-2xl leading-9 text-center text-gray-600 font-body">
              OR
            </p>
            <div className="w-72 h-full">
              <div className="flex items-center justify-center flex-1 h-full px-6 pt-4 pb-3.5 border rounded border-gray-500">
                <a
                  className="flex space-x-4 items-center justify-end flex-1 h-full cursor-pointer"
                  href="#"
                >
                  <GoogleLogo className="w-7 h-8 rounded-lg" />
                  <p className="w-52 text-2xl leading-9 text-gray-600 font-body">
                    Sign in with Google
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p
          className="text-2xl leading-9 font-body"
          style={{ margin: "-4rem 0rem" }}
        >
          Don’t have an account?
          <a className="text-indigo-700 font-body" href="/signup">
            &nbsp;Sign up
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default SignIn
