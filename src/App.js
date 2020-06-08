import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import ListOfTestsPage from "./pages/ListOfTestsPage";
import AddNewTestPage from "./pages/AddNewTestPage";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/list" component={ListOfTestsPage} />
                <Route path="/add-test" component={AddNewTestPage} />
                <Route path="/auth" component={Auth} />
                <Redirect path="*" to='/auth'/>
            </Switch>
        </Router>
    );
}

export default App;
