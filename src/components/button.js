// Required imports.
import React from "react"
// Component & Styling imports.
import Style from "./button.module.css";

export default (props) => (
  <a href={props.link} target="_blank" className={Style.button}><span>{props.text} </span></a>
)
