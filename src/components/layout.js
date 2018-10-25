import React from "react"
import Header from "./header.js"
import NavBar from "./navBar.js";
import Footer from "./footer.js";
import Content from "./content.js"
import layoutStyle from "./css/layout.module.css";

export default ({ children }) => (
    <div className={layoutStyle.mainLayout} >
        <NavBar/>
        {children}
        <Content/>
        <Footer />
    </div>
)
