import React from 'react'
import { Router, Route} from "react-router-dom";
import LandingPage from '../Pages/LandingPage/LandingPage';
import SignupPage from '../Pages/SignupPage/SignupPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Charecter from '../Pages/CharecterPage/Charecter'
import history from './history'
import  Episode from '../Pages/EpisodePage/Episode'

function app() {
    return (
        <div>
           <Router history={history}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/landing" component={LoginPage} />
            <Route exact path="/charecter" component={Charecter} />
            <Route  exact path="/episode" component={Episode} />
           </Router>
        </div>
    )
}

export default app
