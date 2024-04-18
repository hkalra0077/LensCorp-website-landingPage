import React from 'react';

import "../global.css"

const images = [
    {
        alt: "gen",
        width: "200",
        height: "113",
        src: "./images/c1.webp",
        srcSet: "./images/c1.webp",
    },
    {
        alt: "gen",
        width: "200",
        height: "96",
        src: "./images/c2.webp",
        srcSet: "./images/c2.webp",
    },
    {
        alt: "gen",
        width: "200",
        height: "112",
        src: "./images/c3.webp",
        srcSet: "./images/c3.webp",
    },
    {
        alt: "gen",
        width: "123",
        height: "78",
        src: "./images/c4.webp",
        srcSet: "./images/c4.webp",
    }
];

function ClientSection() {
    return (
        <div className="NewClient_sec6__EgRtw">
            <h1 className="NewClient_section6Heading__TGGXE">We Work With Amazing Clients</h1>
            <div className="NewClient_image_section___eIHp">
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            alt={image.alt}
                            loading="lazy"
                            width={image.width}
                            height={image.height}
                            decoding="async"
                            data-nimg="1"
                            style={{ color: 'transparent', height: '8rem', width: '12rem' }}
                            srcSet={image.srcSet}
                            src={image.src}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientSection;