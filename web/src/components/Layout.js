import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'

import Header from "./Header"
import Nav from './Nav'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='site-container'>
      <div className='inner-container'>
        <div className='sidebar-header'>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Nav />
        </div>
        <div className='mobile-header'>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Nav />
        </div>
        <main className='main'>
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
