import React from "react";
import { useState } from "react";
// import Title from "./title/Title"
// import Icon from "./icon/Icon"
import Navbar from "../layouts/Navbar"
import Description from "../components/Description"
import StyleButton from "../components/StyleButton"
import "../styles/Page.css"

export default function Page() {
    const [isDark, switchStyle] = useState(false);

    function handleStyleChange() {
        console.log("style change");
        switchStyle(!isDark);
    }

    return(
        <div className={"Page " + (isDark ? "dark" : "light")}>
            <StyleButton dark={isDark} onClick={handleStyleChange}/>
            <Navbar dark={isDark}/>
            <Description dark={isDark}/>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
        </div>
    )
}