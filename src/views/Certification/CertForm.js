import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'muicss/lib/react/form';
import Radio from 'muicss/lib/react/radio';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import styled from 'styled-components'

const AttestationDiv = styled.div `
  display: flex;
  flex-direction: row;
  span {
    margin-top: 10px;
    marginBottom: 10px;
  }
`

const CertForm = (props) => {

  const [responses, setResponses] = useState({
    fever: '',
    cough: '',
    positive: '',
    quarantined: '',
    attest: '',
  })
  console.log(responses)

  const handleOnChange = e => {
    const { name, value } = e.target
    setResponses({ ...responses, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    responses.attest === 'true' ?
      props.onSubmit(responses, props.currentUser.id)
      :
      alert("You must attest that your answers are true.")
  }

  return (
    <div>

      <div>
        <Form>
          <span>Do you currently have a fever of 100.4 degrees F or greater?</span>
          <Radio
            label='Yes'
            name='fever'
            value={true}
            onChange={ handleOnChange }
          />
          <Radio
            label='No'
            name='fever'
            value={false}
            onChange={ handleOnChange }
          />
          <hr />

          {  responses.fever ?
            <div>
              <span >Do you have a cough or shortness of breath that began within the past 14 days?</span>
              <Radio
                label='Yes'
                name='cough'
                value={true}
                onChange={ handleOnChange }
              />
              <Radio
                label='No'
                name='cough'
                value={false}
                onChange={ handleOnChange }
              />
              <hr />
            </div>
              :
              null
          }
          { responses.cough && responses.fever ?
            <div>
              <span>In the past 14 days, have you gotten a positive result from a COVID-19 test that tested saliva or used a nose or throat swab? (not a blood test)</span>
              <Radio
                label='Yes'
                name='positive'
                value={true}
                onChange={ handleOnChange }
              />
              <Radio
                label='No'
                name='positive'
                value={false}
                onChange={ handleOnChange }
              />
              <hr />
              </div>
              :
              null
            }
            { responses.cough && responses.fever && responses.positive ?
              <div>
                <span>In the past 14 days were you notified by your medical provider or the NYC Test and Trace team to remain home because of COVID-19?</span>
                <Radio
                  label='Yes'
                  name='quarantined'
                  value={true}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='quarantined'
                  value={false}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
              :
              null
            }
          { responses.cough && responses.fever && responses.positive && responses.quarantined ?
            <div>
              <AttestationDiv>
                <Checkbox name="attest" value={true} onChange={ handleOnChange } />
                <span>I, { props.currentUser.first_name } { props.currentUser.last_name }, attest that my responses are true and accurate to the best of my knowledge.</span>
              </AttestationDiv>
              <Button variant="raised"  onClick={handleSubmit}>Submit</Button>
            </div>
            :
            null
          }
        </Form>
      </div>
    </div>
  )
}

export default CertForm

CertForm.propTypes = {
  fever: PropTypes.bool,
  cough: PropTypes.bool,
  positive: PropTypes.bool,
  quarantined: PropTypes.bool,
  attest: PropTypes.bool,
}


// const normalizeBoolean = v => {
//   if (v === 'true') { return true }
//   if (v === 'false') { return false }
//   return v
// }
