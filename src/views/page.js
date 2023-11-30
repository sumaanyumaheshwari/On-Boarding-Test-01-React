import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>On-Boarding-Test-01</title>
        <meta property="og:title" content="On-Boarding-Test-01" />
      </Helmet>
      <span className="page-text">Welcome to XYZ</span>
      <h1 className="page-text1">On-Boarding  Portal</h1>
      <button className="page-button button">Get Started</button>
      <span className="page-text2">magnificent things are very simple</span>
    </div>
  )
}

export default Page
