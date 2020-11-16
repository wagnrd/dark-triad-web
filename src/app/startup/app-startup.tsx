import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '~app/app';

const rootPath = '/';

async function renderApp(): Promise<void> {
    console.log('[App] Rendering app...');

    return new Promise((resolve) => {
        ReactDOM.render(
            <Router basename={`${rootPath}`}>
                <App />
            </Router>,
            document.getElementById('root'),
            resolve
        );
    });
}

async function start(): Promise<void> {
    try {
        await renderApp();
    } catch (e) {
        console.error(e);
    }
}

start();

export { start };
