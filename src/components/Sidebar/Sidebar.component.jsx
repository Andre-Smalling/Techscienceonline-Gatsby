import React from "react"

import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser"
import { AiOutlineFundProjectionScreen } from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen"
import { FiKey } from "@react-icons/all-files/fi/FiKey"
import { FiPlay } from "@react-icons/all-files/fi/FiPlay"
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"
import { CgAlbum } from "@react-icons/all-files/cg/CgAlbum"
import { HiOutlinePhotograph } from "@react-icons/all-files/hi/HiOutlinePhotograph"
import { GrGroup } from "@react-icons/all-files/gr/GrGroup"
import { BiBriefcase } from "@react-icons/all-files/bi/BiBriefcase"
import { IoChatbubblesSharp } from "@react-icons/all-files/io5/IoChatbubblesSharp"
import { BsNewspaper } from "@react-icons/all-files/bs/BsNewspaper"

import logo from "../../../public/static/Images/logo/final.webp"

import "./Sidebar.css"

// The `Sidebar` contains the logo, login form, and side navigation
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img
          src={logo}
          alt="Techscienceonline Logo"
          className="sidebar-logo-image"
          loading="lazy"
        />
      </div>
      <form className="sidebar-registration-form">
        <p className="sidebar-registration-form-title">Login now</p>
        <div className="sidebar-registration-form-inputs">
          <AiOutlineUser className="sidebar-registration-form-user-icon" />
          <label for="form-email" className="sidebar-registration-form-labels">
            Email
          </label>
          <input
            type="text"
            placeholder="Email/Username"
            className="sidebar-registration-form-input"
            id="form-email"
          />
        </div>

        <div className="sidebar-registration-form-inputs">
          <FiKey className="sidebar-registration-form-user-icon" />
          <label
            for="form-password"
            className="sidebar-registration-form-labels"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="sidebar-registration-form-input"
            id="form-password"
          />
        </div>

        <a href="#" className="sidebar-registration-form-cta-primary">
          Log In
        </a>
        <a href="#" className="sidebar-registration-form-cta-secondary">
          Sign Up
        </a>
      </form>
      <nav className="sidebar-nav">
        <a href="#">
          <CgAlbum className="" />
          Activity
        </a>
        <a href="#">
          <HiOutlinePhotograph className="" />
          Photos
        </a>
        <a href="#">
          <FiPlay className="" />
          Watch
        </a>
        <a href="#">
          <AiOutlineUser className="" />
          People
        </a>
        <a href="#">
          <GrGroup className="" />
          Groups
        </a>
        <a href="#">
          <AiOutlineFundProjectionScreen className="" />
          Adverts
        </a>
        <a href="#">
          <FiShoppingCart className="" />
          Shop
        </a>
        <a href="#">
          <BiBriefcase className="" />
          Jobs
        </a>
        <a href="#">
          <IoChatbubblesSharp className="" />
          Forum
        </a>
        <a href="#">
          <BsNewspaper className="" />
          Blog
        </a>
      </nav>
    </aside>
  )
}
