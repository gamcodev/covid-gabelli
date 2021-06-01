import React, { useContext, useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux' 
import { UserContext } from './index'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import Checkbox from 'muicss/lib/react/checkbox'
import { updateUser } from '../../redux/modules/Users/actions'

// const CheckboxRenderer = (props) => {

//   // const { value, clicked } = props
//   // console.log(value)
  
//   const boxCheckedHandler = (e) => {
//     const { checked } = e.target
//     debugger
//     const colId = props.node.column.colId
//     props.node.setDataValue(colId, checked)
//     // debugger
//     // clicked(checked)
//   }
// }
const CheckboxRenderer = (props) => {

  const dispatch = useDispatch()
  const [user, setUser] = useState({
    id: props.node.data.id,
    vaccinated: props.node.data.vaccinated
  })
  const prevVal = useRef({ user })
  
  // const updateVaccineStatus = () => {
  //   dispatch(updateUser(user))
  // }

  useEffect(() => {
    if (prevVal.current.user.vaccinated !== user.vaccinated) {
      // updateVaccineStatus()
      dispatch(updateUser(user))
      console.log(user)
    }
  }, [user.vaccinated])
  
  const boxCheckedHandler = (e) => {
    const { checked } = e.target
    setUser({...user, vaccinated: checked})

    // user.vaccinated = checked
    // dispatch(updateUser(user))
    
  }

  
  return (
    <Checkbox 
      style={{ marginTop: '0'}}
      onChange={ boxCheckedHandler } 
      checked={ user.vaccinated }
    />
  )
}

const ManageUsers = () => {
  
  const users = useContext(UserContext)

  const gridOptions = {
    rowSelection: 'single',
    defaultColDef: {
      resizable: true,
      sizeColumnsToFit: true,
      filter: true,
      sortable: true,
    },
    onGridReady: function (params) {
      params.api.sizeColumnsToFit()
      window.addEventListener('resize', function() {
        setTimeout(function() {
          setTimeout(function () {
            params.api.sizeColumnsToFit()
          })
        })
      })
    },
    columnDefs: [
      { headerName: 'ID', field: 'id', hide: true },
      { headerName: 'VACCINATED', 
        field: 'vaccinated',
        cellRenderer: 'checkboxRenderer',
        // cellRendererParams: {
        //   clicked: function(user, status) {
        //     updateVaccineStatus(user, status)
        //   }
        // },      
      },
      { headerName: 'FIRST NAME', field: 'first_name'},
      { headerName: 'LAST NAME', field: 'last_name'},
      
      { headerName: 'EMAIL', field: 'email'},
      { headerName: 'ROLE', field: 'role'},
      { headerName: 'DEPARTMENT', field: 'department'},
    ],
    frameworkComponents: {
      checkboxRenderer: CheckboxRenderer,
    }
  }
  const rowData = users ?
    users.map((u, i) => ({
      id: u.id,
      vaccinated: u.vaccinated,
      first_name: u.first_name,
      last_name: u.last_name,
      
      email: u.email,
      role: u.role,
      department: u.department,
    }))
    :
    null

  return (
    <div>
      <div className='ag-theme-balham centered' style={{ width: '100%' }}>
        <AgGridReact
          rowData={ rowData }
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
          gridOptions={ gridOptions }
          domLayout='autoHeight'
          >
        </AgGridReact>
      </div>
    </div>
  )

}

export default ManageUsers
