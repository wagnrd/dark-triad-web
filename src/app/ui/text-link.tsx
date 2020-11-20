import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';
import { ClickHandler } from '~utils/function';

interface LinkProps {
    onClick?: ClickHandler;
    url?: string;
    small?: boolean;
    children: ReactNode;
}

function TextLink({ onClick, url, small, children }: LinkProps): ReactElement {
    let className = 'text-link';

    if (small) {
        className = classNames('text-small', className);
    }

    return (
        <a href={url} className={className} onClick={onClick}>
            {children}
        </a>
    );
}

export { TextLink };
