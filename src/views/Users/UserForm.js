import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import styled from 'styled-components'


const UserForm = (props) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    department: '',
    role: 0,
  })

  const newUser = useSelector(state => state.users.user || {})
  const status = useSelector(state => state.appTransactions)

  const handleOnChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addNewUser(user)
    formRef.current.reset()
  }

  useEffect(() => {
    if (newUser.id) {
      alert("User successfully created and credentials sent")
    } else if (status.errors) {
      alert(status.errors)
    }
  }, [newUser, status])

  const formRef = useRef()


  return (
    <UForm>
      <form ref={formRef}>
        <Input
          floatingLabel={true}
          name="first_name"
          label='First Name'
          onChange={ handleOnChange }
        />
        <Input
          floatingLabel={true}
          name="last_name"
          label='Last Name'
          onChange={ handleOnChange }/>
        <Input
          floatingLabel={true}
          name="email"
          label='Email'
          onChange={ handleOnChange }/>
        <Input
          floatingLabel={true}
          name="department"
          label='Department'
          onChange={ handleOnChange }/>
        <Button variant='raised' onClick={handleSubmit}>Submit</Button>
      </form>
    </UForm>
  )
}
export default UserForm

const UForm = styled.div `
  width: 50%;
  padding-top: 2rem;
  Input {
    text-align: center;
  }
  @media (max-width: 768px)  {
    width: 90%;
  }

`
