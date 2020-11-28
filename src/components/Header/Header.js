import React from 'react';
import './Header.css'
import Navbar from './../Navbar/Navbar'


function Header() {
    return (
        <div >
            <header >
                <Navbar />
                <div className="App-header" >
                    <div>
                        <h1 id="name">Kyle Bremont</h1>
                    </div>
                    <div> Software Engineer | Boulder, CO</div>
                    <a href="mailto:kylebremont@gmail.com" className="button">Get in touch</a>
                </div>
            </header>
        </div>
    );
}

export default Header;