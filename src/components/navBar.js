import React from "react"
import { Link } from "gatsby"
import "./css/navBar.css"
export default () => {
    // const divStyle1 = {
    //     paddingLeft: '16px',
    // }
    const divStyle2 = {
        fontSize: '15px',
    }
    return (
        <nav className="nav70">
            <div className="topnav" id="myTopnav">
                <Link to="/" className="link">StUdnia</Link>
                <Link to="/aktualnosci" className="link">Aktualności</Link>

                <div className="dropdown">
                    <button className="dropbtn">Ludzie
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/odpowiedzialni" className="link">Odpowiedzialni</Link>
                        <Link to="/duszpasterze" className="link">Duszpasterze</Link>
                    </div>
                </div>

                  <div className="dropdown">
                    <button className="dropbtn">Spotkania
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/esencja" className="link">Esencja</Link>
                        <Link to="/sztukaKochania" className="link">Sztuka Kochania</Link>
                        <Link to="/czerpak" className="link">Czerpak</Link>
                        <Link to="/kuznia" className="link">Kuźnia</Link>
                        <Link to="/florentes" className="link">Florentes</Link>
                        <Link to="/fraternitas" className="link">Fraternitas</Link>
                    </div>
                </div>
                <Link to="/scholaMinistranci" className="link">Schola i Ministranci</Link> 
                <Link to="/kazania" className="link">Kazania</Link> 
                <Link to="/galeria" className="link">Galeria</Link> 
                <Link to="/fzk" className="link">FZK</Link> 
                <Link to="/kontakt" className="link">Kontakt</Link> 
                {/* <Link to="/kontakt" className="link">Kontakt</Link>  */}
                <a href="https://www.diki.pl" style={divStyle2} className="icon">&#9776;</a>
            </div>
        </nav>);
}

