import React from "react";
import "../styles/Navbar.css"
import Icon from "../components/Icon"
import Dropdown from "../components/Dropdown"
import { useState, useRef } from "react";
// import 'react-dropdown/style.css';

import { useIsVisible } from "../hooks/useIsVisible"

export default function Navbar(props) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" ref={ref}>
                <a className="navbar-brand" href="#">
                    <Icon />
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        <div className="nav-item">
                            <a className="nav-link home-link" href="#">Home</a>
                        </div>
                        <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")}>
                            <Dropdown dark={props.dark} text="Server" items="VPS Cloud,Server Dedicati,VPS 10Gbit" />
                        </div>
                        <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")}>
                            <Dropdown dark={props.dark} text="Web" items="Web Hosting, Domini, Web Dev" />
                        </div>
                        <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")} href="#">
                            VoIP
                        </div>
                        <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")} href="#">
                            Gaming
                        </div>
                        <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")}>
                            <Dropdown dark={props.dark} text="Azienda" items="Su di Noi, Programma, Azienda Digitale, Anti Ddos, Contattaci" />
                        </div>
                    </div>
                </div>
            </nav>

            {!isVisible ?
                <nav className={"navbar navbar-expand-lg navbar-dark bg-light custom-sticky-top fade-down " +
                                (props.dark ? "dark-nav" : "light-nav")}>
                    <a className="navbar-brand" href="#">
                        <Icon />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto">
                            <div className="nav-item">
                                <a className="nav-link home-link" href="#">Home</a>
                            </div>
                            <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")}>
                                <Dropdown dark={props.dark} text="Server" items="VPS Cloud,Server Dedicati,VPS 10Gbit" />
                            </div>
                            <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")}>
                                <Dropdown dark={props.dark} text="Web" items="Web Hosting, Domini, Web Dev" />
                            </div>
                            <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")} href="#">
                                VoIP
                            </div>
                            <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")} href="#">
                                Gaming
                            </div>
                            <div className={"nav-item " + (props.dark ? "dark-item" : "light-item")}>
                                <Dropdown dark={props.dark} text="Azienda" items="Su di Noi, Programma, Azienda Digitale, Anti Ddos, Contattaci" />
                            </div>
                        </div>
                    </div>
                </nav>
                
                : null
            }
            
        </div>
    );
}