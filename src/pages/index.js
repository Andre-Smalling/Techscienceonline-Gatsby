import React, { lazy, Suspense } from "react"
import { Helmet } from "react-helmet"

import "./index.css"

const LayoutComponent = lazy(() =>
  import("../components/Layout/Layout.component")
)
const HeaderComponent = lazy(() =>
  import("../components/Header/Header.component")
)
const SidebarComponent = lazy(() =>
  import("../components/Sidebar/Sidebar.component")
)
const ForumComponent = lazy(() => import("../components/Forum/Forum.component"))
const RightbarComponent = lazy(() =>
  import("../components/Rightbar/Rightbar.component")
)

const renderLoader = () => <p>Loading...</p>

// The homepage component which renders all other sub-components
const Home = () => (
  <Suspense fallback={renderLoader}>
    <LayoutComponent>
      {/* Helmet is used to improve SEO performance */}
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="Techscienceonline Forum"
          content="Welcome to the forum of Techscienceonline where you can share ideas and ask questions by getting feedback from others."
        ></meta>
        <meta
          name="Description"
          content="A forum/blog application made with Gatsby."
        ></meta>
        <title>Techscienceonline | Forum</title>
        <link rel="canonical" href="https://techscienceonline.com/" />
      </Helmet>

      {/* The container element contains the sub-components */}
      <div className="container">
        <HeaderComponent />
        <SidebarComponent />
        <ForumComponent />
        <RightbarComponent />
      </div>
    </LayoutComponent>
  </Suspense>
)

export default Home
