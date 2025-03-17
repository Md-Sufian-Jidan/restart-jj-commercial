import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }
    <Navigate state={location?.state} to={'/'} ></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default PrivateRoute;