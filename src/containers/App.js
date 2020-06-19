import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';
import MatchAuthenticated from '../components/MatchAuthenticated';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated';
import Header from '../components/Header'
import Login from '../views/Login'
import Users from '../views/Users'
import Certification from '../views/Certification'
import Survey from '../views/Survey'
import ThankYou from '../views/ThankYou'
import SurveyComplete from '../views/SurveyComplete'
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
      this.props.authenticate();
    } else {
      this.props.authenticationFailure();
    }
  }

  render() {
    const { currentUser, isAuthenticated, isAuthenticating, logout, errors } = this.props;
    const authProps = { isAuthenticated, isAuthenticating, currentUser, errors };

    return (
      <Router>
        <Route path='/' render={ () => <Header isAuthenticated={isAuthenticated} logout={logout} currentUser={currentUser} /> }/>
        <Switch>
          <MatchAuthenticated path='/' exact component={ Survey } {...authProps} />
          <MatchAuthenticated path='/certification' exact component={ Certification } {...authProps} />

          <MatchAuthenticated path='/teammates' exact component={ Users } {...authProps} />
          <RedirectUnauthenticated path='/login' exact component={ Login } { ...authProps } />
          <Route path='/thankyou' exact component={ ThankYou } />
          <Route path='/survey_complete' exact component={ SurveyComplete } />
        </Switch>
      </Router>
    )

  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { logout, authenticate, authenticationFailure })(App);
