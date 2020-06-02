import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import AddNewTestPage from "./pages/AddNewTestPage";
import ListOfTestsPage from "./pages/ListOfTestsPage";
import MainPage from "./pages/MainPage";
import Auth from "./pages/Auth";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/" component={MainPage}/>
                <Route path="/list" component={ListOfTestsPage} />
                <Route path="/add-test" component={AddNewTestPage}/>
                <Redirect to='/auth'/>
            </Switch>
        </Router>
    );
}

export default App;
