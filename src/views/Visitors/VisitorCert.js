import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from 'muicss/lib/react/select'
import Option from 'muicss/lib/react/option'
import Input from 'muicss/lib/react/input'
import Form from 'muicss/lib/react/form'
import Radio from 'muicss/lib/react/radio'
import Button from 'muicss/lib/react/button'
import Checkbox from 'muicss/lib/react/checkbox'
import styled from 'styled-components'

const AttestationDiv = styled.div `
  display: flex;
  flex-direction: row;
  span {
    margin-top: 10px;
    marginBottom: 10px;
  }
`

const VisitorCert = (props) => {

  const [visitor, setVisitor] = useState({
    first_name: '',
    last_name: '',
    email: '',
    visit_location: '',
    visit_date: '',
    fever: null,
    symptoms: null,
    positive: null,
    quarantined: null,
    travel: null,
    public_transit: null,
    attest: null,
  })
  console.log(visitor)

  const handleOnChange = e => {
    const { name, value } = e.target
    setVisitor({ ...visitor, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(visitor)
  }


  return (
    <div>
      <div>
        <Form>
          
          <Select
            name='visit_location' label=''
            value={ visitor.visit_location } onChange={ handleOnChange }>
              <Option key={i} value='401' label='Rye, NY'/>
              <Option key={i} value='191' label='Greenwich, CT'/>
          </Select>
          <hr />
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
                <span>In the past 14 days were you or anyone in your household notified by a medical provider, local department of health, employer, school, or other entity to quarantine because of COVID-19 or potential exposure to COVID-19?</span>
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
            {/* travel */}
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
            {/* public_trans */}
              <div>
                <span>Are you taking public transportation (ex. subway, bus, train) to commute to the office?</span>
                <Radio
                  label='Yes'
                  name='public_transit'
                  value={1}
                  onChange={ handleOnChange }
                />
                <Radio
                  label='No'
                  name='public_transit'
                  value={0}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
          { visitor.symptoms && visitor.fever && visitor.positive && visitor.quarantined &&  visitor.travel && visitor.public_transit ?
            <div>
              <p>If you answer "yes" to any of the above questions, please reschedule your visit.</p>
              <p>If you answer "no" to all of the above questions, your visit is approved. Please acknowledge the following:</p>
                <div>
                  <AttestationDiv>
                    <Checkbox name="attest" value={1} onChange={ handleOnChange } />
                    <span>I certify all answers are true and accurate to the best of my knowledge.</span>
                  </AttestationDiv>
                </div>
              { visitor.attest  ?
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

export default VisitorCert

VisitorCert.propTypes = {
  fever: PropTypes.bool,
  cough: PropTypes.bool,
  positive: PropTypes.bool,
  quarantined: PropTypes.bool,
  attest: PropTypes.bool,
}


