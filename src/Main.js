import React, {Component} from 'react';
import NavigationBar from "./components/navigationBar";
import CardComponent from "./components/cardComponent";
import {Button, CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
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
                    {/*The front page*/}
                    <img alt="" className="img_background21"/>
                    <Container>
                        <Row className="fixed_height text-center">
                            <Col className="align-self-center col-sm-12 d-table">
                                <h2 className="font-weight-bold">Fish feed has never been this great.</h2>
                                <p>Modern farming technologies, turning waste into feed.</p>
                                <Button href="mailto:home@aqfeed.dk" className="btn-light rounded-pill">Contact us</Button>
                            </Col>
                        </Row>
                    </Container>

                    {/*Fish image background with textbox*/}
                    <Container fluid className="nopadding">
                        <Row className="fixed_height text-center bg-color-theme-dark-blue nopadding ">
                            <Col className=" d-flex img_fish_from_below">
                                <div className="my-auto mx-auto">
                                    <div className="square col-lg-12 p-3">
                                        <p className="color-theme-bright-orange font-weight-bold text-left">Mission</p>
                                        <div className="align-items-center">
                                            <h4 className="font-weight-bold text-body">Improve fish welfare in aquacultures</h4>
                                            <p className="text-justify px-3">By making fish farming more environmentally friendly we can reduce the pressure on
                                                the ocean fish stocks and improve ocean health and continue to be able to eat the fish
                                                we already eat with a good consciousness.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/*Page about solution*/}
                    <Container fluid className="nopadding">
                        <img alt="" className="img_background22"/>
                        <Row className="fixed_height text-center nopadding">
                            <Col className=" d-flex col-12 col-sm-6">
                                <div className="my-auto mx-auto">
                                    <div className="square-white pb-5 px-3">
                                        <p className="color-theme-dark-blue font-weight-bold text-left">Solution</p>
                                        <div className="align-items-center">
                                            <h3 className="text-left">Growing insects and algae in closed loop systems</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className=" d-flex col-12 col-sm-6">
                                <div className="my-auto mx-auto">
                                    <div className="square-white p-3">
                                        <div className="align-items-center">
                                            <p className="text-justify">We upcycle fish manure from aquacultures
                                                and use it as a growth bed for algae and aquatic insects in a fully
                                                circulated system. With our processing methods these raw materials can
                                                replace key ingredients in traditional feed.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/*
                    <BannerComponent/>
                    */}
                    {/*Traction Page - Dark blue theme*/}
                    <Container fluid className="nopadding bg-color-theme-dark-blue">
                        <Row className="fixed_height text-center  text-white p-5 ">
                            <Col className=" d-flex col-12 col-sm-6 img_in_page ">
                                <div className="my-auto mx-auto">
                                    <div className="px-5">
                                    </div>
                                </div>
                            </Col>
                            <Col className=" d-flex col-12 col-sm-6">
                                <div className="my-auto mx-auto">
                                    <div className="square-white p-3">
                                        <div className="align-items-center ">
                                            <p className="color-theme-bright-orange font-weight-bold text-right">
                                                National Startup Competition Winner</p>
                                            <p className="text-justify">'The AQfeed startup won the DKK 100,000 prize at
                                                Venture Cup’s annual National Startup Competition, which was held on 24
                                                June. In addition to the prize money, AQfeed also won a place in the
                                                University Startup World Cup, where they will be competing against
                                                international startups in China in November.'</p>
                                            <Button href="https://www.bioengineering.dtu.dk/english/news/Nyhed?id=%7B9166F25C-4B31-4E6B-9D5A-5CC699B68DF6%7D"
                                                    className="btn-info rounded-pill float-right">Read more</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/*Traction Page - Dark blue theme*/}
                    <Container fluid className="nopadding ">
                        <Row className="fixed_height text-center  p-5 ">

                            <Col className=" d-flex col-12 col-sm-6">
                                <div className="my-auto mx-auto">
                                    <div className="square-white p-3">
                                        <div className="align-items-center ">
                                            <img src={'https://mikrolegat.ffe-ye.dk/media/793220/mikrolegat-uden-baggrund.png'} height={'75px'}/>
                                            <p className="text-justify">We are happy to announce that AQfeed has
                                                received the Mikrolegat Foundation for Entrepreneurship
                                                micro-scholarship worth 50,000 DKK! <br/>
                                                The scholarship money will be used to buy hardware and materials for
                                                the development of our new prototype,
                                                which will enable us to mature as a start-up!</p>
                                            <Button href="https://www.linkedin.com/feed/update/urn:li:activity:6864897890909753344"
                                                    className="btn-info rounded-pill float-right">Read more on LinkedIn!</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className=" d-flex col-12 col-sm-6 img_mikrolegat ">
                                <div className="my-auto mx-auto">
                                    <div className="px-5">
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/*Page split in two
                    <section>
                        <Container fluid className="nopadding">
                            <Row className="fixed_height text-center nopadding">
                                <Col className="col-sm-6 d-flex img_background2">
                                    <div className="my-auto mx-auto">
                                        <h2 className="font-weight-bold">Fish feed has never been this great.</h2>
                                        <p>Modern farming technologies, turning waste into feed.</p>
                                    </div>
                                </Col>
                                <Col className=" col-sm-6 bg-color-theme-dark-blue d-flex">
                                    <div className="my-auto mx-auto">
                                        <h2 className="font-weight-bold text-white">Fish feed has never been this great.</h2>
                                        <p className="text-white">Modern farming technologies, turning waste into feed.</p>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>
                    */}
                </Route>

                <Route path="/contact">
                    <img className="img_background2" alt/>
                    <Container fluid >
                        <Row className="fixed_height text-center">
                            <Col className="align-self-center col-sm-12 d-table">
                                <h2 className="font-weight-bold">Interested in hearing more?</h2>

                                <Button href="mailto:home@aqfeed.dk" className="btn-light rounded-pill">Contact us</Button>
                            </Col>
                        </Row>
                    </Container>
                </Route>

                <Route path="/join">
                    <img className="img_background23" alt/>
                    <Container fluid >
                        <Row className="fixed_height ">
                            <Col className="align-self-center col-12 p-5">
                                <h2 className="font-weight-bold">Are you <span className="color-theme-purple">student</span> and want to do a project?   </h2>
                                <h2 className="font-weight-bold">Or an <span className="color-theme-red">industry professional</span> who is looking for new adventures?<br/>
                                    </h2>
                                <h5> We are looking for passionate people,
                                    so no matter your background or experience get in touch!</h5>
                            </Col>
                            <div className="position-absolute text-center bottom-0 pb-5">
                                <Button href="mailto:join@aqfeed.dk" className="btn-lg btn-light rounded-pill">Join us</Button>
                            </div>

                        </Row>
                    </Container>
                </Route>

                <AppFooter/>

            </div>
            </Router>

        )

    }
}
export default Main;