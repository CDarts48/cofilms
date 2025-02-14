import React from 'react'
import PropTypes from 'prop-types'
import { PageContextProvider } from './usePageContext'
import { Page as HomePage } from '../pages/homepage/+Page'
import './css/index.css'
import './Layout.css'

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: PropTypes.node
}

function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Frame>
          <HomePage />
        </Frame>
      </PageContextProvider>
    </React.StrictMode>
  )
}

Frame.propTypes = {
  children: PropTypes.node
}

function Frame({ children }) {
  return (
    <div className="frame">
      {children}
    </div>
  )
}

export { Layout }