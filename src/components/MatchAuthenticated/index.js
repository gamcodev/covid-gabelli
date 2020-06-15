// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const MatchAuthenticated = (props) => {
  const Component = props.component
  return(
    <Route
      currentUser={props.currentUser}
      path={props.path}
      render={() => {
        if (props.isAuthenticated) { return <Component currentUser={props.currentUser} />; }

        if (!props.isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
        return null;
      }}
    />

  )
}

export default MatchAuthenticated;

// if (props.isAuthenticating) { return null; }
