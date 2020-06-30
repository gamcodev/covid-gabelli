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
    travel: '',
    gathering: '',
    public_transit: '',
    attest: '',
    procedure: '',
  })

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
          {/* fever */}
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
          {/* cough */}
            <div>
              <span >Have you or anyone in your household had a fever, cough, shortness of breath, difficulty breathing, chills, muscle pain, sore throat, or new loss of taste or smell, that cannot be attributed to another health condition in the past 14 days?</span>
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
          {/* positive */}
            <div>
              <span>In the past 14 days, have you or anyone in your household gotten a positive result from a COVID-19 test that tested saliva or used a nose or throat swab? (not a blood test)</span>
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
            {/* quarantined */}
              <div>
                <span>In the past 14 days were you or anyone in your household notified by your medical provider or local department of health to remain home because of COVID-19?</span>
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
            {/* travel */}
              <div>
                <span>In the past 14 days, have you or anyone in your household, traveled internationally or from any of the states considered a COVID-19 "Hot Spot" as outlined bythe NYS Governor (currently Alabama, Arizona, Arkansas, California, Florida, Georgia, Iowa, Idaho, Louisiana, Mississippi, North Carolina, Nevada, South Carolina, Tennessee, Texas, Utah)?</span>
                <Radio
                  label='Yes'
                  name='travel'
                  value={true}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='travel'
                  value={false}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
            {/* gathering */}
              <div>
                <span>Have you or someone you've been in contact with attended a gathering where proper social distancing protocol was not followed in the past 14 days?</span>
                <Radio
                  label='Yes'
                  name='gathering'
                  value={true}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='gathering'
                  value={false}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
            {/* public_trans */}
              <div>
                <span>Are you taking public transportation (ex. subway, bus, train) to commute to the office?</span>
                <Radio
                  label='Yes'
                  name='public_transit'
                  value={true}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='public_transit'
                  value={false}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
          { responses.cough && responses.fever && responses.positive && responses.quarantined && responses.quarantined && responses.travel && responses.gathering ?
            <div>
              <p>If you answer "yes" to any of the above questions, you should not come into the office and contact HR.</p>
              <p>If you answer "no" to all of the above questions, you are approved to come into the office. Please acknowledge the following:</p>
              <AttestationDiv>
                <Checkbox name="attest" value={true} onChange={ handleOnChange } />
                <span>I, { props.currentUser.first_name } { props.currentUser.last_name }, certify I will follow my employer's return to work procedures.</span>
              </AttestationDiv>
              { responses.attest === 'true' ?
                <div>
                  <AttestationDiv>
                    <Checkbox name="procedure" value={true} onChange={ handleOnChange } />
                    <span>I, { props.currentUser.first_name } { props.currentUser.last_name }, certify all answers are true and accurate to the best of my knowledge.</span>
                  </AttestationDiv>

                </div>
                :
                null
              }
              { responses.attest === 'true' && responses.procedure === 'true' ?
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
