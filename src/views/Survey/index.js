import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
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
        <p><strong>In order to assess our efforts to support you during this time and to gauge your comfort in returning to the office on a voluntary basis, we have developed this survey. Your participation is very much appreciated as it will inform our efforts and plans moving forward.</strong></p>
        <SurveyForm onSubmit={onSubmit} currentUser={props.currentUser}/>
      </SurveyFormFields>
      <div></div>

    </SurveyFormContainer>

  )

}

export default withRouter(Survey)
