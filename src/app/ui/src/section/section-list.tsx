import React from 'react';
import { ReactElement } from 'react';

interface SectionListProps {
    children?: ReactElement[];
}

function renderSection(section: ReactElement, sectionNr: number): ReactElement {
    if (sectionNr % 2 === 0) {
        return <div className="section-color-1">{section}</div>;
    } else {
        return <div className="section-color-2">{section}</div>;
    }
}

function SectionList({ children }: SectionListProps): ReactElement {
    return <>{children.map(renderSection)}</>;
}

export { SectionList };
