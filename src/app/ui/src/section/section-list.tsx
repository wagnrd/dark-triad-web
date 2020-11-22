import React from 'react';
import { ReactElement } from 'react';

interface SectionListProps {
    children?: ReactElement[];
}

function renderSection(section: ReactElement, sectionNr: number): ReactElement {
    let colorClass: string;

    if (sectionNr % 2 === 0) {
        colorClass = 'section-color-1';
    } else {
        colorClass = 'section-color-2';
    }

    return (
        <div className={colorClass} key={`section-${sectionNr}`}>
            {section}
        </div>
    );
}

function SectionList({ children }: SectionListProps): ReactElement {
    return <>{children.map(renderSection)}</>;
}

export { SectionList };
