import React from 'react'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const HeaderBar = styled.div `
  width: 100%;
  background: #5a6572;
  height: 75px;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
  display: inline-grid;
  grid-template-columns: 20% 60% 20%;
  border-bottom: 2px solid #6dcff6;
`

const Logo = styled.div `
  img {
    width: 80%;

  }
`
const Logout = styled.div `
  span {
    cursor: pointer;
    line-height: 75px;
    align-self: right;
  }
`

const Header = (props) => {
  console.log(props)
  return (
    <HeaderBar>
      <Logo>
        <img  src={"https://s3.us-east-2.amazonaws.com/gab-images/gamco_inv_hor_reverse_rgb-01.svg"} alt="gabelli-logo"></img>
      </Logo>
      <div><h2>COVID-19 Reopening Health Screen</h2></div>
      { props.isAuthenticated ?
        <Logout>
          <span onClick={props.logout}>Logout</span>
        </Logout>
        :
        null

      }
    </HeaderBar>
  )
}

export default Header

// <img id="login-logo" src={"https://s3.us-east-2.amazonaws.com/gab-images/gabellifundswhitehorizontal.jpg"} alt="gabelli-logo"></img>
