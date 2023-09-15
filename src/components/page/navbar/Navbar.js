import React from "react";
import "./Navbar.css"
import Icon from "../icon/Icon"
import Dropdown from "../dropdown/Dropdown"
import 'react-dropdown/style.css';

export default function Navbar() {


    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <Icon />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item">
                        <a className="nav-link home-link" href="#">Home</a>
                    </div>
                    <div className="nav-item nav-link">
                        <Dropdown text="Server" items="VPS Cloud,Server Dedicati,VPS 10Gbit" />
                    </div>
                    <div className="nav-item nav-link">
                        {/* <a className="nav-link" href="#">Web</a> */}
                        <Dropdown text="Web" items="Web Hosting, Domini, Web Dev" />
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="#">VoIP</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link" href="#">Gaming</a>
                    </div>
                    <div className="nav-item nav-link">
                        {/* <a className="nav-link" href="#">Azienda</a> */}
                        <Dropdown text="Azienda" items="Su di Noi, Programma, Azienda Digitale, Anti Ddos, Contattaci" />
                    </div>
                </div>
            </div>
        </nav>
    );
}