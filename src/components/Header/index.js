import React from 'react'
import styled from 'styled-components'

const HeaderBar = styled.div `
  width: 100%;
  background: #5a6572;
  height: 60px;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
  display: inline-grid;
  grid-template-columns: 20% 60% 20%;
`

const Header = () => {
  return (
    <HeaderBar>
      <div>GAMCO Logo</div>
      <div><span>COVID-19 Reopening Health Screen</span></div>
      <div>Logout</div>

    </HeaderBar>
  )
}

export default Header
