import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from "./store";

import './index.css';
import {Router} from "react-router";
import {history} from "./helpers/history";

const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
