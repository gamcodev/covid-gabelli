import React from 'react'
import styled from 'styled-components'
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

const Certification = () => {

  const onSubmit = ({ login, password }) => {
    console.log(login)
  }

  return (
    <CertFormContainer>
      <div></div>
      <CertFormFields>
        <CertForm onSubmit={onSubmit} />
      </CertFormFields>
      <div></div>

    </CertFormContainer>
  )
}

export default Certification
