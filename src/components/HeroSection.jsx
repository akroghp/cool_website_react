import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import "../css/HeroSection.css"
import testVid from './video/video-2.mp4'


function HeroSection() {
    return (
        <div className={"hero-container"}>
            <video autoPlay loop muted>
                <source src={testVid} type={'video/mp4'}/>
            </video>
            <h1 className={"color-theme-whiteish"}>The sustainable alternative for fish feed</h1>
            <p className={"color-theme-whiteish font-weight-bold"}>sub-headline</p>

            <div className={"justify-content-center BUTTONDIV p-2"}>
                <Button className={"btn-outline-light bg-transparent "}>Explore</Button>
            </div>
            <div className={"justify-content-center BUTTONDIV"}>
                <Button className={"btn-light"}>Watch Video <i className={"far fa-play-circle"}/></Button>
            </div>

        </div>
    );
}

export default HeroSection;