import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata

  // Check if the props were used. If not, then use the default ones
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  // Returning the entire SEO data with Helmet. Helmet is used to manage document head (metadata)
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

// `propTypes` are used to ensure we get all the data we need in the component
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

// The information we put in `siteMetadata` gets used every time
SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        # Renaming 'title' to 'defaultTitle'
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`
