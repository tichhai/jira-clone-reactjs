import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/configStore'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import NavigateSetter from './utils/History/NavigateSetter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <NavigateSetter/>
            <App />
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
