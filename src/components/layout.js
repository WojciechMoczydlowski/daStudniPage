import React from "react"
import Header from "./header.js"
import NavBar from "./navBar.js";
import Footer from "./footer.js";
import layoutStyle from "./layout.module.css";

export default ({children}) => (  
        <div className={layoutStyle.mainLayout} >
            <Header />
            <NavBar />
             {children}
             <Footer />
        </div>
)
