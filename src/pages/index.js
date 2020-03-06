// Required imports.
import React from "react"
// Component & Styling imports.
import Layout from "../components/layout"
import Landing from "./landing.js"
import About from "./about.js"
import Contact from "./contact.js"
import Tracking from "./tracking.js"
import Footer from "./footer.js"

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Contact />
    <Tracking />
    <Footer />
  </Layout>
)

export default IndexPage
