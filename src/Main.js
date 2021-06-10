import React, {Component} from 'react';
import NavigationBar from "./components/navigationBar";
import CardComponent from "./components/cardComponent";
import {CardGroup, Carousel} from "react-bootstrap";
import CarouselComponent from "./components/carousel";
import "bootstrap/dist/css/bootstrap.css";
import AppFooter from "./components/appFooter";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./index.css"
import HeroSection from "./components/HeroSection";
import '../src/components/HeroSection.css'



class Main extends Component {
    render() {
        return(
            <Router>
            <div className="">
                <NavigationBar/>
                    <Route path="/" exact>
                        <HeroSection/>
                        <React.Fragment>{/**
                            <TextComponent leftText1={"We "} leftSpanText1={"upcycle"} leftText2={" unwanted biowaste and turn it into sustainable fish feed."}
                            middleText1={"We grow aquatic worms and macro algae in our vertical "} middleSpanText={"hydroponic"} middleText2={" system."}
                            rightText1={"Aquacultures currently depend on feed that contains fish meal, which contributes to "} rightSpanText={"overfishing and depletion"} rightText2={" of the oceans."}/>
                                **/}

                            <CarouselComponent title1={"derer"} description1={"derere"} imgFile1={"https://picsum.photos/1000/400"}
                            title2={"asdfasdfasdfasdf"} description2={"asdfaskldfæalsdjkfælaksj"} imgFile2={"https://picsum.photos/1000/400"}
                            title3={"asædlfjaøsldjkføalkn"} description3={"aæslidjfælakjsdæflkja"} imgFile3={"https://picsum.photos/1000/400"}/>
                            {/**
                            <TextImageComponent title={"asdf"} text1={"asdf"} spanText={""} text2={""}/>
                             **/}
                            <div className="py-5 ">
                                <CardGroup>
                                    <CardComponent/>
                                    <CardComponent/>
                                </CardGroup>
                            </div>
                        </React.Fragment>
                    </Route>
                    <Route path="/about">
                        <React.Fragment >
                            <CardGroup>
                                <CardComponent/>
                                <CardComponent/>
                            </CardGroup>
                        </React.Fragment>
                    </Route>
                    <Route path="/team">
                        <React.Fragment>
                            <CardGroup>
                                <CardComponent/>
                                <CardComponent/>
                                <CardComponent/>
                                <CardComponent/>
                                <CardComponent/>
                                <CardComponent/>
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