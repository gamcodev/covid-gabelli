import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/modules/Auth/actions';
import LoginForm from './LoginForm';
import styled from 'styled-components'

const LoginContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
`

const Login = () => {

  const dispatch = useDispatch()
  // const isAuthenicating = useSelector(state => state.auth.isAuthenicating)
  // const isAuthenicated = useSelector(state => state.auth.isAuthenicated)
  // const currentUser = useSelector(state => state.auth.currentUser)

  const handleLogin = (user) => {
    dispatch(login(user))
  }

  return (
      <LoginContainer>
        <div style={{flexGrow: '1'}}></div>
        <div style={{flexGrow: '1'}}>
          <LoginForm onSubmit={handleLogin} />
        </div>
        <div style={{flexGrow: '1'}}></div>
      </LoginContainer>
  )
}

export default Login
