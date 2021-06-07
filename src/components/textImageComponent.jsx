import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import {render} from "@testing-library/react";


const TextImageComponent = (props) => {
    return(
        <div className="pb-5">
            <h2 className="color-theme-red text-center">{props.text1}
                <span className="color-theme-secondary">{props.spanText}</span>
                {props.text2}
            </h2>
        </div>
    )
}

export default TextImageComponent;

