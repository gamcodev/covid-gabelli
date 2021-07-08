import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { createVisitor } from '../../redux/modules/Cert/actions'
import EventCert from './EventCert'

const Events = (props) => {

  const dispatch = useDispatch()
  const location = useLocation()
  const [eventDetails, setEventDetails] = useState({
    eventType: 'golf',
    hostId: 10366
  })

  useEffect(() => {
    if (location.pathname === '/beach') {
      setEventDetails({
        eventType: 'beach',
        hostId: 10293
      })
    } 
  },[ location ])

  const onSubmit = ( responses ) => {
    dispatch(createVisitor(responses))
    showResults(responses)
  }

  const showResults = (r) => {
    r.cough === '1' || r.fever === '1' || r.positive === '1' || r.quarantined === '1' || r.travel === '1' || r.public_transit === '1' ?
    props.history.push({
      pathname: '/event_status',
      result: 'no',
    })
    :
    props.history.push({
      pathname: '/event_status',
      result: 'yes',
    })
  }


  return (
    <CertFormContainer>
      <div></div>
      <CertFormFields>
        <Fragment>
          <ReminderDiv>
            <h3>Please complete the questionnaire within 48 hours of the 
              { eventDetails.eventType === 'golf' ? 
              <span> Gabelli Golf Outing</span> 
              : 
              <span> Gabelli Beach Bash</span>   
              }.
            </h3>
            <p>If the event is more than 48 hours from now please revisit this page within the 48 hour window. </p>
          </ReminderDiv>
          <EventCert onSubmit={ onSubmit } eventDetails={ eventDetails } />
        </Fragment>
      </CertFormFields>
      <div></div>
    </CertFormContainer>
  )
}

export default withRouter(Events)

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
