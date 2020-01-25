import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserConsumer } from './contexts/user-context';

const AuthorizedRoute = ({ isLoggedIn, allowedRoles = [], roles, ...otherProps }) => {
  const roleIsAllowed = !allowedRoles.length || roles.map(role => role.toLowerCase()).some(role => allowedRoles.includes(role));

  if (!isLoggedIn || !roleIsAllowed) {
    return <Redirect to="/login" />;
  }

  return <Route {...otherProps} />;
}

const AuthorizedRouteWithContext = (props) => {
  return (
    <UserConsumer>
      {
        ({ isLoggedIn, roles }) => (
          <AuthorizedRoute 
            {...props}
            roles={roles}
            isLoggedIn={isLoggedIn} 
          />
        )
      }
    </UserConsumer>
  )
}

export {
  AuthorizedRoute
}

export default AuthorizedRouteWithContext;
