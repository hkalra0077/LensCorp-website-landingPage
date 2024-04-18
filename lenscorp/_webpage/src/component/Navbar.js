
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Emplist from './emplist'; // Adjust the path based on your directory structure
import "../global.css"




const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    console.log("anchortoken",token);
    function Logout () {
        localStorage.removeItem("token");
        alert('You are logout');
        navigate("/login");
    }

    return (
        <header className="NewNavbar_nav_cont_dark__jxRzF head" style={{ display: "flex" }}>
            <nav className="NewNavbar_nav_block__Kt2BG">
                <div>
                    <a className="./images/logo.webp" href="/">
                        
                        <img alt="logo" loading="lazy" width="100" height="80" decoding="async" data-nimg="1"
                            style={{ color: "transparent", marginTop: "4px", paddingTop: "4px" }}
                            srcSet="./images/logo.webp"
                            src="./images/logo.webp" />
                    </a>
                </div>
                <div className="nav__menu-bar" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="nav__menu-list">
                    <div>
                        <a className="nav__link" target="_blank" style={{ color: "black", fontSize: '20px'}}
                            href="https://makemyweb.ai/en" rel="noreferrer">Make My Web</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black", fontSize: '20px'}}
                            href="/" rel="noreferrer">Home</a>
                    </div>
                    <div>
                        <a className="nav__link" target="_blank" style={{ color: "black", fontSize: '20px'}}
                            href="https://lenscorp.ai/about" rel="noreferrer">Company</a>
                    </div>
                    <div>
                        <a className="nav__link" target="_blank" style={{ color: "black", fontSize: '20px'}}
                            href="https://lenscorp.ai/blogs" rel="noreferrer">Blogs</a>
                    </div>
                    <div>
                        <a className="nav__link active" style={{ color: "black", fontSize: '20px'  }} href="/emplist">Employee List</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black", fontSize: '16px' }} href="/login">LOGIN</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black", fontSize: '16px'  }} href="/signup">SIGN UP</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black", fontSize: '12px' }}
                            href="/" rel="noreferrer">made by-   
                            <span style= {{ fontWeight: '900',fontFamily: 'Arial, sans-serif' }}>  HARDIK KALRA</span>
                            </a>
                    </div>
                   
                    
                    <button className="themeBtn" style={{ display: "flex" }}>
                        <span></span>
                    </button>
                </div>
                        
            </nav>
        </header>
    );
};

export default Navbar;