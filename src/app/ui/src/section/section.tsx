import classNames from 'classnames';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

let next = 0;

function getColorClass(): string {
    const current = next++;

    if (current % 2 === 0) {
        return 'section-color-1';
    } else {
        return 'section-color-2';
    }
}

function renderCaption(caption: string): ReactElement {
    if (caption) {
        return <div className="section-title">{caption}</div>;
    }
}

interface SectionProps {
    caption?: string;
    children?: ReactNode;
}

function Section({ caption, children }: SectionProps): ReactElement {
    const [colorClass] = useState(getColorClass());

    // reset alternating coloring
    useEffect(() => () => {
        next = 0;
    });

    const className = classNames('section', colorClass);

    return (
        <>
            <div className={className}>
                <div className="section-content">
                    {renderCaption(caption)}
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

export { Section };
