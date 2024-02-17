import React, { useState } from "react";
import './navbar.css';
import Logo from "../../assests/logo.png"

const Navbar = ()=> {
    const [showMenu,setShowMenu] = useState(false);
    return(
        <section className="nav">
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
                            <p className="category">Category</p>
                        </div>
                        <div className="btn">
                            <p className="donate-btn">Donate <br /> now</p>
                        </div>
                        <div className="mobo">
                        <p className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <span>&#10005;</span> : <span id="click">&#9776;</span>}
                        </p>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className={`mobo-nav-links ${showMenu ? 'slide-in' : 'slide-out'}`} style={{display: showMenu?'flex':'none'}} >
            <ul className="nav-links">
                <li className="link" onClick={()=>setShowMenu(false)} >Home</li>
                <li className="link" onClick={()=>setShowMenu(false)} >Services</li>
                <li className="link" onClick={()=>setShowMenu(false)} >Contact</li>
                <li className="link" onClick={()=>setShowMenu(false)} >About Us</li>
                <li className="link" onClick={()=>setShowMenu(false)} >Login</li>
                <li className="link" onClick={()=>setShowMenu(false)} >SignUp</li>
                <li className="link donate" onClick={()=>setShowMenu(false)} >Donate</li>
            </ul>
        </div>
        </section>
        
    )
}
export default Navbar;