import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import ListOfTestsPage from "./pages/ListOfTestsPage";
import AddNewTestPage from "./pages/AddNewTestPage";
import Results from "./pages/Results";
import { history } from "./helpers/history";
import { isAdmin } from "./helpers/helpers";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/results" component={Results} />
                { isAdmin() && (
                        <>
                            <Route path="/list" component={ListOfTestsPage} />
                            <Route path="/add-test" component={AddNewTestPage}  />
                        </>
                )}
                <Route exact path="/auth" component={Auth} />
                <Redirect path="*" to='/auth'/>
            </Switch>
    );
}

export default App;
