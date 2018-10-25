import React from "react"
import studniaLogo from "../img/studnia.gif"
import NavBar from "./navBar.js"
export default () => {
return (
    <div className = "flex-container">
     <header className="header">
        <img src={studniaLogo}/>
    </header>
    <NavBar/>
    </div>
  
    );
    }

