import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~app/app';

const rootPath = '/';

async function renderApp(): Promise<void> {
    console.log('[App] Rendering app...');

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
        console.log('passed');
        await renderApp();
    } catch (e) {
        console.error(e);
    }
}

start();

export { start };
