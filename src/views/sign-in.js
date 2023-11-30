import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-In - On-Boarding-Test-01</title>
        <meta property="og:title" content="Sign-In - On-Boarding-Test-01" />
      </Helmet>
    </div>
  )
}

export default SignIn
