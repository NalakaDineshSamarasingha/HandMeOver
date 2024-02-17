import React from "react";
import './intro.css';
import C1 from '../../assests/1.png';
import C2 from '../../assests/2.png';
import C3 from '../../assests/3.png';

const Intro = ()=>{
    return(
        <section className="intro-section">
            <div className="intro">
                <div className="component">
                    <img src={C1} alt="C1" />
                    <p>Give away what you no longer need.</p>
                </div>
                <div className="component">
                    <img src={C2} alt="C2" />
                    <p>Get what you need for us.</p>
                </div>
                <div className="component">
                    <img src={C3} alt="C3" />
                    <p>Who are we</p>
                </div>
            </div>
        </section>
    )
}

export default Intro;