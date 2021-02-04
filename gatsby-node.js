const path = require("path")

// Function to create Individual blog pages
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve(
    "./src/templates/BlogTemplate/blogTemplate.js"
  )

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}

// Pagination function
async function turnForumIntoPages({ graphql, actions }) {
  // 1. Query all Forum
  const { data } = await graphql(`
    query {
      forumContent: allMarkdownRemark {
        totalCount
        nodes {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  `)

  // 2. Figure out how many pages are there based on the number of forum content and how many per page
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
  const pageCount = Math.ceil(data.forumContent.totalCount / pageSize)

  // 3. Loop from 1 to n and create pages for each of them
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/forum/${i + 1}`,
      component: path.resolve("./src/pages/forumContent.js"),

      //? This data is passed to the template when we create it
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    })
  })
}

//? `createPages` is a Gatsby extension point/Hook which tells plugins to add pages.
async function createPages(params) {
  // Create pages dynamically and concurrently at the same time
  await Promise.all([turnForumIntoPages(params)])
}
