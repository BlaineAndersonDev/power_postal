// Required imports.
import React from "react"
// Component & Styling imports.
import Layout from "../components/layout"
import Landing from "./landing.js"
import About from "./about.js"
import Services from "./services.js"
import Contact from "./contact.js"
import Tracking from "./tracking.js"
import Footer from "./footer.js"

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Services />
    <Contact />
    <Tracking />
    <Footer />
  </Layout>
)

export default IndexPage
