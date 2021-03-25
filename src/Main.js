import React, {Component} from 'react';
import NavigationBar from "./components/navigationBar";
import CardComponent from "./components/cardComponent";
import Counters from "./components/counters";
import {CardGroup} from "react-bootstrap";
import CarouselComponent from "./components/carousel";
import "bootstrap/dist/css/bootstrap.css";
import duckImage from "./duckImage.jpeg";
import AppFooter from "./components/appFooter";
import {BrowserRouter as Router, Route} from "react-router-dom"


class Main extends Component {
    state = {};

    constructor() {
        super();
        console.log("App - Constructor")
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
            <Router>
            <React.Fragment>
                <NavigationBar/>
                    <Route path="/" exact>
                        <CarouselComponent/>
                        <React.Fragment>
                            <CardGroup>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                            </CardGroup>
                        </React.Fragment>
                    </Route>
                    <Route path="/about">
                        <React.Fragment>
                            <CardGroup>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                            </CardGroup>
                        </React.Fragment>
                    </Route>
                    <Route path="/team">
                        <React.Fragment>
                            <CardGroup>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                                <CardComponent></CardComponent>
                            </CardGroup>
                        </React.Fragment>
                    </Route>


                <AppFooter/>

            </React.Fragment>
            </Router>

        )

    }
}
export default Main;