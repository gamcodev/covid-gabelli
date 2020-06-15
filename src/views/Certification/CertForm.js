import React, { useState } from 'react'
import Form from 'muicss/lib/react/form';
import Radio from 'muicss/lib/react/radio';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import styled from 'styled-components'

const NotPermitted = styled.div `
  h2 {
    color: red;
  }
`

const CertForm = (props) => {

  const [responses, setResponses] = useState({
    fever: '',
    cough: '',
    positive: '',
    quarantined: '',
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setResponses({ ...responses, [name]: value })
  }

  const handleSubmit = () => {
    props.onSubmit(responses)
  }

  return (
    <div>
    { responses.cough === 'yes' || responses.fever === 'yes' || responses.positive === 'yes' || responses.quarantined === 'yes' ?
      <NotPermitted>
        <h2>You are not permitted to attend work in person. Please notify your manager.</h2>
      </NotPermitted>
      :

      <div>
        <Form>
          <span>Do you currently have a fever of 100.4 degrees F or greater?</span>
          <Radio
            label='Yes'
            name='fever'
            value='yes'
            onChange={ handleOnChange }
          />
          <Radio
            label='No'
            name='fever'
            value='no'
            onChange={ handleOnChange }
          />
          <hr />

          {  responses.fever && responses.fever === 'no' ?
            <div>
              <span>Do you have a cough or shortness of breath that began within the past 14 days?</span>
              <Radio
                label='Yes'
                name='cough'
                value='yes'
                onChange={ handleOnChange }
              />
              <Radio
                label='No'
                name='cough'
                value='no'
                onChange={ handleOnChange }
              />
              <hr />
            </div>
              :
              null
          }
          { responses.cough && responses.fever && responses.cough === 'no' ?
            <div>
              <span>In the past 14 days, have you gotten a positive result from a COVID-19 test that tested saliva or used a nose or throat swab? (not a blood test)</span>
              <Radio
                label='Yes'
                name='positive'
                value='yes'
                onChange={ handleOnChange }
              />
              <Radio
                label='No'
                name='positive'
                value='no'
                onChange={ handleOnChange }
              />
              <hr />
              </div>
              :
              null
            }
            { responses.cough && responses.fever && responses.positive && responses.positive === 'no' ?
              <div>
                <span>In the past 14 days were you notified by your medical provider or the NYC Test and Trace team to remain home because of COVID-19?</span>
                <Radio
                  label='Yes'
                  name='quarantined'
                  value='yes'
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='quarantined'
                  value='no'
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
              :
              null
            }

          <Checkbox name="attest" label="I, {/* props.currentUser.name */}, attest that my responses are true and accurate to the best of my knowledge." />
          <Button variant="raised" disabled={true} onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    }
    </div>
  )
}

export default CertForm
