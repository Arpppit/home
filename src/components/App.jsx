import {Switch, Route, Redirect} from 'react-router-dom';
import React from 'react'
import Nav from './Nav';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home'
import Service from './Service'
import Faq from './Faq'
import Info from './Info'
import Contact from './Contact'
import TermsConditions  from './TermsConditions';
import Pointstoremember from './Pointstoremember';
import Disclaimer from './Disclaimer';
const App = () => {
    return (
        <>
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/faq' component = {Faq} />
            <Route exact path = '/info' component = {Info} />
            <Route exact path = '/contact' component = {Contact} />
            <Route exact path = '/service' component = {Service}/>
            <Route exact path = '/termsconditions' component = {TermsConditions}/>
            <Redirect to = '/'></Redirect>
        </Switch>
        <Service/>

        <Info /> 
        <Pointstoremember/>
        <Faq/> 
        <Contact/>
        <Disclaimer/>
        </>
    )
}

export default App;
