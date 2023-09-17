import React from 'react';
import '../styles/StyleButton.css'


export default function StyleButton(props) {

    return(
        <div className={'style-button ' + (props.dark ? 'dark-background' : 'light-background')} onClick={props.onClick}>
            <div className={'style-button-center ' + (props.dark ? 'dark-center' : 'light-center')}>
            </div>
        </div>
    );
}