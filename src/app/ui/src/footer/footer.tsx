import React, { ReactElement } from 'react';

interface FooterProps {
    children: ReactElement[];
    copyright: string;
}

function Footer({ children: footerEntries, copyright }: FooterProps): ReactElement {
    const formattedFooterEntries = footerEntries.map((footerEntry, i) => (
        <div className="footer-entry" key={i}>
            {footerEntry}
        </div>
    ));

    return (
        <div className="footer">
            {formattedFooterEntries}
            <div className="footer-entry">{copyright}</div>
        </div>
    );
}

export { Footer };
