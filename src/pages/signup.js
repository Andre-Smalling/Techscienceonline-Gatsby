import React from "react"
import { Link } from "gatsby"

import AdvertiseVector from "../images/vectors/Advertise.svg"
import GoogleLogo from "../images/vectors/GoogleLogo.svg"
import logo from "../images/logo/final.webp"

const SignUp = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="inline-flex flex-col space-y-20 items-center justify-end px-12 pt-56 absolute left-0 top-0 bg-indigo-700 h-full">
        <p
          className="text-5xl font-semibold text-gray-50 font-headline leading-tight"
          style={{ width: 554, height: 174, marginBottom: "auto" }}
        >
          You are a few clicks away to start making new connections!
        </p>
        <AdvertiseVector />
      </div>
      <Link to="/">
        <img
          className="w-40 h-15 absolute"
          src={logo}
          style={{ margin: "2rem 53rem" }}
        />
      </Link>

      <div
        className="inline-flex flex-col space-y-8 items-center justify-end absolute"
        style={{ width: 675, height: 164, margin: "13rem 53rem" }}
      >
        <p className="w-48 h-1/3 text-5xl font-bold text-gray-800 font-headline">
          Sign up
        </p>
        <p className="text-2xl leading-10 text-gray-600" style={{ width: 675 }}>
          Let’s get you all set up so you can verify your account and begin to
          setup your profile.
        </p>
      </div>
      <div
        className="inline-flex flex-col space-y-11 items-center justify-end"
        style={{
          width: 850,
          height: 435,
          marginTop: "30rem",
          marginLeft: "53rem",
        }}
      >
        <div
          className="inline-flex space-x-24 items-center justify-end"
          style={{ width: 850, height: 115 }}
        >
          <div className="inline-flex flex-col space-y-4 items-center justify-end w-96 h-full">
            <p className="text-2xl font-medium text-gray-600">First Name</p>
            <input
              className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
              type="name"
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-center justify-end w-96 h-full">
            <p className="text-2xl font-medium text-gray-600">Last Name</p>
            <input
              className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
              type="name"
            />
          </div>
        </div>
        <div
          className="inline-flex space-x-24 items-center justify-end"
          style={{ width: 850, height: 115 }}
        >
          <div className="inline-flex flex-col space-y-4 items-center justify-end w-96 h-full">
            <p className="text-2xl font-medium text-gray-600">Email</p>
            <input
              className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
              type="email"
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-center justify-end w-96 h-full">
            <p className="text-2xl font-medium text-gray-600">Username</p>
            <input
              className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
              type="text"
            />
          </div>
        </div>
        <div
          className="inline-flex space-x-24 items-center justify-end"
          style={{ width: 850, height: 115 }}
        >
          <div className="inline-flex flex-col space-y-4 items-center justify-end w-96 h-full">
            <p className="text-2xl font-medium text-gray-600">Password</p>
            <input
              className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
              type="password"
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-center justify-end w-96 h-full">
            <p className="text-2xl font-medium text-gray-600">
              Confirm Password
            </p>
            <input
              className="opacity-70 w-full h-16 border-2 rounded border-gray-400"
              type="password"
            />
          </div>
        </div>
      </div>
      <div
        className="inline-flex space-x-4 items-center justify-end"
        style={{ width: 619, height: 36, margin: "5rem 53rem" }}
      >
        <input
          className="opacity-70 w-9 h-9 border-2 rounded border-gray-400"
          type="checkbox"
        />
        <p className="text-2xl leading-9" style={{ width: 569 }}>
          I agree to Techscienceonline’s Terms and Conditions.
        </p>
      </div>
      <div
        className="inline-flex space-x-8 items-center justify-end"
        style={{ width: 665, height: 75, margin: "0rem 53rem" }}
      >
        <div className="w-64 h-full">
          <a className="flex items-center justify-center flex-1 h-full px-10 py-6 bg-indigo-700 shadow rounded text-2xl font-semibold text-center text-white cursor-pointer">
            Create Account
          </a>
        </div>
        <p className="w-96 text-2xl leading-9">
          Already have an account?
          <a className="text-indigo-700" href="/signin">
            &nbsp;Sign in
          </a>
          .
        </p>
      </div>
      <div
        className="inline-flex space-x-6 items-center justify-end"
        style={{ width: 491, height: 36, margin: "3rem 65rem" }}
      >
        <div className="opacity-50 w-48 h-0.5 border-gray-400" />
        <p className="w-10 text-2xl leading-9 text-center text-gray-600">OR</p>
        <div className="opacity-50 w-48 h-0.5 border-gray-400" />
      </div>
      <div className="w-72 h-16" style={{ margin: "3rem 70rem" }}>
        <a
          className="flex items-center justify-center flex-1 h-full px-6 pt-4 pb-3.5 border rounded border-gray-500 cursor-pointer"
          href="#"
        >
          <div className="flex space-x-4 items-center justify-end flex-1 h-full">
            <GoogleLogo className="w-7 h-8 rounded-lg" />
            <p className="w-52 text-2xl leading-9 text-gray-600">
              Sign in with Google
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SignUp
