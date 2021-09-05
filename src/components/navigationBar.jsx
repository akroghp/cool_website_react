import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NAV_NAME_1, NAV_NAME_2, NAV_NAME_3, NAV_NAME_4, NAV_NAME_CONTACT, NAV_NAME_JOIN} from "../Constants"
import {LinkContainer} from "react-router-bootstrap"

import "../css/index.css"
import "../css/navbar.css"

/*
const firebaseConfig = {
    apiKey: "AIzaSyB_bYolD1SWQdh02S0XmTFnvIdiB7jREmk",
    authDomain: "afeed-15838.firebaseapp.com",
    projectId: "afeed-15838",
    storageBucket: "afeed-15838.appspot.com",
    messagingSenderId: "130740375331",
    appId: "1:130740375331:web:aba1693c1ffc9f77a60696",
    measurementId: "G-0ECW46Y4JR"
};


firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();
const storageRef = storage.ref()

storageRef.child('Public/LogoAnton2.png').getDownloadURL()
    .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url)
        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element
        const img = document.getElementById('AQfeedLogo1');
        img.setAttribute('src', url);
    })
    .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/object-not-found':
                // File doesn't exist
                console.log(error)
                break;
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                console.log(error)
                break;
            case 'storage/canceled':
                // User canceled the upload
                console.log(error)
                break;
            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                console.log(error)
                break;
        }
    });


 */
const NavigationBar = () => {
    return(
        <div >
            <Navbar expand="sm" className={"position-absolute w-100 fixed_navbar_height"}>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home" className="">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Flogos%2Flogo_green_no_motto.png?alt=media&token=739fa523-a37a-4b72-8455-daaeff7bb7c6"
                            className="d-inline-block align-top img_responsive"
                        />
                    </Navbar.Brand>
                    {/**
                     <Navbar.Brand className="d-inline-block align-top logo_design pl-4">
                         AQ<span className="color-theme-purple">feed</span>
                     </Navbar.Brand>
                     **/}
                </LinkContainer>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">

                {/*

                    <Nav className="mr-auto">
                        <LinkContainer to="/about">
                            <Nav.Link>{"NAV_NAME_1"}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/technology">
                            <Nav.Link>{"NAV_NAME_2"}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/news">
                            <Nav.Link>{"NAV_NAME_3"}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/team">
                            <Nav.Link>{"asd"}</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title={"asdf"} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">{"NAV_NAME_DROP_1_1"}</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    */}
                    <Nav className="ml-auto p-2">
                        <LinkContainer to="/contact">
                            <Nav.Link href="#deets">{NAV_NAME_CONTACT}</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/join">
                            <Nav.Link eventKey={2} href="#memes">{NAV_NAME_JOIN}</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </div>

    );
}

export default NavigationBar;