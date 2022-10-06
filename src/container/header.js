import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo5.svg';

export function HeaderContainer({ children }) 
{
    return (
        <Header>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="FuGenX" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
        </Header>
    );
}