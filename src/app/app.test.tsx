import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { App } from './app';

describe('<App />', () => {
    it('should render hello world', () => {
        const { findByText } = render(<App />);

        const element = findByText('Hello world');

        expect(element).toBeInTheDocument();
    });
});
