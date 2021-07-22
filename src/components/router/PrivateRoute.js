import React from 'react';
import { Redirect, Route } from 'react-router';
import { LOGIN } from '../../config/router/paths';
// import useAuthContext from 'hooks/useAuthContext';

export const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = false;

    return (
        <Route
            {...rest}
            render={props => (isAuthenticated ? <Component {...props}/> : <Redirect to={LOGIN} />)}
        />
    )
}