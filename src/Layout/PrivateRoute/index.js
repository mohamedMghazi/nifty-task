import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import {AuthContext} from './AuthContext';

/**
 * PrivateRoute component. This component is used to protect the produced routes from unauthorized access.
 * If the user is not authenticated, the user will be redirected to the login page.
 *
 * @param {{children: JSX.Element}} props The props of the component.
 * @param children The child component to render.
 * @returns {React.JSX.Element|*} The rendered component.
 *
 * @example <PrivateRoute><Home /></PrivateRoute>
 */
const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="auth/login" replace />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
