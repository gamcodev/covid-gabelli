import React, { useState, useEffect, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Button from 'muicss/lib/react/button';
import { Waiting } from '../../components/MatchAuthenticated'
import { fetchUsers, createUser, updateUser  } from '../../redux/modules/Users/actions'
import ViewCerts from './ViewCerts'
import ManageUsers from './ManageUsers'
import UserForm from './UserForm'

export const UserContext = createContext()

const Users = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const users = useSelector(state => state.users.users || [])
  const { makingRequestToAPI } = useSelector(state => state.appTransactions)

  const [showUsers, setShowUsers] = useState(true)
  const [showUserForm, setShowUserForm] = useState(false)
  const [showCerts, setShowCerts] = useState(false)

  // const updateVaccineStatus = (user, status) => {
  //   debugger
  //   user.vaccinated = status
  //   dispatch(updateUser(user))
  // }

  const viewUsers = () => {
    setShowUsers(true)
    setShowUserForm(false)
    setShowCerts(false)
  }
  const addUser = () => {
    setShowUsers(false)
    setShowUserForm(true)
    setShowCerts(false)
  }
  const viewCerts = () => {
    setShowUsers(false)
    setShowUserForm(false)
    setShowCerts(true)
  }
  const addNewUser = (user) => {
    dispatch(createUser(user))
  }

    return (
      <UserContext.Provider value={users}>
        <UserPage>
          <ManagementNav>
            <Button variant='raised' onClick={ viewUsers }>View All Users</Button>
            <Button variant='raised' onClick={ addUser }>Add User</Button>
            <Button variant='raised' onClick={ viewCerts }>View Certifications</Button>
          </ManagementNav>
          { showCerts ?
            <UsersContainer>
                <ViewCerts />
            </UsersContainer>
          : showUsers ?
            <UsersContainer>
              { makingRequestToAPI ?
                <Waiting />
                :
                <ManageUsers 
                // updateVaccineStatus={ updateVaccineStatus } 
                />
              }
            </UsersContainer>
          : showUserForm ?
            <FormContainer>
              <UserForm addNewUser={ addNewUser }/>
            </FormContainer>
          :
            null
          }
        </UserPage>
      </UserContext.Provider>
    )
}

export default withRouter(Users)

const UserPage = styled.div `
  padding: 1rem;
  text-align: center;
`
const ManagementNav = styled.div `
  width: 100%;
  Button {
    background-color: #f3f3f3;
    width: 200px;
  }
`
const UsersContainer = styled.div `
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`
const FormContainer = styled.div `
  display: flex;
  justify-content: space-around;
`
