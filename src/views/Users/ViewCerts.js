import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import Button from 'muicss/lib/react/button';
import { fetchUsersByDate, exportUserCerts } from '../../redux/modules/Users/actions'
import 'react-day-picker/lib/style.css'
import { Waiting } from '../../components/MatchAuthenticated'
import CertsTable from './CertsTable'

const ViewCerts = (props) => {
  const dispatch = useDispatch()
  const userCerts = useSelector(state => state.users.userCerts || [])
  const { makingRequestToAPI, exporting, exported } = useSelector(state => state.appTransactions)

  const [date, setDate] = useState('')

  const showUserList = (date) => {
    setDate(date)
  }

  const getUsers = (date) => {
    dispatch(fetchUsersByDate(date))
    showUserList(date)
  }

  const handleExport = () => {
    dispatch(exportUserCerts(date, props.currentUser.email))
  }

  useEffect(() => {
    if (exported === true) {
      alert("Check your email for the report.")
    }
  }, [exported])


    return (
      <UserPage>
        <DateAndExport>
          <div></div>
          <DayPickerInput onDayChange={day => getUsers(day)} />
          <Export>
          {
            date !== '' && !makingRequestToAPI ?
              <Button variant="raised"  onClick={handleExport}>Export to Excel</Button>
              :
              null
          }
          {
            exporting ?
            <span>Exporting...</span>
            :
            null
          }
          </Export>
        </DateAndExport>

        { date !== '' ?
        <UsersContainer>
          { makingRequestToAPI ?
            <Waiting />
            :
            <CertsTable users={userCerts} />
          }
        </UsersContainer>
        :
          <span>Please choose a date</span>
        }
      </UserPage>
    )
}

export default withRouter(ViewCerts)

const UserPage = styled.div `
  padding: 2rem 1rem;
  text-align: center;
`
const UsersContainer = styled.div `
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const DateAndExport = styled.div `
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(3, 33%);
  justify-content: space-around;
`
const Export = styled.div `
  display: flex;
  flex-direction: column;
`


// const UserTableHeadings = styled.div `
//   width: 100%;
//   display: inline-grid;
//   grid-template-columns: 8% 8% 14% repeat(8, 8.75%);
//   font-weight: bold;
//   border-bottom: 2px solid #5a6572;
// `
// const Heading = styled.div `
//   word-wrap: break-word;
// `
// const UserRow = styled.div `
//   display: inline-grid;
//   grid-template-columns: 8% 8% 14% 70%;
// `
// const ResponseCells = styled.div `
//   width: 100%;
//   display: inline-grid;
//   grid-template-columns: repeat(8, 12.5%);
// `

// <div>{u.responses.fever}</div>
// <div>{u.responses.fever}</div>
// <div>{u.responses.fever}</div>
// <div>{u.responses.fever}</div>
// <div>{u.responses.created_at}</div>
