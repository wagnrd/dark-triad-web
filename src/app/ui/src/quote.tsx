import React, { ReactElement } from 'react';

interface QuoteProps {
    children?: string;
}

function Quote({ children }: QuoteProps): ReactElement {
    return <>&quot;{children}&quot;</>;
}
export { Quote };
