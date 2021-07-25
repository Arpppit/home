import {Switch, Route, Redirect} from 'react-router-dom';
import React from 'react'
import MediaQuery from 'react-responsive'

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Fullscreen from './Fullscreen'
import Mobilescreen from './Mobilescreen';




const App = () => {
    

    return (
        <>
        <MediaQuery minWidth={1224}>
            <Fullscreen/>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
            <Mobilescreen/>
        </MediaQuery>
        </>
    )
}

export default App;
