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


const VisitorStatus = (props) => {
  const { result } = props.location

  if ( result && result === 'yes') {
    return (
      <Confirmation>
        <h3>Thank you for your responses.</h3>
        <h3>Your visit has been approved and you will receive email confirmation. </h3>
        <h3>We look forward to seeing you.</h3>
      </Confirmation>
    )
  } else if ( result && result === 'no'){
    return (
      <Confirmation>
        <h2>We are unable to accommodate your visit at this time. Please reschedule for a later date.</h2>
      </Confirmation>

    )
  } else {
    return (
      <Confirmation>
      </Confirmation>
    )
  }
}
export default VisitorStatus
