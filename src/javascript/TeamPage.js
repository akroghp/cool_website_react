import React, {Component} from 'react';
import NavigationBar from "../components/navigationBar";
import CardComponent from "../components/cardComponent";
import {CardGroup} from "react-bootstrap";
import CarouselComponent from "../components/carousel";
import "bootstrap/dist/css/bootstrap.css";
import AppFooter from "../components/appFooter";


class TeamPage extends Component {
    state = {};

    constructor() {
        super();
        console.log("App - TEAMPAGE");
    }

    // called when component is rendered into the DOM and is perfect place to get data from server!
    componentDidMount() {
        // Ajax Call
        // this.setState{...}
    }
    // Called when removing components from DOM. Here we can clean up different trackers to limit memory leaks.
    componentWillUnmount() {

    }

    // If theres is changes, we can update the server (send receive data)
    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        return(

            <React.Fragment>
                <NavigationBar/>
                <CardGroup>
                    <CardComponent></CardComponent>
                </CardGroup>
                <AppFooter/>
            </React.Fragment>


        )

    }
}
export default TeamPage;