import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import { createCert } from '../../redux/modules/Cert/actions'
import { logout } from '../../redux/modules/Auth/actions'
import CertForm from './CertForm'


const CertFormContainer = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 20% 60% 20%;
`

const CertFormFields = styled.div `
  background: #f7f7f7;
  clear: both;
  padding: 5%;
`

const Certification = (props) => {
  const dispatch = useDispatch()
  // const cert = useSelector(state => state.cert.cert || [])
  // const userId = props.currentUser.id

  const onSubmit = ( responses, userId ) => {
    dispatch(createCert(responses, userId))
    showResults(responses)
  }

  const showResults = (r) => {
    r.cough === 'true' || r.fever === 'true' || r.positive === 'true' || r.quarantined === 'true' || r.travel === 'true' || r.gathering=== 'true' || r.public_transit === 'true' ?
    props.history.push({
      pathname: '/thankyou',
      result: 'no'
    })
    :
    props.history.push({
      pathname: '/thankyou',
      result: 'yes'
    })
    dispatch(logout())
  }

  return (
    <CertFormContainer>
      <div></div>
      <CertFormFields>
        <CertForm onSubmit={onSubmit} currentUser={props.currentUser}/>
      </CertFormFields>
      <div></div>

    </CertFormContainer>
  )
}

export default withRouter(Certification)
