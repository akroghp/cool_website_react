import React, {Component} from 'react';
import NavigationBar from "./components/navigationBar";
import CardComponent from "./components/cardComponent";
import {CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
import CarouselComponent from "./components/carousel";
import "bootstrap/dist/css/bootstrap.css";
import AppFooter from "./components/appFooter";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./css/index.css"
import HeroSection from "./components/HeroSection";
import HalfPage from "./components/halfPage";
import BannerComponent from "./components/bannerComponent";
import './css/HeroSection.css'



class Main extends Component {
    render() {
        return(
            <Router>
            <div className="">
                <NavigationBar/>
                <Route path="/" exact>
                    <Container fluid className={"nopadding"}>
                        <Row className={"nopadding"}>
                            <Col className="nopadding">
                                <div className="m-5">
                                    <HalfPage/>
                                </div>
                            </Col>
                            <Col className="nopadding">
                                <div className="mt-4 mr-5 mb-5">
                                    <img className="card-img"

                                         src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Fimages%2Fstock_photos%2FGlobe.jpg?alt=media&token=c100901a-954e-4272-aed1-4654f987b4bc"

                                    />

                                </div>
                            </Col>
                        </Row>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.819 11.51c-1.16-1.632-3.001-3.002-5.014-3.826-1.548 1.815-2.639 5.324-.159 8.423 2.178-1.091 4.091-2.908 5.173-4.597zm-6.105 5.001c-2.565-3.434-1.455-7.185.093-9.183-.896-.275-1.356-.341-1.779-.402-1.868-2.159-4.438-1.964-5.047-1.944.157.295.445.754.633 2.241-2.881.806-3.873 1.766-5.98 3.573-.393-.43-1.378-1.54-3.024-1.968.627 1.763.688 3.763.079 5.37 1.727-.379 2.817-1.84 2.974-2.014 2.201 2.282 3.161 3.4 5.952 4.415.051.995-.503 2.126-.634 2.374.685.022 3.213.204 5.072-1.975.513-.1.931-.203 1.661-.487zm7.286-5.028c-2.387 4.033-6.093 5.927-8.417 6.428-1.233 1.371-3.017 2.066-5.306 2.066-.715 0-1.234-.06-2.101-.141.632-.594 1.172-1.573 1.362-2.573-2.249-.915-3.692-2.408-4.863-3.629-2.031 1.953-4.087 1.655-4.675 1.655.361-.627 2.199-3.713 0-7.592.552.009 2.661-.159 4.702 1.726 1.207-1.04 2.571-2.204 4.798-2.917-.229-1.005-.631-1.692-1.325-2.387.72-.067 1.433-.119 2.13-.119 1.948 0 3.768.404 5.228 1.99 4.479.719 7.218 3.587 8.467 5.493zm-3.032-.505c0 .552-.448 1-1 1-.551 0-1-.448-1-1 0-.551.449-1 1-1 .552 0 1 .449 1 1z"/></svg>

                    </Container>
                    <BannerComponent/>
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