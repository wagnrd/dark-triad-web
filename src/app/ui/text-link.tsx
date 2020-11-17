import React, { ReactElement, ReactNode } from 'react';
import { ClickHandler } from '~utils/function';

interface LinkProps {
    onClick: ClickHandler;
    children: ReactNode;
}

function TextLink({ onClick, children }: LinkProps): ReactElement {
    return (
        <span className="text-link" onClick={onClick}>
            {children}
        </span>
    );
}

export { TextLink };
