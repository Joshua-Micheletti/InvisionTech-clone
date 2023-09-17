import React from "react";
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import "../styles/Dropdown.css";

export default function Dropdown(props) {
    const [isOpen, setOpen] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

    function handleClick() {
        setOpen(!isOpen);

        if (isOpen) {
            setTimeout(hideMenu, 500);
        } else {
            setHidden(false);
        }
    }

    function handleClickOutside() {
        setOpen(false);
        setTimeout(hideMenu, 500);
    }

    function hideMenu() {
        setHidden(true);
        console.log("hidden!");
    }

    var menuItems = [];
    var elements = props.items.split(',');

    for (var i = 0; i < elements.length; i++) {
        menuItems.push(
            <li className={'menu-item ' + (props.dark ? "dark-menu-item" : "light-menu-item")} key={elements[i]}>
                <button className={'dropdown-button ' + (props.dark ? "dark-button" : "light-button")} >{elements[i]}</button>
            </li>
        );
    }

    return(
        <div ref={ref}>
            <button className={"dropdown-button " + (props.dark ? "dark-button" : "light-button")} onClick={handleClick}>{props.text}</button>
            {isOpen ?
                <div className={"menu " + (props.dark ? "dark-menu" : "light-menu")}>
                    {menuItems}
                </div>
                :
                <div className={"menu-closed " + (isHidden ? "menu-hidden " : "") + (props.dark ? "dark-menu" : "light-menu")}>
                    {menuItems}
                </div>
            }
        </div>
    );
}