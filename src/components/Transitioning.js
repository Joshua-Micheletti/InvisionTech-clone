import React from "react";
import { useState, useRef } from "react";

import "../styles/Transitioning.css"
import { useIsVisible } from "../hooks/useIsVisible"

export default function Transitioning(props) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return(
        <div className="container" ref={ref}>
            <div className={isVisible ? "dynamic" : "static"}>
            </div>
        </div>
    );
}