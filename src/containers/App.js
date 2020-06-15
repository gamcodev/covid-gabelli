import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';
import MatchAuthenticated from '../components/MatchAuthenticated';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated';
import Header from '../components/Header'
import Login from '../views/Login'
import Certification from '../views/Certification'
import ThankYou from '../views/ThankYou'
import './App.css';

type Props = {
  isAuthenticating: boolean,
  isAuthenticated: boolean,
  currentUser: object,
  logout: () => void,
  authenticate: () => void,
  authenticationFailure: () => void,
}

class App extends Component {
  props: Props

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Fetching a new token!');
      this.props.authenticate();
    } else {
      this.props.authenticationFailure();
    }
  }

  render() {
    const { currentUser, isAuthenticated, isAuthenticating, logout, errors } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser, errors };
    console.log(authProps)
    return (
      <Router>
        <Route path='/' render={ () => <Header isAuthenticated={isAuthenticated} logout={logout}/> }/>
        <Switch>
          <MatchAuthenticated path='/' exact component={ Certification } {...authProps} />
          <RedirectUnauthenticated path='/login' exact component={ Login } { ...authProps } />
          <Route path='/thankyou' exact component={ThankYou}/>
        </Switch>
      </Router>
    )

  }
}
// <MatchAuthenticated path='/' exact component={ Certification } {...authProps} />

export default connect(
  state => ({
    currentUser: state.auth.currentUser,
    isAuthenticating: state.auth.isAuthenticating,
    isAuthenticated: state.auth.isAuthenticated,
  }), { logout, authenticate, authenticationFailure }
)(App);
