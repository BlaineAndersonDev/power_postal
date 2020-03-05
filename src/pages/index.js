// Required imports.
import React from "react"
import { Link } from "gatsby"
// Component & Styling imports.
import Style from "./index.module.css"
import Layout from "../components/layout"
import Landing from "./landing.js"

const IndexPage = () => (
  <Layout>
    <Landing />
  </Layout>
)

export default IndexPage
