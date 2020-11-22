import classNames from 'classnames';
import React, { ReactElement } from 'react';

interface SectionSubTitleProps {
    first?: boolean;
    children: string;
}

function SectionSubTitle({ first, children }: SectionSubTitleProps): ReactElement {
    const className = classNames(first, 'section-sub-title');

    return <div className={className}>{children}</div>;
}

export { SectionSubTitle };
