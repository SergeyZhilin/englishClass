import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {isAdmin} from "./helpers/helpers";

import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import ListOfTestsPage from "./pages/ListOfTestsPage";
import AddNewTestPage from "./pages/AddNewTestPage";
import Results from "./pages/Results";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import Page404 from "./pages/Page404/Page404";
import {history} from "./helpers/history";


function App() {
    const user = useSelector(state => state.users.user)

    if (!localStorage.getItem('user')) {
       history.push('/auth')
    }

    return (
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/results" component={Results}/>
            {isAdmin(user) && (
                <>
                    <Route path="/list" component={ListOfTestsPage}/>
                    <Route path="/add-test" component={AddNewTestPage}/>
                </>
            )}
            <Route path="/auth" component={Auth}/>
            <Route path="/page_404" component={Page404}/>
            <Redirect exact path="/" to='/auth'/>
            <Redirect to='/page_404'/>
        </Switch>
    );
}

export default App;
