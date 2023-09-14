import React from "react";
import { useState } from "react";

import "./Dropdown.css";

export default function Dropdown({text}) {
    const [isOpen, setOpen] = useState(false);

    function handleHover() {
        setOpen(!isOpen);
    }

    return(
        <div>
            <button className="dropdown-button" onClick={handleHover}>{text}</button>
            {isOpen ?
                <div className="menu">
                    <li className="menu-item">
                        <button className="dropdown-button">VPS Cloud</button>
                    </li>
                    <li className="menu-item">
                        <button className="dropdown-button">Server Dedicati</button>
                    </li>
                    <li className="menu-item">
                        <button className="dropdown-button">VPS 10Gbit</button>
                    </li>
                </div>
                : null}
        </div>
    );
}