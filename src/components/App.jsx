import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react'
import MediaQuery from 'react-responsive'

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Fullscreen from './Fullscreen'
import Mobilescreen from './Mobilescreen';
import Footer from "./Footer";



const App = () => {


    return (
        <>
 master
        <Switch>
        <Route path='/form' component={() => { 
     window.location.href = 'http://blic-will-creation-webapp.s3-website-us-east-1.amazonaws.com/'; 
     return null;
}}/>
        <MediaQuery minWidth={1280}>
            <Fullscreen/>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
            <Mobilescreen/>
        </MediaQuery>
        
        </Switch>
            <Footer />

            <Switch>
                <Route path='/form' component={() => {
                    window.location.href = 'http://blic-will-creation-webapp.s3-website-us-east-1.amazonaws.com/';
                    return null;
                }} />
                <MediaQuery maxWidth={2000}>
                    <Fullscreen />
                </MediaQuery>
                <MediaQuery maxWidth={1000}>
                    <Mobilescreen />
                </MediaQuery>
            </Switch>
 master
        </>
    )
}

export default App;
