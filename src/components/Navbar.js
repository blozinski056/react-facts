import React from "react"
import reactLogo from "../images/React-icon.svg.png"

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="nav-logo-title">
        <img className="nav-logo" src={reactLogo} />
        <h3 className="nav-title">ReactFacts</h3>
      </div>

      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div 
          className="toggler-slider"
          onClick={props.toggleDarkMode}
        >
          <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>   
  )
}