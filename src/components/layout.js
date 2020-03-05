import React from "react"
import Navigation from './navigation.js'
import Style from "./layout.module.css"

export default ({ children }) => (
  <div className={Style.wrapper}>
    <Navigation />
    {children}
  </div>
)