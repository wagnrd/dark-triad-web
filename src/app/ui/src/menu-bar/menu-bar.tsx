import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import { MenuTile } from './menu-tile';
import {MenuAccountTile} from "~app/ui/src/menu-bar/menu-account-tile";

interface MenuBarProps {
    title: string;
}

function MenuBar({ title }: MenuBarProps): ReactElement {
    const { push } = useHistory();

    const goToHome = () => push('/');
    const goToDownloads = () => push('downloads');
    const goToNews = () => push('news');

    return (
        <div className="menu-bar">
            <div className="menu-bar-title">{title}</div>
            <div className="menu-bar-tiles">
                <MenuTile caption="Home" onClick={goToHome} />
                <MenuTile caption="News" onClick={goToNews} />
                <MenuTile caption="Downloads" onClick={goToDownloads} />
            </div>
            <MenuAccountTile />
        </div>
    );
}

export { MenuBar };
