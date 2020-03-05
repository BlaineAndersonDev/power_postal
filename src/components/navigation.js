// Required imports.
import React from "react"
import { Link } from "gatsby"
// Component & Styling imports.
import Style from "./navigation.module.css"
// Image imports.
import PPLogo from '../images/pp_exterior.png';

export default () => (
  <div className={Style.wrapper}>
    <div className={Style.leftSide}>
      <Link to="/" className={Style.link}>
        <img 
        src={PPLogo}
        className={Style.logo}
        alt="Logo" />
      </Link>
    </div>
    <div className={Style.rightSide}>
      <Link to="/" className={Style.link}>Filler2</Link>
      <Link to="/" className={Style.link}>Filler1</Link>
      <Link to="/" className={Style.link}>Filler3</Link>
    </div>
  </div>
);