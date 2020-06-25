import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import moment from 'moment'
import { createCert } from '../../redux/modules/Cert/actions'
import { logout } from '../../redux/modules/Auth/actions'
import CertForm from './CertForm'



const CertFormContainer = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 10% 80% 10%;
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
        <ReminderDiv><h2><strong>REMINDER: </strong>The questionnaire MUST be completed prior to leaving your home every day you plan on coming to the office.</h2></ReminderDiv>
        <CertForm onSubmit={onSubmit} currentUser={props.currentUser}/>
      </CertFormFields>
      <div></div>

    </CertFormContainer>
  )
}

export default withRouter(Certification)
