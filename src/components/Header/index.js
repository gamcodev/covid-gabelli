import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBar = styled.div `
  width: 100%;
  background: #5a6572;
  height: 75px;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
  display: inline-grid;
  grid-template-columns: 25% 50% 12.5% 12.5%;
  border-bottom: 2px solid #6dcff6;
`

const Logo = styled.div `
  img {
    width: 200px;

  }
`
const Logout = styled.div `
  span {
    cursor: pointer;
    line-height: 75px;
    align-self: right;
    color: #fff;
  }
`

const Header = (props) => {
  return (
    <HeaderBar>
      <Logo>
        <img  src={"https://s3.us-east-2.amazonaws.com/gab-images/gamco_inv_hor_reverse_rgb-01.svg"} alt="gabelli-logo"></img>
      </Logo>
      <div><h2>COVID-19 Reopening Survey</h2></div>
      { props.isAuthenticated && props.currentUser.role === 'admin' ?
        <Logout>
          <NavLink to='/'><span>Admin Home</span></NavLink>
        </Logout>
        : window.location.pathname === '/' && props.isAuthenticated && props.currentUser.role !== 'admin' && props.currentUser.surveys === false ?
        <Logout>
          <NavLink to='/survey'><span>Take Survey</span></NavLink>
        </Logout>
        : window.location.pathname === '/survey' && props.isAuthenticated && props.currentUser.role !== 'admin' ?
        <Logout>
          <NavLink to='/'><span>Attestation</span></NavLink>
        </Logout>
        :
        <div></div>
      }
      { props.isAuthenticated ?
        <Logout>
          <span onClick={props.logout}>Logout</span>
        </Logout>
        :
        <NavLink to='/login'>
          <Logout>
            <span onClick={props.logout}>Login</span>
          </Logout>
        </NavLink>

      }
    </HeaderBar>
  )
}

export default Header

// <img id="login-logo" src={"https://s3.us-east-2.amazonaws.com/gab-images/gabellifundswhitehorizontal.jpg"} alt="gabelli-logo"></img>
