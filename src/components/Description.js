import React from "react";
import "../styles/Description.css"



export default function Description(props) {

    return(
        <div className="description-container">
            <div className={"invision-tech " + (props.dark ? "dark-it" : "light-it")}>
                InvisionTech
            </div>
            <div className={"description " + (props.dark ? "dark-description" : "light-description")}>
                Scegli un hosting ecologico!<br></br>
                I nostri DataCenter sono alimentati al 100% da energie rinnovabili.<br></br>
                Proteggi i tuoi servizi, server e infrastruttura dagli attacchi DDoS-DoS 3/4/7.<br></br>
            </div>
        </div>
    );
}