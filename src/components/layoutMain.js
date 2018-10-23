import React from "react"
import Header from "./header.js"
import NavBar from "./navBar.js";
import MainImage from "./mainImage.js";
import ActualContent from "./actualContent.js";
import Footer from "./footer.js";
import layoutStyle from "./layout.module.css";

export default (childer) =>{
    return(
    <div className = {layoutStyle.mainLayout} >
        <Header/>
        <NavBar/>
        <MainImage/>
        <ActualContent/>
        <Footer/>
    </div> )}


