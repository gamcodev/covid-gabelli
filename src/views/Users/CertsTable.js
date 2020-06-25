import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const CertsTable = (props) => {

  const gridOptions = {
    rowSelection: 'single',
    defaultColDef: {
      resizable: true,
      sizeColumnsToFit: true,
    },
    columnDefs: [
      { headerName: 'FIRST NAME', field: 'first_name', width: 95, resizable: true},
      { headerName: 'LAST NAME', field: 'last_name', width: 100, resizable: true},
      { headerName: 'DEPARTMENT', field: 'department', width: 150, resizable: true},
      { headerName: 'FEVERresponses.', field: 'fever', width: 100, resizable: true},
      { headerName: 'COUGH', field: 'cough', width: 100, resizable: true},
      { headerName: 'POSITIVE', field: 'positive', width: 100, resizable: true  },
      { headerName: 'QUARANTINED', field: 'quarantined', width: 100, resizable: true },
      { headerName: 'TRAVELED', field: 'travel', width: 100, resizable: true},
      { headerName: 'GATHERING', field: 'gathering', width: 100, resizable: true },
      { headerName: 'PUBLIC TRANSIT', field: 'public_transit', width: 100, resizable: true },
      { headerName: 'PERMITTED', field: 'permitted', width: 100, resizable: true },
    ]
  }

  const qKey = (r) => {
    switch(r) {
      case true:
        return "YES"
      case false:
        return "NO"
      case null:
        return ""
      default:
        return ""
    }
  }
  const permitKey = (r) => {
    switch(r) {
      case 0:
        return "YES"
      case 1:
        return "NO"
      case null:
        return "NO"
      default:
        return "NO"
    }
  }

  const users = props.users

  const rowData = users?.map((s, i) => ({
      first_name: s.first_name,
      last_name: s.last_name,
      department: s.department,
      fever: qKey(s.responses?.fever),
      cough: qKey(s.responses?.cough),
      positive: qKey(s.responses?.positive),
      quarantined: qKey(s.responses?.quarantined),
      travel: qKey(s.responses?.travel),
      gathering: qKey(s.responses?.gathering),
      public_transit: qKey(s.responses?.public_transit),
      permitted: permitKey(s.responses?.status),
    }))

  return (
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
  )
}

export default CertsTable
