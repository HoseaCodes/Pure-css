import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout';
import './index.css'

// import NavBar from "../components/NavBar/navbar"
import Bcard from "../components/BCard/bcard"
import Guy from "../components/Guy/guy"
import PietMondrain from "../components/PietMondrain/pietmondrain"
import Cat from "../components/Cat/cat"
import SEO from "../components/seo"
import Planet from "../components/Planet/planet"
import Boo from "../components/Boo/boo"
import Switch from "../components/Switch/switch"
import DesignDesk from "../components/DesignDesk/DesignDesk"
import Gameboy from "../components/Gameboy/Gameboy"

const IndexPage = () => (
  <Layout>
    <div className='index-body'>
      {/* <NavBar /> */}
      <SEO title="Home" />
      <h1 style={{ color: 'white' }}>Hosea's Digital Art Gallery</h1>
      <p>Welcome to my css journey.</p>
      <div className='index-container'>
        <div className='index-group'>
          <Bcard />
        </div>
        <div className='index-group'>
          <PietMondrain />
        </div>
        <div className='index-group'>
          <Planet />
        </div>
        <div className='index-group'>
          <Boo />
        </div>
        <div className='index-group'>
          <DesignDesk />
        </div>
        <div className='index-group'>
          <Switch />
        </div>
        <div className='index-group'>
          <Gameboy />
        </div>
        <div className='index-group'>
          <Cat />
        </div>
        <div className='index-group'>
          <Guy />
        </div>
      </div>

      {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div >
  </Layout>
)

export default IndexPage
