// Required imports.
import React from "react"
// Component & Styling imports.
import Layout from "../components/layout"
import Landing from "./landing.js"
import About from "./about.js"
import Contact from "./contact.js"
import Tracking from "./tracking.js"

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Contact />
    <Tracking />
  </Layout>
)

export default IndexPage
