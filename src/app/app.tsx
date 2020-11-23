import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';

import { HomeScreen, NewsScreen, DownloadsScreen, ImprintScreen } from './screens';
import { MenuBar, Footer } from './ui';

function App(): ReactElement {
    return (
        <>
            <MenuBar title="Dark Triad" />

            <div className="content">
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
                    <Route exact path="/imprint">
                        <ImprintScreen />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </>
    );
}

export { App };
