import React, { ReactElement, ReactNode } from 'react';

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
    return (
        <div className="section">
            <div className="section-content">
                {renderCaption(caption)}
                <div>{children}</div>
            </div>
        </div>
    );
}

export { Section };
