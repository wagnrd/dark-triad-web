import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

function renderApp(): RenderResult {
    return render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

describe('<App />', () => {
    it('should render hello world', () => {
        const { getByText } = renderApp();

        const element = getByText('Hello world');

        expect(element).toBeInTheDocument();
    });
});
