import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Design Site</title>
        <meta property="og:title" content="Design Site" />
      </Helmet>
    </div>
  )
}

export default Home
