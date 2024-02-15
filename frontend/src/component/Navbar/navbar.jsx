import React from "react";
import './navbar.css';
import Logo from "../../assests/testlogo.png"

const Navbar = ()=> {
    return(
        <section>
            <div className="navbar">
            <div className="main-container">
                <div className="nav-main">
                    <div className="nav-left">
                        <ul className="nav-links">
                            <li className="link">Home</li>
                            <li className="link">Services</li>
                            <li className="link">Contact</li>
                            <li className="link">About Us</li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-links">
                            <li className="link">Log in</li>
                            <li className="link">Sign Up</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="secoundary-container">
                <div className="nav-secoundary">
                    <div className="nav-main">
                        <div className="logo">
                            <img src={Logo} alt="Logo" style={{width:"50px"}} />
                        </div>
                        <div className="btn">
                            <p className="donate-btn">Donate <br /> now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobo">
                <div className="mobo-left">
                    <p className="menu-icon">&#9776;</p>
                </div>
                <div className="mobo-right">
                    <ul className="nav-links">
                        <li className="link">Log in</li>
                        <li className="link">Sign Up</li>
                    </ul>
                </div>
            </div>
        </section>
        
    )
}
export default Navbar;