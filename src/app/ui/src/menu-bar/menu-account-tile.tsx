import React, { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuAccountTile(): ReactElement {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            {isAuthenticated ? (
                <div className="menu-tile-animation menu-account-tile" onClick={() => logout()}>
                    <div>
                        <div>Logged in as:</div>
                        <div className="menu-account-tile-login-name">{user.email}</div>
                    </div>
                    <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                </div>
            ) : (
                <div className="menu-tile-animation menu-account-tile" onClick={loginWithRedirect}>
                    Sign in / Register
                    <FontAwesomeIcon icon={faSignInAlt} size="lg" />
                </div>
            )}
        </>
    );
}

export { MenuAccountTile };
