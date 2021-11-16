import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';
import { ClickHandler } from '~utils/function';

interface TextLinkProps {
    onClick?: ClickHandler;
    url?: string;
    small?: boolean;
    inv?: boolean;
    children: ReactNode;
}

function TextLink({ onClick, inv, url, small, children }: TextLinkProps): ReactElement {
    let className = 'text-link';

    if (small) {
        className = classNames(className, 'text-small');
    }

    className = classNames(className, inv ? 'text-color-text-inv' : 'text-color-accent');

    return (
        <a href={url} className={className} onClick={onClick}>
            {children}
        </a>
    );
}

export { TextLink };
