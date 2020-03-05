// Required imports.
import React from "react"
// Component & Styling imports.
import Navigation from './navigation.js'
import Footer from './footer.js'
import Style from "./layout.module.css"

export default ({ children }) => (
  <div className={Style.wrapper}>
    <Navigation />
    {children}
    <Footer />
  </div>
)