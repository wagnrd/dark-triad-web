import React, { ReactElement } from 'react';
import { Route, Switch, useHistory } from 'react-router';

import { HomeScreen, NewsScreen, DownloadsScreen, ImprintScreen, PrivacyPolicyScreen } from './screens';
import { MenuBar, Footer, MenuTile, TextLink } from './ui';

function App(): ReactElement {
    const { push } = useHistory();

    const goToHome = () => push('/');
    const goToDownloads = () => push('downloads');
    const goToNews = () => push('news');

    const goToImprint = () => push('imprint');
    const goToPrivacyPolicy = () => push('privacy-policy');

    return (
        <>
            <MenuBar title="Dark Triad">
                <MenuTile caption="Home" onClick={goToHome} />
                <MenuTile caption="News" onClick={goToNews} />
                <MenuTile caption="Downloads" onClick={goToDownloads} />
            </MenuBar>

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
                    <Route exact path="/privacy-policy">
                        <PrivacyPolicyScreen />
                    </Route>
                </Switch>
            </div>

            <Footer copyright="© 2021 - Denis Wagner">
                <TextLink inv onClick={goToImprint}>
                    Imprint
                </TextLink>
                <TextLink inv onClick={goToPrivacyPolicy}>
                    Privacy Policy
                </TextLink>
            </Footer>
        </>
    );
}

export { App };
