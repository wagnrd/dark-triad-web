import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';

function App(): ReactElement {
    return (
        <Switch>
            <Route path="/">
                <div>Hello world</div>
            </Route>
        </Switch>
    );
}

export { App };
