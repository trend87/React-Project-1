import React from "react"
import reactLogo from "../images/logo512.png"


function Header() {
    return (
      <header >
            <nav className="nav">

              <div className="logoContainer" >
                <img src={reactLogo} className="logo"  alt="react-logo" />
               <span>ReactFacts</span> 
              </div>
              
              <p>Project-1</p>
            </nav>
        </header>
    )
  }

export default Header