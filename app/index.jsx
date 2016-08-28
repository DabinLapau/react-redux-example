require('./sass/main.scss');

import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App.jsx';
import number from './reducers/index.js';

let store = createStore(number);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
