import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const AdminScreen = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 25% 50% 25%;
  clear: both;
  @media (max-width: 680px)  {
    grid-template-columns: 10% 80% 10%;
  }
`
const AdminNav = styled.div `
  display: inline-grid;
  grid-template-columns: 50% 50%;
  height: 60px;
`
const NavButton = styled.button `
  width: 95%;
  height: 95%;
  cursor: pointer;
  margin: 5%;
`

const AdminHome = (props) => {

  return (
    <div style={{ marginTop: '1rem'}}>
      <AdminScreen>
        <div></div>
          <AdminNav>
            <NavLink to='/survey/results'><NavButton>Survey Results</NavButton></NavLink>
            <NavLink to='/teammates'><NavButton>Certifications</NavButton></NavLink>
          </AdminNav>
        <div></div>
      </AdminScreen>
      <AdminScreen>
        <div></div>
        <AdminNav>
          <NavLink to='/survey'><NavButton>Take Survey</NavButton></NavLink>
          <NavLink to='/certification'><NavButton>Attest</NavButton></NavLink>
        </AdminNav>
        <div></div>
      </AdminScreen>
    </div>
  )
}

export default withRouter(AdminHome)
