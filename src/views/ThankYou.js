import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Confirmation = styled.div `
  padding: 2rem;
  text-align: center;
  h2 {
    color: red;
  }

`


const ThankYou = (props) => {
  const { result, workdate } = props.location

  if ( result && result === 'yes') {
    return (
      <Confirmation>
        <h3>Thank you for your responses.</h3>
        <h3>You are permitted to work in the office today, { workdate }.</h3>
        <h3>You will receive an email confirming your eligibility to report to the office.</h3>
        <h3><strong>Reminder: </strong>The questionnaire MUST be completed prior to leaving your home every day you plan on coming to the office.</h3>
      </Confirmation>
    )
  } else if ( result && result === 'no'){
    return (
      <Confirmation>
        <h2>You are not permitted to attend work in person. Please notify your manager.</h2>
      </Confirmation>

    )
  } else {
    return (
      <Confirmation>
        <NavLink to='/login'><h3>Click here to login.</h3></NavLink>
      </Confirmation>
    )
  }
}
export default ThankYou
