import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Bcard from "../components/BCard/bcard"
import Guy from "../components/Guy/guy"
import PietMondrain from "../components/PietMondrain/pietmondrain"
import Cat from "../components/Cat/cat"
import Planet from "../components/Planet/planet"
import Boo from "../components/Boo/boo"
import Switch from "../components/Switch/switch"
import DesignDesk from "../components/DesignDesk/DesignDesk"
import Gameboy from "../components/Gameboy/Gameboy"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
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
        {/* <div className='index-group'>
          <Guy />
        </div> */}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)