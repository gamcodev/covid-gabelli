import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { GoCheck } from 'react-icons/go'
import { GiCancel } from 'react-icons/gi'
import Aggregate from './Aggregate'

const ResultsTable = (props) => {

  const surveys = props.surveys

  const q1Key = (r) => {
    switch(r) {
      case 0:
        // return "strongly disagree"
        return "1"
      case 1:
        // return "disagree"
        return "2"
      case 2:
        // return "neutral"
        return "3"
      case 3:
        // return "agree"
        return "4"
      case 4:
        // return "strongly agree"
        return "5"
      default:
        // return "neutral"
        return ""
    }
  }

  const q2Key = (r) => {
    switch(r) {
      case 0:
        return "very uncomfortable"
      case 1:
        return "uncomfortable"
      case 2:
        return "neutral"
      case 3:
        return "comfortable"
      case 4:
        return "very comfortable"
      default:
        return "neutral"
    }
  }
  // const tF = (r) => {
  //   let element
  //   if (r === true) {
  //     element = <GoCheck />
  //   } else if (r === false) {
  //     element = <GiCancel />
  //   } else {
  //     element = <div></div>
  //   }
  //   return element
  // }
  const tF = (r) => {
    let icon = null
    switch(r) {
      case true:
        icon = `${<GoCheck />}`
      case false:
        icon = `${<GiCancel />}`
      default:
        icon = `${<GoCheck />}`
    }
    return icon
  }


  const gridOptions = {
    rowSelection: 'single',
    defaultColDef: {
      resizable: true,
      sizeColumnsToFit: true,
    },
    columnDefs: [
      { headerName: 'FIRST NAME', field: 'first_name', width: 80, resizable: true},
      { headerName: 'LAST NAME', field: 'last_name', width: 80, resizable: true},
      { headerName: 'DEPARTMENT', field: 'department', width: 80, resizable: true},
      { headerName: 'NEEDS MET', field: 'needs_met', width: 80, resizable: true},
      { headerName: 'EFFECTIVE WFH', field: 'effectiveness', width: 80, resizable: true},
      { headerName: 'TEAM CHECKINS', field: 'checkins', resizable: true, width: 80, resizable: true  },
      { headerName: 'TEAM CONNECTED', field: 'team_connected', width: 80, resizable: true },
      { headerName: 'OFFICE COMFORT', field: 'office_comfort', width: 80, resizable: true},
      { headerName: 'LIMITING', field: 'limiting', width: 80, resizable: true },
      { headerName: 'PURPOSE', field: 'purpose', width: 80, resizable: true },
      { headerName: 'TEMPERATURE', field: 'temperature', width: 80, resizable: true },
      { headerName: 'TESTED', field: 'tested', width: 80, resizable: true },
      { headerName: 'DEEP CLEAN', field: 'deep_clean', width: 80, resizable: true },
      { headerName: 'INTRADAY CLEAN', field: 'intraday_clean', width: 80 },
      { headerName: 'NO_PUBLIC_TRANS', field: 'no_public_transit', width: 80, resizable: true},

    ]
  }
  const rowData = surveys ?
    surveys.map((s, i) => ({
      first_name: s.user.first_name,
      last_name: s.user.last_name,
      department: s.user.department,
      needs_met: q1Key(s.needs_met),
      effectiveness: q1Key(s.effectiveness),
      checkins: q1Key(s.checkins),
      team_connected: q1Key(s.team_connected),
      office_comfort: q2Key(s.office_comfort),
      purpose: s.purpose,
      temperature: s.temperature,
      tested: s.tested,
      deep_clean: s.deep_clean,
      intraday_clean: s.intraday_clean,
      no_public_transit: s.no_public_transit,

    }))
    :
    null

    return (
      <div>
        <Aggregate surveys={surveys} />
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

export default ResultsTable
