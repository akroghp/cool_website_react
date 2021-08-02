import React from 'react';
import {Button} from "react-bootstrap";
import "../css/index.css"



function HalfPage() {

    return (
        <div className="align-items-center">
            <h1 className="text-lg-left">Moving towards a <span className="color-theme-secondary">sustainable</span> aquaculture industry.</h1>
            <p>Some more text that describes what our company is doing more or less, and maybe explain how good we are
                with some stats</p>
            <div className={"justify-content-center"}>
                <Button className={"btn-light"}>Watch Video <i className={"far fa-play-circle"}/></Button>
            </div>

        </div>
    );
}

export default HalfPage;