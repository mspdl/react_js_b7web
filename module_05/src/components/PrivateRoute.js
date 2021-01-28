import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

export default ({ children, ...rest }) => {

    const token = useSelector(state => state.user.token);
    const history = useHistory();

    if (!token || token === '') {
        history.push('/login');
        return null;
    }

    return (
        <Route {...rest}>
            {children}
        </Route>
    );
}