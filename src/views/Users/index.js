import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { fetchUsersByDate } from '../../redux/modules/Users/actions'
import 'react-day-picker/lib/style.css'

const UserPage = styled.div `
  padding: 2rem;
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
  grid-template-columns: repeat(8, 12.5%);
  font-weight: bold;
  border-bottom: 2px solid #5a6572;
`
const UserRow = styled.div `
  display: inline-grid;
  grid-template-columns: 12.5% 12.5% 12.5% 62.5%;
`
const ResponseCells = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(5, 20%);
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
        <div>{r.attest === false ? 'NO' : r.attest === true ? 'YES' : null}</div>
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
            <div>First Name</div>
            <div>Last Name</div>
            <div>Department</div>
            <div>Fever</div>
            <div>Cough</div>
            <div>Positive</div>
            <div>Quarantined</div>
            <div>Attest</div>
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
