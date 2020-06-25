import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'
import { createSurvey } from '../../redux/modules/Survey/actions'
import { logout } from '../../redux/modules/Auth/actions'
import SurveyForm from './SurveyForm'

const SurveyFormContainer = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 10% 80% 10%;
`

const SurveyFormFields = styled.div `
  background: #f7f7f7;
  clear: both;
  padding: 5%;
`
const ALink = styled.div `
  span {
    cursor: pointer;
    align-self: center;
  }

`
const ConditionalCertLink = styled.div `
  text-align: center;
  @media (min-width: 680px)  {
    visibility: hidden;
  }
  @media (max-width: 680px)  {
    visibility: visible;
    padding-bottom: 1rem;
  }

`
const Survey = (props) => {
  const dispatch = useDispatch()

  const onSubmit = ( responses, userId ) => {
    dispatch(createSurvey(responses, userId))
    showResults(responses)
  }

  const showResults = () => {
    props.history.push({
      pathname: '/survey_complete',
      result: 'no'
    })
    dispatch(logout())
  }

  return (
    <SurveyFormContainer>
      <div></div>
      <SurveyFormFields>
        <ConditionalCertLink>
          { window.location.pathname === '/survey' && props.currentUser.role !== 'admin' ?
            <ALink>
              <NavLink to='/'><span>Go To Attestation</span><FaArrowRight style={{paddingLeft: '10px', paddingTop: '10px'}} /></NavLink>
            </ALink>
            :
            <div></div>
          }
        </ConditionalCertLink>
        <p><strong>In order to assess our efforts to support you during this time and to gauge your comfort in returning to the office on a voluntary basis, we have developed this survey. Your participation is very much appreciated as it will inform our efforts and plans moving forward.</strong></p>
        <SurveyForm onSubmit={onSubmit} currentUser={props.currentUser}/>
      </SurveyFormFields>
      <div></div>

    </SurveyFormContainer>

  )

}

export default withRouter(Survey)
