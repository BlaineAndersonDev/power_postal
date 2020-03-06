// Required imports.
import React from "react"
// Component & Styling imports.
import Style from "./layout.module.css"

export default ({ children }) => (
  <div className={Style.wrapper}>
    {children}
  </div>
)