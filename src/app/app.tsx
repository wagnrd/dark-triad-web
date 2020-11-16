import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';
import { MenuBar } from '~ui/menu-bar';
import { HomeScreen, NewsScreen, DownloadsScreen } from './screens';

function App(): ReactElement {
    return (
        <>
            <MenuBar title="Dark Triad" />

            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <Route exact path="/news">
                    <NewsScreen />
                </Route>
                <Route exact path="/downloads">
                    <DownloadsScreen />
                </Route>
            </Switch>
        </>
    );
}

export { App };
