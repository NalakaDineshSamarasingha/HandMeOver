import React from 'react';
import './footer.css';
import facebook from "../../assests/face.png"
import twitter from '../../assests/ins.png'
import tiktok from '../../assests/tik.png'  
import you from '../../assests/you.png'  
import ln from '../../assests/in.png'  
import ins from '../../assests/ins.png'  
import app from '../../../src/assests/appstore.png'
import play from '../../../src/assests/playstore.png'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-component">
                <div className="left">
                    <p>Contact Information</p>
                    <ul>
                        <li>Address : No.325 High Level Road, Nugegoda</li>
                        <li>0777626292</li>
                        <li>info@buykorea.lk</li>
                    </ul>
                    <p>For Your Convenience we accept</p>
                </div>
                <div className="right">
                    <p>Contact Information</p>
                    <ul>
                        <li>Address : No.325 High Level Road, Nugegoda</li>
                        <li>0777626292</li>
                        <li>info@buykorea.lk</li>
                    </ul>
                    <p>For Your Convenience we accept</p>
                </div>
            </div>
            <div className="footer-component">
                <div className="left1">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={tiktok} alt="tik"/>
                    <img src={you} alt="you"/>
                    <img src={ln} alt="in"/>
                    <img src={ins} alt="ins"/>
                </div>
                <div className="right2">
                    <p>Trade on the go with the HandMeOver.com app</p>
                    <img src={app} alt="appstore" className='app' style={{height:"25px"}}/>
                    <img src={play} alt="playstore" />
                </div>
            </div>
            <hr />
            <div className="footer-component">
                <div className="left">© 2024 HandMeOver.com Pty Ltd. All rights reserved.</div>
                <div className="right3">
                    <p>Terms of Services</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
