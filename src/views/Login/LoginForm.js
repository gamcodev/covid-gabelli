import React, { useState } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


const LoginForm = (props) => {
  const [ user, setUser ] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = e => {
    const { name, value } = e.target
      setUser({ ...user, [name]: value })
    }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(user)
  }

  return (
    <Form>
      <legend>Login</legend>
      <Input
        placeholder="email"
        name='email'
        value={ user.email }
        onChange={ handleOnChange }
      />
      <Input
        placeholder="password"
        name='password'
        type='password'
        value={ user.password }
        onChange={ handleOnChange }
      />
      <Button variant="raised" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default LoginForm
