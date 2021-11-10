import React, { ReactElement } from 'react';

import { ClickHandler } from '~utils/function';

interface MenuTileProps {
    caption: string;
    onClick: ClickHandler;
}

function MenuTile({ caption, onClick }: MenuTileProps): ReactElement {
    return (
        <div className="menu-tile menu-tile-animation" onClick={onClick}>
            {caption}
        </div>
    );
}

export { MenuTile };
