import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers  } from '../../redux/modules/Users/actions'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Option from 'muicss/lib/react/option'
import Input from 'muicss/lib/react/input'
import Form from 'muicss/lib/react/form'
import Radio from 'muicss/lib/react/radio'
import Button from 'muicss/lib/react/button'
import Checkbox from 'muicss/lib/react/checkbox'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import Autocomplete from './Autocomplete'

const AttestationDiv = styled.div `
  display: flex;
  flex-direction: row;
  span {
    margin-top: 10px;
    marginBottom: 10px;
  }
`

const VisitorCert = (props) => {

  const [startDate, setStartDate] = useState(new Date())

  const dt = DateTime.now();
  const maxDate = dt.plus({days: 2})

	const [approved, setApproved] = useState(false)
	console.log("approved: ", approved)
  const [host, setHost] = useState('')
  const [visitor, setVisitor] = useState({
    first_name: '',
    last_name: '',
    email: '',
    visit_location: '',
    visit_date: startDate,
		vaccinated: null,
    fever: null,
    symptoms: null,
    positive: null,
    quarantined: null,
    travel: null,
    public_transit: null,
    attest: null,
    host_employee_id: ''
  })
	console.log(visitor)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const users = useSelector(state => state.users.users || [])
  const hosts = users?.filter(u => u.id !== 10211).map(u => u.last_name)

  const handleOnChange = e => {
    const { name, value } = e.target
    setVisitor({ ...visitor, [name]: value })
  }

  useEffect(() => {
    setVisitor({ ...visitor, visit_date: startDate })
  }, [startDate]) 

  useEffect(() => {
    let hostEmployee
    if (host) {
      hostEmployee = users.find(user => user.last_name === host)
      setVisitor({ ...visitor, host_employee_id: hostEmployee.id })
    }
  }, [host])

	useEffect(() => {
		if (visitor.vaccinated === "1" && visitor.symptoms === "0" && visitor.fever === "0" && visitor.positive === "0" && visitor.quarantined === "0") {
			setApproved(true)
		} else {
			setApproved(false)
		}
	},[visitor.vaccinated, visitor.symptoms, visitor.fever, visitor.positive, visitor.quarantined])

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(visitor)
  }

  return (
    <div>
      <div>
        <Form>
          <Input
            floatingLabel={true}
            style={{marginTop: '1rem', textAlign: 'left'}}
            label='First Name'
            name='first_name'
            onChange={ handleOnChange }
          />
          <Input
            floatingLabel={true}
            style={{marginTop: '1rem', textAlign: 'left'}}
            label='Last Name'
            name='last_name'
            onChange={ handleOnChange }
          />
          <Input
            floatingLabel={true}
            style={{textAlign: 'left'}}
            label='Email*'
            name='email'
            type='email'
            required={true}
            onChange={ handleOnChange }
          />
          <Autocomplete hosts={ hosts } setHost={ setHost } />

          <QuestionRow>
            <div>
              <p>Please select the location of your scheduled visit:</p>
              <select
              name='visit_location' label=''
              value={ visitor.visit_location } onChange={ handleOnChange }>
                <Option key={1} value='' label='Choose office location...'/>
                <Option key={2} value='401' label='Rye, NY'/>
                <Option key={3} value='191' label='Greenwich, CT'/>
              </select>
            </div>
            <div>
              <p>Please select the date of your scheduled visit:</p>
              <DatePicker 
                selected={startDate} 
                name='visit_date'
                value={ visitor.visit_date }
                onChange={(date) => setStartDate(date)} 
                minDate={new Date()}
                maxDate={ maxDate }
              />
            </div>
          </QuestionRow>
          <hr />
					{/* Q1 vaccinated */}
					<span>I am fully vaccinated against COVID-19 (fully vaccinated means it has been 2 weeks after second dose in a 2-dose series, i.e. Pfizer or Moderna vaccines, or 2 weeks after a single-dose vaccine, i.e. Johnson &amp; Johnson)</span>
          <Radio
            style={{ marginLeft: '1rem'}}
            label='Yes'
            name='vaccinated'
            value={1}
            onChange={ handleOnChange }
          />
          <Radio
            style={{ marginLeft: '1rem'}}
            label='No'
            name='vaccinated'
            value={0}
            onChange={ handleOnChange }
          />
          <hr />
          {/* Q2 fever */}
          <span>Do you currently have a fever of 100.4 degrees F or greater?</span>
          <Radio
            style={{ marginLeft: '1rem'}}
            label='Yes'
            name='fever'
            value={1}
            onChange={ handleOnChange }
          />
          <Radio
            style={{ marginLeft: '1rem'}}
            label='No'
            name='fever'
            value={0}
            onChange={ handleOnChange }
          />
          <hr />
          {/* Q3 cough */}
            <div>
              <span >In the past 14 days, have you or anyone in your household had any COVID-related <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" alt='CDC website' target="_blank" rel="noreferrer noopener">symptoms</a>, including fever, cough, shortness of breath, difficulty breathing, chills, muscle pain, sore throat, or new loss of taste or smell, that cannot be attributed to another health condition, in the past 14 days?</span>
              <Radio
                style={{ marginLeft: '1rem'}}
                label='Yes'
                name='symptoms'
                value={1}
                onChange={ handleOnChange }
              />
              <Radio
                style={{ marginLeft: '1rem'}}
                label='No'
                name='symptoms'
                value={0}
                onChange={ handleOnChange }
              />
              <hr />
            </div>
          {/* Q4 positive */}
            <div>
              <span>In the past 14 days, have you or anyone in your household gotten a positive result from a COVID-19 test that tested saliva or used a nose or throat swab? (not a blood test)</span>
              <Radio
                style={{ marginLeft: '1rem'}}
                label='Yes'
                name='positive'
                value={1}
                onChange={ handleOnChange }
              />
              <Radio
                style={{ marginLeft: '1rem'}}
                label='No'
                name='positive'
                value={0}
                onChange={ handleOnChange }
              />
              <hr />
              </div>
            {/* Q5 quarantined */}
              <div>
                <span>In the past 14 days were you or anyone in your household notified by a medical provider, local department of health, employer, school, or other entity that they have had potential exposure to COVID-19?</span>
                <Radio
                  style={{ marginLeft: '1rem'}}
                  label='Yes'
                  name='quarantined'
                  value={1}
                  onChange={ handleOnChange }
                />
                <Radio
                  style={{ marginLeft: '1rem'}}
                  label='No'
                  name='quarantined'
                  value={0}
                  onChange={ handleOnChange }
                />
                <hr />
              </div>
					{ visitor.symptoms && visitor.fever && visitor.positive && visitor.quarantined && visitor.vaccinated ? 
						<div>
							{ !approved ?
								<div>
									<p>If you are not fully vaccinated, we cannot approve your visit at this time.</p>
									<p>If you are fully vaccinated but answer "yes" to any of the above health questions, please reschedule your visit.</p>
									<Button variant="raised"  onClick={handleSubmit}>Submit</Button>
								</div>
								:
								null
							}
						
							{ approved ?
								<div>
									<p>If you are full vaccinated and answer "no" to all of the above health questions, your visit is approved. Please acknowledge the following:</p>
									<div>
										<AttestationDiv>
											<Checkbox name="attest" value={1} onChange={ handleOnChange } />
											<span>I certify all answers are true and accurate to the best of my knowledge.</span>
										</AttestationDiv>
									</div>
									{ visitor.attest ?
										<Button variant="raised"  onClick={handleSubmit}>Submit</Button>
										:
										null
									}
								</div>
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
  symptoms: PropTypes.bool,
  positive: PropTypes.bool,
  quarantined: PropTypes.bool,
  attest: PropTypes.bool,
}


const QuestionRow = styled.div `
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  @media (max-width: 680px)  {
    flex-direction: column;
    clear: both;
    select {
      margin-bottom: 1rem;
    }
  }

`
