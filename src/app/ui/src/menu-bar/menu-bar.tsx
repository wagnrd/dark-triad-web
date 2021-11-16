import React, { ReactElement } from 'react';
import { MenuAccountTile } from '~app/ui/src/menu-bar/menu-account-tile';

interface MenuBarProps {
    children: ReactElement[];
    title: string;
}

function MenuBar({ children: menuTiles, title }: MenuBarProps): ReactElement {
    return (
        <div className="menu-bar">
            <div className="menu-bar-title">{title}</div>
            <div className="menu-bar-tiles">{menuTiles}</div>
            <MenuAccountTile />
        </div>
    );
}

export { MenuBar };
