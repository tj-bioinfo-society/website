import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          author
          siteUrl
          keywords
        }
      }
    }
  `)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    author,
    siteUrl,
    keywords
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    keywords: keywords,
  }
  
  return (
    <Helmet title={title} titleTemplate={titleTemplate} defaultTitle={defaultTitle}>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta property="og:image" content="./src/images/logo.png"/>
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
}

export default SEO