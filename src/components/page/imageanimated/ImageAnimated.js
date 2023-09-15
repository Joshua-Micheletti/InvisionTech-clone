import React from "react";
import { useState } from "react";
// import { animated } from '@react-spring/web'
// import { motion } from 'framer-motion'
import "./ImageAnimated.css"

export default function ImageAnimated(props) {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    function handleClick() {
        setShouldAnimate(!shouldAnimate);
    }

    return(
        <div>
            <div className={shouldAnimate ? "animated-image" : ""}>
            </div>
            <button onClick={handleClick}>animate</button>
        </div>
    );
}