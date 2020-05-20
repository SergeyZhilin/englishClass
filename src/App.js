import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import AddNewTestPage from "./pages/AddNewTestPage";
import ListOfTestsPage from "./pages/ListOfTestsPage";
import MainPage from "./pages/MainPage";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/list" component={ListOfTestsPage} />
                <Route path="/add-test" component={AddNewTestPage}/>
                <Redirect from='*' to='/'/>
            </Switch>
        </Router>
    );
}

export default App;
