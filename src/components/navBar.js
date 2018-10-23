import React from "react"
import "./css/navBar.css"
export default () => {
    const divStyle1 = {
        paddingLeft:'16px',
    }
    const divStyle2 = {
        fontSize:'15px',
    }
    return (
        <nav>
            <div className="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <div className="dropdown">
                    <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="https://www.diki.pl">Link 1</a>
                        <a href="https://www.diki.pl">Link 2</a>
                        <a href="https://www.diki.pl">Link 3</a>
                    </div>
                </div>
                <a href="https://www.diki.pl">About</a>
                <a href="https://www.diki.pl" style={divStyle2} className="icon" onclick="myFunction()">&#9776;</a>
            </div>

            <div style={divStyle1}>
                <h2>Responsive Topnav with Dropdown</h2>
                <p>Resize the browser window to see how it works.</p>
                <p>Hover over the dropdown button to open the dropdown menu.</p>
            </div>
        </nav>);
}

