import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { authenticate, authenticationFailure, logout } from '../redux/modules/Auth/actions';
import MatchAuthenticated from '../components/MatchAuthenticated';
import RedirectUnauthenticated from '../components/RedirectUnauthenticated';
import Header from '../components/Header'
// import SurveyHeader from '../components/SurveyHeader'
import Login from '../views/Login'
import Users from '../views/Users'
import ViewCerts from '../views/Users/ViewCerts'
import Results from '../views/Survey/Results'
import Comments from '../views/Survey/Comments'
import AdminHome from '../views/AdminHome'
import Certification from '../views/Certification'
import Visitors from '../views/Visitors'
import VisitorStatus from '../views/Visitors/VisitorStatus'
import Events from '../views/Events'
import GolfCerts from '../views/Visitors/GolfCerts'
import BeachCerts from '../views/Visitors/BeachCerts'
import EventStatus from '../views/Events/EventStatus'
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
          { currentUser?.role === 'admin' ?
            <MatchAuthenticated path='/' exact component={ AdminHome } {...authProps} />
            :
            <MatchAuthenticated path='/' exact component={ Certification } {...authProps} />

          }
          <MatchAuthenticated path='/certification' exact component={ Certification } {...authProps} />
          <MatchAuthenticated path='/admin_home' exact component={ AdminHome } {...authProps} />
          <MatchAuthenticated path='/survey' exact component={ Survey } {...authProps} />
          <MatchAuthenticated path='/user_management' exact component={ Users } {...authProps} />
          <MatchAuthenticated path='/teammates' exact component={ ViewCerts } {...authProps} />
          <MatchAuthenticated path='/survey/results' exact component={ Results } {...authProps} />
          <MatchAuthenticated path='/survey/results/comments' exact component={ Comments } {...authProps} />
          <RedirectUnauthenticated path='/login' exact component={ Login } { ...authProps } />
          <MatchAuthenticated path='/admin/golf' exact component={ GolfCerts } {...authProps} />
          <MatchAuthenticated path='/admin/beach' exact component={ BeachCerts } {...authProps} />
          <Route path='/visitors' exact component={ Visitors } />
          <Route path='/visitor' exact component={ Visitors } />
          <Route path='/visitor_status' exact component={ VisitorStatus } />
          <Route path='/golf' exact component={ Events } />
          <Route path='/beach' exact component={ Events } />
          <Route path='/event_status' exact component={ EventStatus } />
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
