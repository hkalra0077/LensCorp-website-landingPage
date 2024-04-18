import React, { useState } from 'react';

import "../global.css"

function Newhero() {
    return (
        <div className="NewHero_heroContainer__M77cV" id="top">
            <img
                alt="herobg"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="NewHero_vid__a5nxX"
                style={{ color: 'transparent' }}
                srcSet="./images/wallpaper.jpg"
                src="./images/wallpaper.jpg"
            />
            <div className="NewHero_heroLightContent__H6F5T">
                <h1 className="NewHero_sectionHeadingLight__wqJ1M" style={{color: 'white', letterSpacing: '1px'}}>We are at the forefront of AI</h1>
                <p className="NewHero_subHeadingLight__i7EVe" style={{color: 'white'}}>
                    From Conserving Wildlife to Automatically Generating Caricatures-
                    <span style={{ fontWeight: 'bold', color: 'white' }}> {" "}We Do It All</span>
                </p>
                <a href="https://lenscorp.ai/about">
                    <button className="Buttons_primaryButton__TNkjJ">Learn More</button>
                </a>
            </div>
        </div>
    );
}

export default Newhero;