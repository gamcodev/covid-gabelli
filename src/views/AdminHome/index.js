import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Button from 'muicss/lib/react/button';

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
  text-align: center;
  Button {
    background-color: #f3f3f3;
    width: 95%;
  }
`
const AdminHome = (props) => {

  return (
    <div style={{ marginTop: '1rem'}}>
      <AdminScreen>
        <div></div>
          <AdminNav>
            <NavLink to='/survey/results'>
              <Button variant='raised'>Survey Results</Button>
            </NavLink>
            <NavLink to='/user_management'>
              <Button variant='raised'>Manage Users</Button>
            </NavLink>
            {/*<NavLink to='/teammates'>
              <NavButton>Certifications</NavButton>
            </NavLink>*/}
          </AdminNav>
        <div></div>
      </AdminScreen>
      <AdminScreen>
        <div></div>
        <AdminNav>
          <NavLink to='/survey'>
            <Button variant='raised'>Take Survey</Button>
          </NavLink>
          <NavLink to='/certification'>
            <Button variant='raised'>Attest</Button>
          </NavLink>
        </AdminNav>
        <div></div>
      </AdminScreen>
    </div>
  )
}

export default withRouter(AdminHome)
