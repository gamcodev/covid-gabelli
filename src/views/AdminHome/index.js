import React, { useCallback } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { fetchSurveys } from '../../redux/modules/Survey/actions'
import { useDispatch, useSelector } from 'react-redux'


const AdminScreen = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 25% 50% 25%;
  clear: both;
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
    <AdminScreen>
      <div></div>
      <AdminNav>
        <NavLink to='/results'><NavButton>Survey Results</NavButton></NavLink>
        <NavLink to='/teammates'><NavButton>Certifications</NavButton></NavLink>
      </AdminNav>
      <div></div>

    </AdminScreen>
  )
}

export default withRouter(AdminHome)
