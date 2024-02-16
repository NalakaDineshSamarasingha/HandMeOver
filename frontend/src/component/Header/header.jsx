import React from "react";
import './header.css';
import Search from '../../assests/search.png'

const Header = ()=>{
    return(
        <div className="header">
            <div className="upper">
                <span className="upper-text">“ Take from us your desires, <br /> and gift us <br />your unneeded fires. ”</span>
            </div>
            <div className="lower">
                <div className="search-container">
                    <img src={Search} alt="Search" />
                    <input type="text" name="search" id="search" className="search-input" />
                    <span className="search-btn">Search</span>
                </div>
                
            </div>
        </div>
    )
}

export default Header;
