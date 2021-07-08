import React, { Fragment, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import moment from 'moment'
import { createVisitor } from '../../redux/modules/Cert/actions'
import EventCert from './EventCert'

const Events = (props) => {

  const dispatch = useDispatch()

  const onSubmit = ( responses ) => {
    dispatch(createVisitor(responses))
    showResults(responses)
  }

  const showResults = (r) => {
    r.cough === '1' || r.fever === '1' || r.positive === '1' || r.quarantined === '1' || r.travel === '1' || r.public_transit === '1' ?
    props.history.push({
      pathname: '/event_status',
      result: 'no',
      // workdate: moment().format("MMM Do, YYYY")
    })
    :
    props.history.push({
      pathname: '/event_status',
      result: 'yes',
      // workdate: moment().format("MMM Do, YYYY")
    })
  }


  return (
    <CertFormContainer>
      <div></div>
      <CertFormFields>
        <Fragment>
          <ReminderDiv>
            <h3>Please complete the questionnaire within 48 hours of your scheduled visit to our office.</h3>
            <p>If your visit is more than 48 hours from now please revisit this page within the 48 hour window. </p>
          </ReminderDiv>
          <EventCert onSubmit={onSubmit} />
        </Fragment>
      </CertFormFields>
      <div></div>

    </CertFormContainer>
  )
}

export default withRouter(Events)


const Vaccinated = styled.div `
  text-align: center;
`

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
  padding: 1rem 2rem 2rem;
  @media (max-width: 680px)  {
    padding: 1rem;
  }

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
