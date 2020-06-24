import React from 'react'
import styled from 'styled-components'

const Confirmation = styled.div `
  padding: 2rem;
  text-align: center;
  h2 {
    color: red;
  }

`


const SurveyComplete = (props) => {
    return (
      <Confirmation>
        <h3>Thank you for your responses</h3>
      </Confirmation>
    )
}
export default SurveyComplete
