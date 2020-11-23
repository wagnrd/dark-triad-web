import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import { TextLink } from '~app/ui/text-link';

function Footer(): ReactElement {
    const { push } = useHistory();
    const goToImpressum = () => push('imprint');

    return (
        <div className="footer">
            <div className="footer-entry">
                <TextLink inv onClick={goToImpressum}>
                    Imprint
                </TextLink>
            </div>
            <div className="footer-entry">© 2020 - Denis Wagner</div>
        </div>
    );
}

export { Footer };
