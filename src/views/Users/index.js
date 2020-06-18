import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { fetchUsersByDate } from '../../redux/modules/Users/actions'
import 'react-day-picker/lib/style.css'

const UserPage = styled.div `
  padding: 2rem 1rem;
  text-align: center;
`
const UsersContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`
const UserTableHeadings = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(3, 10%) repeat(8, 8.75%);
  font-weight: bold;
  border-bottom: 2px solid #5a6572;
`
const Heading = styled.div `
  word-wrap: break-word;
`
const UserRow = styled.div `
  display: inline-grid;
  grid-template-columns: 10% 10% 10% 70%;
`
const ResponseCells = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(8, 12.5%);
`

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users || [])
  console.log(users)
  const [date, setDate] = useState('')

  const getUserList = (date) => {
    setDate(date)
  }

  const getUsers = (date) => {
    dispatch(fetchUsersByDate(date))
    getUserList(date)
  }

  const responses = r => {
    return (
      <ResponseCells>
        <div>{r.fever === false ? 'NO' : r.fever === true ? 'YES' : null}</div>
        <div>{r.cough === false ? 'NO' : r.cough === true ? 'YES' : null}</div>
        <div>{r.positive === false ? 'NO' : r.positive === true ? 'YES' : null}</div>
        <div>{r.quarantined === false ? 'NO' : r.quarantined === true ? 'YES' : null}</div>
        <div>{r.travel === false ? 'NO' : r.travel === true ? 'YES' : null}</div>
        <div>{r.gathering === false ? 'NO' : r.gathering === true ? 'YES' : null}</div>
        <div>{r.public_transit === false ? 'NO' : r.public_transit === true ? 'YES' : null}</div>
        <div>{r.status === 0 ? 'YES' : 'NO'}</div>
      </ResponseCells>
    )
  }

  const listUsers = users?.filter(u => !u.first_name.includes('Test')).map(u => (
    <UserRow key={ u.id }>
      <div>{u.first_name}</div>
      <div>{u.last_name}</div>
      <div>{u.department}</div>
      { u.responses ?
        responses(u.responses)
        :
        null
      }


    </UserRow>
  ))

    return (
      <UserPage>

        <DayPickerInput onDayChange={day => getUsers(day)} /><br />
        { date !== '' ?
        <UsersContainer>
          <UserTableHeadings>
            <Heading>First Name</Heading>
            <Heading>Last Name</Heading>
            <Heading>Department</Heading>
            <Heading>Fever</Heading>
            <Heading>Cough</Heading>
            <Heading>Positive</Heading>
            <Heading>Quarantined</Heading>
            <Heading>Traveled</Heading>
            <Heading>Gathering</Heading>
            <Heading>Public Transit</Heading>
            <Heading>Permitted?</Heading>
          </UserTableHeadings>
            {listUsers}
        </UsersContainer>
        :
          <span>Please choose a date</span>
        }
      </UserPage>
    )
}

export default Users


// <div>{u.responses.fever}</div>
// <div>{u.responses.fever}</div>
// <div>{u.responses.fever}</div>
// <div>{u.responses.fever}</div>
// <div>{u.responses.created_at}</div>
