import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import moment from 'moment'
import { FaArrowRight } from 'react-icons/fa'
import { createCert } from '../../redux/modules/Cert/actions'
import { logout } from '../../redux/modules/Auth/actions'
import CertForm from './CertForm'



const CertFormContainer = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 10% 80% 10%;
  @media (max-width: 680px)  {
    grid-template-columns: 2% 96% 2%;
  }
`

const CertFormFields = styled.div `
  background: #f7f7f7;
  clear: both;
  padding: 1rem 2rem;
`
const ReminderDiv = styled.div `
  text-align: center;
  margin-bottom: 2rem;
`
const SLink = styled.div `
  span {
    cursor: pointer;
    align-self: center;
  }

`
const ConditionalSurveyLink = styled.div `
  text-align: center;
  @media (min-width: 680px)  {
    visibility: hidden;
  }
  @media (max-width: 680px)  {
    visibility: visible;
  }

`

const Certification = (props) => {
  const dispatch = useDispatch()
  const cert = useSelector(state => state.cert.cert || [])

  const onSubmit = ( responses, userId ) => {
    dispatch(createCert(responses, userId))
    showResults(responses)
  }

  const showResults = (r) => {
    r.cough === 'true' || r.fever === 'true' || r.positive === 'true' || r.quarantined === 'true' || r.travel === 'true' || r.gathering=== 'true' || r.public_transit === 'true' ?
    props.history.push({
      pathname: '/thankyou',
      result: 'no',
      workdate: moment().format("MMM Do, YYYY")
    })
    :
    props.history.push({
      pathname: '/thankyou',
      result: 'yes',
      workdate: moment().format("MMM Do, YYYY")
    })
    dispatch(logout())
  }

  return (
    <CertFormContainer>
      <div></div>
      <CertFormFields>
        <ConditionalSurveyLink>
          { window.location.pathname === '/' && props.currentUser.role !== 'admin' && props.currentUser.surveys === false ?
            <SLink>
              <NavLink to='/survey'><span>Take Survey</span><FaArrowRight style={{paddingLeft: '10px', paddingTop: '10px'}} /></NavLink>
            </SLink>
            :
            <div></div>
          }
        </ConditionalSurveyLink>
        <ReminderDiv><h3><strong>REMINDER: </strong>The questionnaire MUST be completed prior to leaving your home every day you plan on coming to the office.</h3></ReminderDiv>
        <CertForm onSubmit={onSubmit} currentUser={props.currentUser}/>
      </CertFormFields>
      <div></div>

    </CertFormContainer>
  )
}

export default withRouter(Certification)

// <ConditionalSurveyLink>
//   { window.location.pathname === '/' && props.isAuthenticated && props.currentUser.role !== 'admin' && props.currentUser.surveys === false ?
//     <SLink>
//       <NavLink to='/survey'><span>Take Survey</span></NavLink>
//     </SLink>
//     : window.location.pathname === '/survey' && props.isAuthenticated && props.currentUser.role !== 'admin' ?
//     <SLink>
//       <NavLink to='/'><span>Attestation</span></NavLink>
//     </SLink>
//     :
//     <div></div>
//   }
// </ConditionalSurveyLink>
