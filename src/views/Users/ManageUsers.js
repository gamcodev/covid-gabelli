import React, { useContext } from 'react'
import { UserContext } from './index'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'


const ManageUsers = () => {
  const users = useContext(UserContext)
  console.log(users)

  const gridOptions = {
    rowSelection: 'single',
    defaultColDef: {
      resizable: true,
      sizeColumnsToFit: true,
    },
    columnDefs: [
      { headerName: 'FIRST NAME', field: 'first_name', resizable: true},
      { headerName: 'LAST NAME', field: 'last_name', resizable: true},
      { headerName: 'EMAIL', field: 'email', resizable: true},
      { headerName: 'ROLE', field: 'role', resizable: true},
      { headerName: 'DEPARTMENT', field: 'department', resizable: true},
    ]
  }
  const rowData = users ?
    users.map((u, i) => ({
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
