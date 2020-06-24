import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoaderDiv = styled.div `
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`
export const Waiting = () => {
  return (
    <LoaderDiv>
      <Loader
        type="ThreeDots"
        color="#708090"
        height={100}
        width={100}
      />
    </LoaderDiv>
  )
}

const MatchAuthenticated = (props) => {
  const Component = props.component

  return(
    <Route
      currentUser={props.currentUser}
      path={props.path}
      render={() => {
        if (props.isAuthenticating) {
          return <Waiting />
        }
        if (props.isAuthenticated) {
          return <Component currentUser={props.currentUser} />
        }
        if (!props.isAuthenticated) {
          return <Redirect to={{ pathname: '/login' }} />
        }
        return null;
      }}
    />

  )
}

export default withRouter(MatchAuthenticated)

// if (props.isAuthenticating) { return null; }
