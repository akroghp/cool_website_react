import React, {Component} from 'react';
import NavigationBar from "./components/navigationBar";
import CardComponent from "./components/cardComponent";
import TextComponent from "./components/textComponent";
import Counters from "./components/counters";
import {CardGroup, Carousel} from "react-bootstrap";
import CarouselComponent from "./components/carousel";
import "bootstrap/dist/css/bootstrap.css";
import duckImage from "./duckImage.jpeg";
import AppFooter from "./components/appFooter";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./index.css"
import {COMPANY_SLOGAN} from "./Constants"
import TextImageComponent from "./components/textImageComponent";
import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer
} from "@react-firebase/auth";
import * as firebase from "firebase/app";
import { config } from "./test-credentials";

const IDontCareAboutFirebaseAuth = () => {
    return <div>This part won't react to firebase auth changes</div>;
};

// https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/listen-to-auth

class Main extends Component {
    state = {

    };


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
            <div className="bg-color-theme-main">
                <NavigationBar/>
                    <Route path="/" exact>
                        <React.Fragment>
                            <TextComponent leftText1={"We "} leftSpanText1={"upcycle"} leftText2={" unwanted biowaste and turn it into sustainable fish feed."}
                            middleText1={"We grow aquatic worms and macro algae in our vertical "} middleSpanText={"hydroponic"} middleText2={" system."}
                            rightText1={"Aquacultures currently depend on feed that contains fish meal, which contributes to "} rightSpanText={"overfishing and depletion"} rightText2={" of the oceans."}/>
                            <CarouselComponent title1={"derer"} description1={"derere"} imgFile1={"https://picsum.photos/1000/400"}
                            title2={"asdfasdfasdfasdf"} description2={"asdfaskldfæalsdjkfælaksj"} imgFile2={"https://picsum.photos/1000/400"}
                            title3={"asædlfjaøsldjkføalkn"} description3={"aæslidjfælakjsdæflkja"} imgFile3={"https://picsum.photos/1000/400"}/>
                            <TextImageComponent title={"asdf"} text1={"asdf"} spanText={""} text2={""}/>

                            <div className="bg-color-theme-secondary2 py-5 ">
                                <CardGroup>
                                    <CardComponent></CardComponent>
                                    <CardComponent></CardComponent>
                                </CardGroup>
                            </div>
                        </React.Fragment>
                    </Route>
                    <Route path="/about">
                        <React.Fragment >
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

            </div>
            </Router>

        )

    }
}
export default Main;