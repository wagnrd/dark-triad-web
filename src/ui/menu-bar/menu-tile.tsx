import React, { ReactElement } from 'react';

import { ClickHandler } from '~utils/function';

interface MenuTileProps {
    caption: string;
    callToAction: ClickHandler;
}

function MenuTile({ caption, callToAction }: MenuTileProps): ReactElement {
    return (
        <div className="menu-tile" onClick={callToAction}>
            {caption}
        </div>
    );
}

export { MenuTile };
