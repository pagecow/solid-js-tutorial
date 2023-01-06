/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, hashIntegration } from "@solidjs/router";
import { GlobalContextProvider } from './GlobalContext/store';

import './index.css';
import App from './App';

render(() => (
    <Router source={hashIntegration()}>
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </Router> 
), 
document.getElementById('root') as HTMLElement);
