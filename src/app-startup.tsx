import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~app/app';

const rootPath = '/';

async function renderApp(): Promise<void> {
    return new Promise((resolve) => {
        ReactDOM.render(
            <BrowserRouter basename={rootPath}>
                <App />
            </BrowserRouter>,
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

export { start };
