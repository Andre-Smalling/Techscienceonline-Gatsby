import HashIcon from "@heroicons/react/outline/HashtagIcon"
import ReportIcon from "@heroicons/react/solid/ExclamationIcon"
import ViewsIcon from "@heroicons/react/solid/EyeIcon"
import ShareIcon from "@heroicons/react/solid/ShareIcon"
import { graphql, Link } from "gatsby"
import React from "react"
import FooterComponent from "./../components/FooterComponent/FooterComponent"
import HeaderComponent from "./../components/Header/Header.component"
import RecentTopicsComponent from "./../components/RecentTopicsComponent/RecentTopicsComponent"

export default function SinglePostPage({ data: { post } }) {
  return (
    <div className="bg-gray-50">
      <HeaderComponent />
      <div className="blogpage-component lg:ml-80 lg:mt-8 sm:ml-0 sm:mt-0 sm:p-8">
        <img
          className="blogpage-component-img rounded object-cover sm:w-80"
          style={{
            width: 678,
            height: 348.96,
          }}
          src={post.mainImage.asset.url}
        />
        <div
          className="blogpage-component-details inline-flex flex-col space-y-11 items-center justify-end"
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
              className="blogpage-component-details-back h-5 text-base leading-normal text-gray-500 cursor-pointer font-body sm:hidden lg:block"
              style={{ paddingTop: "1rem" }}
              to="/"
            >
              ← Back to home
            </Link>
            <h3
              className="text-3xl font-bold text-gray-800 font-headline sm:pr-36 md:pr-0"
              style={{ width: 700, height: 73, paddingTop: "1rem" }}
            >
              {post.title}
            </h3>
            <div
              className="blogpage-component-details-stats inline-flex space-x-8 items-center justify-end w-80 h-6"
              style={{ marginLeft: "1.3rem" }}
            >
              <p className="text-base leading-normal text-indigo-700 font-body">
                #learning
              </p>
              <div className="blog-stats flex space-x-5 items-center justify-end w-60 h-full">
                <div className="flex space-x-1.5 items-center justify-end w-16 h-full">
                  <ShareIcon className="text-gray-600" />
                  <p className="w-2/3 text-base leading-normal text-gray-600 font-body">
                    Share
                  </p>
                </div>
                <div className="flex space-x-1.5 items-center justify-end w-20 h-full">
                  <ReportIcon className="w-4 h-4 text-gray-600" />
                  <p className="w-12 text-base leading-normal text-gray-600 font-body">
                    Report
                  </p>
                </div>
                <div className="flex space-x-1.5 items-center justify-end w-14 h-5/6">
                  <ViewsIcon className="w-4 h-4 text-gray-600" />
                  <p className="w-7 h-full text-base leading-normal text-gray-600 font-body">
                    103
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="blogpage-component-details-message flex flex-col space-y-2.5 items-end justify-end"
            style={{ width: 695, height: 188 }}
          >
            <Link
              to={`/author/${post.author.slug.current}`}
              className="blogpage-component-details-author inline-flex space-x-2.5 items-center justify-end"
              style={{ margin: "0 30rem" }}
            >
              <img
                className="w-10 shadow border rounded-full border-gray-200"
                src={post.author.image.asset.url}
              />
              <div className="flex space-x-1.5 items-center justify-end">
                <p className="w-28 h-full text-base font-medium leading-normal text-gray-600 font-body">
                  {post.author.name}
                </p>
                <p className="w-max text-base leading-normal text-gray-500 font-body">
                  {post._createdAt}
                </p>
              </div>
            </Link>
            <p
              className="blogpage-component-details-message-text text-base leading-normal text-gray-600 font-body sm:pr-36 md:pr-0 lg:pr-0 sm:pb-40 md:pb-0 lg:pb-0"
              style={{
                height: 142,
                margin: "0rem .5rem",
                paddingTop: "1rem",
              }}
            >
              {post.excerpt}
            </p>
          </div>
          <div
            className="blogpage-component-details-message-comment flex flex-col space-y-4 items-start justify-end"
            style={{
              width: 457,
              height: 118,
              padding: "0 4rem",
              marginTop: "15rem",
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
              />
            </div>
            <a
              className="w-40 flex items-center justify-center flex-1 h-full px-5 pt-2 pb-3 border rounded-full border-indigo-700 text-base leading-normal text-center text-indigo-700 cursor-pointer font-body"
              href="#"
              style={{ margin: "1rem -9rem" }}
            >
              Add a comment
            </a>
          </div>
        </div>

        <div className="comments sm:-mx-8 lg:-mx-0">
          <p className="blogpage-component-details-comments-others w-40 text-2xl font-semibold text-gray-600 font-headline lg:my-12 lg:ml-0 sm:ml-8 sm:my-10">
            3 comments
          </p>
          <div
            className="blogpage-component-details-comments-others-1 inline-flex space-x-3 items-center justify-end lg:w-auto sm:w-3/4 sm:mx-16"
            style={{ height: 35, marginTop: "-3rem" }}
          >
            <img
              className="w-9 h-full shadow border rounded-full border-gray-200 sm:-mx-8 lg:-ml-16"
              src="https://i.pravatar.cc"
            />
            <div
              className="flex space-x-2 justify-end sm:block lg:flex"
              style={{ width: 653.54, height: 24 }}
            >
              <p className="w-full h-4 text-base font-medium leading-normal text-gray-600 font-body sm:mx-10 lg:ml-10 lg:mr-0">
                Darrell Steward
              </p>
              <p
                className="blogpage-component-details-comments-others-2 text-base leading-normal text-gray-600 font-body lg:m-0 sm:my-4 sm:mx-6"
                style={{ width: "400%" }}
              >
                Check out this article on Ebbinghaus' forgetting curve. Might
                give you <br />
                <span className="font-body sm:m-0 lg:my-0 lg:-mx-32">
                  some insights of how things are actually happening (along with
                  some examples): <br />
                </span>
                <a
                  className="blogpage-component-details-comments-others-3 text-base leading-normal underline text-indigo-700 font-body lg:my-0 lg:-mx-32"
                  href="https://www.mindtools.com/pages/article/forgetting-curve.htm"
                >
                  https://www.mindtools.com/pages/article/forgetting-curve.htm
                </a>
                <div
                  className="blogpage-component-details-comments-others-4 space-x-2.5 sm:hidden lg:block"
                  style={{ margin: "1rem -8.5rem" }}
                >
                  <a
                    className="w-8 text-base leading-normal text-gray-500 font-body"
                    href="#"
                  >
                    Like
                  </a>
                  <a
                    className="w-10 text-base leading-normal text-gray-500 font-body"
                    href="#"
                  >
                    Reply
                  </a>
                  <a
                    className="w-1/6 text-base leading-normal text-gray-500 font-body"
                    href="#"
                  >
                    2h
                  </a>
                </div>
              </p>
            </div>
          </div>

          <div
            className="blogpage-component-details-comments-others-5 relative sm:my-24 sm:mx-8 lg:my-36 lg:mx-8"
            style={{ width: 655, height: 138 }}
          >
            <p
              className="absolute text-base leading-normal text-gray-600 font-body"
              style={{ width: 611, left: 44, top: 31 }}
            >
              teachers/professor encourage note-taking in order to help you
              refresh yourself.
            </p>
            <p
              className="absolute text-base leading-normal text-gray-600 font-body"
              style={{ width: 611, left: 44, top: 56 }}
            >
              It's also why you're typically given some time to study for a test
              so you can go through the concepts again and brush up.
            </p>
            <div
              className="inline-flex space-x-2.5 items-center justify-end h-6 absolute"
              style={{ left: 44, top: 114 }}
            >
              <p className="w-7 text-base leading-normal text-gray-500 font-body">
                Like
              </p>
              <p className="w-10 text-base leading-normal text-gray-500 font-body">
                Reply
              </p>
              <p className="w-1/6 text-base leading-normal text-gray-500 font-body">
                1h
              </p>
            </div>
            <p
              className="absolute right-0 top-0 text-base leading-normal text-gray-600 font-body"
              style={{ width: 507, margin: "0.4rem -0.5rem" }}
            >
              This is pretty much completely normal and exactly why
            </p>
            <p
              className="h-4 absolute text-base font-medium leading-normal text-gray-600 font-body"
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
            className="blogpage-component-details-comments-others-5 relative"
            style={{ width: 655, height: 138, margin: "-4rem 2rem" }}
          >
            <p
              className="absolute text-base leading-normal text-gray-600 font-body"
              style={{ width: 611, left: 44, top: 31 }}
            >
              learning. My education professors believed in a full
              constructivist approach and did very little lecture and the little
              they did do, they discouraged us from taking notes (it was too
              boring).
            </p>
            <div
              className="inline-flex space-x-2.5 items-center justify-end h-6 absolute"
              style={{ left: 44, top: 114 }}
            >
              <p className="w-7 text-base leading-normal text-gray-500 font-body">
                Like
              </p>
              <p className="w-10 text-base leading-normal text-gray-500 font-body">
                Reply
              </p>
              <p className="w-1/6 text-base leading-normal text-gray-500 font-body">
                1h
              </p>
            </div>
            <p
              className="absolute right-0 top-0 text-base leading-normal text-gray-600 font-body"
              style={{ width: 507, margin: "0.4rem -3rem" }}
            >
              I agree with taking notes as important in adolescent and adult
            </p>
            <p
              className="h-4 absolute text-base font-medium leading-normal text-gray-600 font-body"
              style={{ left: 44, top: 6 }}
            >
              Brooklyn Simmons
            </p>
            <img
              className="h-9 absolute left-0 top-0 shadow border rounded-full border-gray-200"
              src="https://i.pravatar.cc"
            />
          </div>
        </div>

        <div
          className="blogpage-component-recent-topics inline-flex flex-col space-y-8 items-center justify-end w-80 absolute sm:hidden lg:flex"
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
                <p className="w-full h-36 text-base leading-normal text-gray-800 font-body">
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
                    <p className="w-full h-5 text-base leading-normal text-gray-800 font-body">
                      Members
                    </p>
                  </div>
                  <div className="inline-flex flex-col space-y-1.5 items-center justify-end w-1/3 h-full">
                    <p className="w-5/6 h-5 text-xl leading-loose text-center text-gray-800 font-headline">
                      171
                    </p>
                    <p className="w-full h-5 text-base leading-normal text-center text-gray-800 font-body">
                      Online
                    </p>
                  </div>
                </div>
                <a className="flex items-center justify-center flex-1 h-full px-5 py-3 shadow border rounded-full border-indigo-700 text-base font-medium text-center text-indigo-700 cursor-pointer font-body">
                  Join learning
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer lg:my-32 lg:-mx-60 sm:m-0 md:my-8">
          <div className="blogpage-component-recent-topics">
            <RecentTopicsComponent />
          </div>
          <div className="blogpage-component-footer">
            <FooterComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      _createdAt(fromNow: true)
      title
      id
      author {
        name
        slug {
          current
        }
        image {
          asset {
            url
          }
        }
      }
      excerpt
      mainImage {
        asset {
          url
        }
      }
      tags {
        title
      }
    }
  }
`
