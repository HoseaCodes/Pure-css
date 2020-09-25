import React from "react"
import { Link } from "gatsby"
import './index.css'

// import NavBar from "../components/NavBar/navbar"
import Bcard from "../components/BCard/bcard"
import PietMondrain from "../components/PietMondrain/pietmondrain"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className='index-body'>
    {/* <NavBar /> */}
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my css journey.</p>
    <div className='index-group'>
      <Bcard />
    </div>
    <br />
    <hr />
    <div className='index-group'>
      <PietMondrain />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </div>
)

export default IndexPage
