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
    fever: null,
    cough: null,
    positive: null,
    quarantined: null,
    travel: null,
    gathering: null,
    public_transit: null,
    attest: null,
    procedure: null,
  })
  console.log(responses)

  const handleOnChange = e => {
    const { name, value } = e.target
    setResponses({ ...responses, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(responses, props.currentUser.id)
  }


  return (
    <div>

      <div>
        <Form>
          {/* Q1 fever */}
          <span>Do you currently have a fever of 100.4 degrees F or greater?</span>
          <Radio
            label='Yes'
            name='fever'
            value={1}
            onChange={ handleOnChange }
          />
          <Radio
            label='No'
            name='fever'
            value={0}
            onChange={ handleOnChange }
          />
          <hr />
          {/* Q2 cough */}
            <div>
              <span >In the past 14 days, have you or anyone in your household had any COVID-related <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" alt='CDC website' target="_blank" rel="noreferrer noopener">symptoms</a>, including fever, cough, shortness of breath, difficulty breathing, chills, muscle pain, sore throat, or new loss of taste or smell, that cannot be attributed to another health condition, in the past 14 days?</span>
              <Radio
                label='Yes'
                name='cough'
                value={1}
                onChange={ handleOnChange }
              />
              <Radio
                label='No'
                name='cough'
                value={0}
                onChange={ handleOnChange }
              />
              <hr />
            </div>
          {/* Q3 positive */}
            <div>
              <span>In the past 14 days, have you or anyone in your household gotten a positive result from a COVID-19 test that tested saliva or used a nose or throat swab? (not a blood test)</span>
              <Radio
                label='Yes'
                name='positive'
                value={1}
                onChange={ handleOnChange }
              />
              <Radio
                label='No'
                name='positive'
                value={0}
                onChange={ handleOnChange }
              />
              <hr />
              </div>
            {/* Q4 quarantined */}
              <div>
                <span>In the past 14 days were you or anyone in your household notified by a medical provider, local department of health, employer, school, or other entity that they have had potential exposure to COVID-19?</span>
                <Radio
                  label='Yes'
                  name='quarantined'
                  value={1}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='quarantined'
                  value={0}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
            {/* Q5 travel */}
              <div>
                <span>In the past 14 days, have you or anyone in your household, traveled internationally and/or been required to quarantine per state requirements?</span><br />
                <br />
                <span>For the Rye, NY office, visit <a href="https://coronavirus.health.ny.gov/covid-19-travel-advisory" alt='NY state website' target="_blank" rel="noreferrer noopener">NY State COVID-19 Travel Advisory</a> to see current quarantine requirements.</span><br />
                <br />
                <span>For the Greenwich, CT office, visit <a href="https://portal.ct.gov/Coronavirus/Travel" alt='CT state website' target="_blank" rel="noreferrer noopener">CT COVID-19 Travel Advisory</a> to see current quarantine requirements.</span>
                <br />
                <br />
                <Radio
                  label='Yes'
                  name='travel'
                  value={1}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='travel'
                  value={0}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
           
          { responses.cough && responses.fever && responses.positive && responses.quarantined && responses.travel ?
            <div>
              <p>If you answer "yes" to any of the above questions, you should not come into the office and contact HR.</p>
              <p>If you answer "no" to all of the above questions, you are approved to come into the office. Please acknowledge the following:</p>
              <AttestationDiv>
                <Checkbox name="attest" value={1} onChange={ handleOnChange } />
                <span>I, { props.currentUser.first_name } { props.currentUser.last_name }, certify I will follow my employer's return to work procedures.</span>
              </AttestationDiv>
              { responses.attest ?
                <div>
                  <AttestationDiv>
                    <Checkbox name="procedure" value={1} onChange={ handleOnChange } />
                    <span>I, { props.currentUser.first_name } { props.currentUser.last_name }, certify all answers are true and accurate to the best of my knowledge.</span>
                  </AttestationDiv>

                </div>
                :
                null
              }
              { responses.attest && responses.procedure ?
                <Button variant="raised"  onClick={handleSubmit}>Submit</Button>
                :
                null
              }
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
