import React from "react";

import signature from "../../../Assets/pictures/Signature.svg"
import "./About_Us.scss";
import  {Decoration}  from "../../../Assets/Shared/Decoration/Decoration";

export const HomeAboutUs = () => {
    return (
        <div className= "wrapper">
            <div className="about-us">
                <div className="about-us-left">
                    <div className="about-us-items">
                        <div className="title">
                            <h2>O nas</h2>
                            <Decoration/>
                            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                            <img src={signature} className="signature" alt = "signature"/>
                        </div>
                    </div>
                </div>
                <div className= "about-us-right people-image"/>
            </div>
        </div>
    );
};