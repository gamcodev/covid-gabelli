import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'muicss/lib/react/form';
import Radio from 'muicss/lib/react/radio';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import Textarea from 'muicss/lib/react/textarea';
import Input from 'muicss/lib/react/input';
import styled from 'styled-components'


const RadioContainer = styled.div `
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 100%;
  justify-content: space-around;
  padding: 15px;
`

const CheckboxContainer = styled.div `
  padding: 15px;
  display: flex;
  flex-direction: column;
`

const SurveyForm = (props) => {

  const [responses, setResponses] = useState({
    needs_met: '',
    effectiveness: '',
    checkins: '',
    team_connected: '',
    office_comfort: '',
    limiting: '',
    purpose: '',
    temperature: '',
    tested: '',
    deep_cleaning: '',
    intraday_clean: '',
    no_public_transit: '',
    other: '',
    high_risk: '',
    dependent_coverage: '',
    public_trans_only: '',
    other_reason: '',
    no_concerns: '',
    comments: '',
})
  console.log(responses)

  const handleOnChange = e => {
    const { name, value } = e.target
    setResponses({ ...responses, [name]: value })
  }
  const handleCheck = (e) => {
    const name = e.target.name
    const value = e.target.checked
    setResponses({ ...responses, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(responses, props.currentUser.id)
  }

  const RadioOptions = (props) => {
    return (
    <RadioContainer>
      <Radio
        style={{margin: '0'}}
        label='1'
        name={props.inputName}
        value={0}
        onChange={ props.handleOnChange }
      />
      <Radio
        style={{margin: '0'}}
        label='2'
        name={props.inputName}
        value={1}
        onChange={ props.handleOnChange }
      />
      <Radio
        style={{margin: '0'}}
        label='3'
        name={props.inputName}
        value={2}
        onChange={ props.handleOnChange }
      />
      <Radio
        style={{margin: '0'}}
        label='4'
        name={props.inputName}
        value={3}
        onChange={ props.handleOnChange }
      />
      <Radio
        style={{margin: '0'}}
        label='5'
        name={props.inputName}
        value={4}
        onChange={ props.handleOnChange }
      />
    </RadioContainer>
  )
  }

  return (
    <Form>
      {/* fever */}
      <h4>Current Work from home feedback</h4>
      <p>On a scale from 1-5 (1 = strongly disagree; 2 = disagree; 3 = neutral; 4 = agree; 5 = strongly agree) how would you rate the following:</p>
      <span>1.	I have what I need (i.e. space, set-up, internet connection) to work effectively from home.</span>
      <RadioContainer>
        <Radio
          style={{margin: '0'}}
          label='1'
          name='needs_met'
          value={0}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='2'
          name='needs_met'
          value={1}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='3'
          name='needs_met'
          value={2}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='4'
          name='needs_met'
          value={3}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='5'
          name='needs_met'
          value={4}
          onChange={ handleOnChange }
        />
      </RadioContainer>

      <span>2.	I am as effective working from home as I am in the office.</span>
      <RadioContainer>
        <Radio
          style={{margin: '0'}}
          label='1'
          name='effectiveness'
          value={0}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='2'
          name='effectiveness'
          value={1}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='3'
          name='effectiveness'
          value={2}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='4'
          name='effectiveness'
          value={3}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='5'
          name='effectiveness'
          value={4}
          onChange={ handleOnChange }
        />
      </RadioContainer>


      <span>3.	My manager/dept head is checking in regularly with me.</span>
      <RadioContainer>
        <Radio
          style={{margin: '0'}}
          label='1'
          name='checkins'
          value={0}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='2'
          name='checkins'
          value={1}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='3'
          name='checkins'
          value={2}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='4'
          name='checkins'
          value={3}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='5'
          name='checkins'
          value={4}
          onChange={ handleOnChange }
        />
      </RadioContainer>


      <span>4.	My team/dept has stayed connected during this time. </span>
      <RadioContainer>
        <Radio
          style={{margin: '0'}}
          label='1'
          name='team_connected'
          value={0}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='2'
          name='team_connected'
          value={1}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='3'
          name='team_connected'
          value={2}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='4'
          name='team_connected'
          value={3}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='5'
          name='team_connected'
          value={4}
          onChange={ handleOnChange }
        />
      </RadioContainer>

      <hr />
      <h4>Return to the office</h4>
      <p>On a scale from 1-5 (1 = very uncomfortable; 2 = uncomfortable; 3 = neutral; 4 = comfortable; 5 = I am ready to come back) how would you rate the following:</p>
      <span>1.	How comfortable do you feel coming back to the office?</span>
      <RadioContainer>
        <Radio
          style={{margin: '0'}}
          label='1'
          name='office_comfort'
          value={0}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='2'
          name='office_comfort'
          value={1}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='3'
          name='office_comfort'
          value={2}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='4'
          name='office_comfort'
          value={3}
          onChange={ handleOnChange }
        />
        <Radio
          style={{margin: '0'}}
          label='5'
          name='office_comfort'
          value={4}
          onChange={ handleOnChange }
        />
      </RadioContainer>

      <span>2.	Which of the following would further increase your comfort in returning to the office? (select all that apply)</span>
      <CheckboxContainer>
        <Checkbox name="limiting" label='Limiting the number of teammates returning to the office via a rotation schedule'  value={true} onChange={ handleCheck } />
        <Checkbox name="purpose" label='A purpose for coming to the office, ie meetings or work that requires being in the office' value={true} onChange={ handleCheck } />
        <Checkbox name="temperature" label='Requiring teammates take their temperature before coming to work' value={true} onChange={ handleCheck } />
        <Checkbox name="tested" label='Requiring teammates be tested before coming to work' value={true} onChange={ handleCheck } />
        <Checkbox name="deep_cleaning" label='Regular deep cleaning of the office' value={true} onChange={ handleCheck } />
        <Checkbox name="intraday_clean" label='Intraday cleaning of common areas including bathrooms and kitchens' value={true} onChange={ handleCheck } />
        <Checkbox name="no_public_transit" label='Requiring teammates not take public transportation to work' value={true} onChange={ handleCheck } />
        <Input style={{width: '50%'}} name="other" label='Other:  provide text' onChange={ handleOnChange } />
      </CheckboxContainer>

      <span>3.	Check any of the following that applies as a concern for returning to work:</span>
      <CheckboxContainer>
        <Checkbox name="high_risk" label='I, or someone in my household, am/is considered to be high risk per the CDC due to health reasons (such as an underlying condition) or age (65+)'  value={true} onChange={ handleCheck } />
        <Checkbox name="dependent_coverage" label='Care issues.  I do not have reliable care coverage for my dependents or older relatives that I take care of.' value={true} onChange={ handleCheck } />
        <Checkbox name="public_trans_only" label='Transportation issues.  I can only take public transportation to work' value={true} onChange={ handleCheck } />
        <Checkbox name="other_reason" label='Other' onChange={ handleCheck }/>
        <Checkbox name="no_concerns" label='No concerns, I will be able to return to work.' onChange={ handleCheck } />
      </CheckboxContainer>

      <span>4.	Feel free to include any comments or other concerns you may have:</span>
      <Textarea name='comments' onChange={handleOnChange} />

      <Button variant="raised"  onClick={handleSubmit}>Submit</Button>


    </Form>
  )

}

export default SurveyForm
