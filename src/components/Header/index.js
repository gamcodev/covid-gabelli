import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBar = styled.div `
  width: 100%;
  background: #5a6572;
  height: 75px;
  text-align: center;
  color: #fff;
  display: inline-grid;
  grid-template-columns: 25% 50% 12.5% 12.5%;
  border-bottom: 2px solid #6dcff6;
  @media (max-width: 680px) {
    grid-template-columns: 20% 60% 0% 20%;
    h2 {
      font-size: 16px;
    }
  }
`

const Logo = styled.div `
  img {
    width: 200px;
  }
  @media (max-width: 680px) {
    img {
      width: 100px;
      margin-top: 1rem;
    }
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
const SuLink = styled.div `
  @media (max-width: 680px)  {
    visibility: hidden;
  }
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
      { props.isAuthenticated && props.currentUser.role === 'admin' ?
      <div><NavLink to='/'><h2>COVID-19 Admin Home</h2></NavLink></div>
      : window.location.pathname === '/' && props.isAuthenticated && props.currentUser.role !== 'admin' ?
      <div><h2>COVID-19 Attestation</h2></div>
      : window.location.pathname === '/survey' && props.isAuthenticated && props.currentUser.role !== 'admin' ?
      <div><h2>COVID-19 Reopening Survey</h2></div>
      :
      <div><h2>COVID-19 Reopening</h2></div>
      }

      { window.location.pathname === '/' && props.isAuthenticated && props.currentUser.role !== 'admin' && props.currentUser.surveys === false ?
        <SuLink>
          <NavLink to='/survey'><span>Take Survey</span></NavLink>
        </SuLink>
        : window.location.pathname === '/survey' && props.isAuthenticated && props.currentUser.role !== 'admin' ?
        <SuLink>
          <NavLink to='/'><span>Attestation</span></NavLink>
        </SuLink>
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
