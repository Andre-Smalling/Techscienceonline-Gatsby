// import path from "path"
const path = require(`path`)

async function turnPostsIntoPages({ graphql, actions }) {
  // Get a template for this page
  const postTemplate = path.resolve("./src/templates/Posts.js")

  // Query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `)

  // Loop over each posts
  data.posts.nodes.forEach(post => {
    actions.createPage({
      // URL for the new page
      path: `thread/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  })
}

async function turnAuthorsIntoPages({ graphql, actions }) {
  // Get a template for this page
  const authorTemplate = path.resolve("./src/templates/Authors.js")

  // Query all posts
  const { data } = await graphql(`
    query {
      authors: allSanityAuthor {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  // Loop over each authors
  data.authors.nodes.forEach(author => {
    actions.createPage({
      // URL for the new author
      path: `author/${author.slug.current}`,
      component: authorTemplate,
      context: {
        slug: author.slug.current,
      },
    })
  })
}

// export async function createPages(params) {
//   await [turnPostsIntoPages(params), turnAuthorsIntoPages(params)]
// }

exports.createPages = async params => {
  await [turnPostsIntoPages(params), turnAuthorsIntoPages(params)]
}
