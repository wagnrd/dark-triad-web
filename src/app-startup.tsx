import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {App} from '~app/app';
import {Auth0Provider} from "@auth0/auth0-react";

const rootPath = '/';

async function renderApp(): Promise<void> {
    return new Promise((resolve) => {
        ReactDOM.render(
            <Auth0Provider
                domain="dark-triad.eu.auth0.com"
                clientId="URqbLDAE6YhJg1zJ3zDGOMidOxe0pU1q"
                redirectUri={window.location.origin}
            >
                <BrowserRouter basename={rootPath}>
                    <App/>
                </BrowserRouter>
            </Auth0Provider>
            ,
            document.getElementById('root'),
            resolve
        );
    });
}

async function start(): Promise<void> {
    try {
        await renderApp();
        console.log('[App] App rendered');
    } catch (e) {
        console.error('[App] Error while rendering app:', e);
    }
}

start();

export {start};
