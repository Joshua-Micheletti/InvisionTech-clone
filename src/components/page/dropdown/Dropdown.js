import React from "react";
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import "./Dropdown.css";

export default function Dropdown(props) {
    const [isOpen, setOpen] = useState(false);
    const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

    function handleClick() {
        setOpen(!isOpen);
    }

    function handleClickOutside() {
        setOpen(false);
    }

    var menuItems = [];
    var elements = props.items.split(',');

    for (var i = 0; i < elements.length; i++) {
        menuItems.push(
            <li className='menu-item' key={elements[i]}>
                <button className='dropdown-button'>{elements[i]}</button>
            </li>
        );
    }

    return(
        <div ref={ref}>
            <button className="dropdown-button" onClick={handleClick}>{props.text}</button>
            {isOpen ?
                <div className="menu">
                    {menuItems}
                </div>
                : null}
        </div>
    );
}