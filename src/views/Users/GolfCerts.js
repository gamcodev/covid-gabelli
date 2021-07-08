import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import { fetchVisitors } from '../../redux/modules/Visitors/actions'

const GolfCerts = () => {

  const dispatch = useDispatch()
  const visitors = useSelector(state => state.visitors || [])
  
  useEffect(() => {
    dispatch(fetchVisitors())
  }, [])

  const golfers = visitors?.filter(v => v.visit_location === 'golf')

  const gridOptions = {
    rowSelection: 'single',
    defaultColDef: {
      resizable: true,
    },
    onGridReady: function (params) {
      params.api.sizeColumnsToFit()
      window.addEventListener('resize', function
      () {
        setTimeout(function () {
          setTimeout(function () {
            params.api.sizeColumnsToFit()
          })
        })
      })
    },
    columnDefs: [
      { headerName: 'EVENT', field: 'visit_location' },
      { headerName: 'FIRST NAME', field: 'first_name'},
      { headerName: 'LAST NAME', field: 'last_name'},
      { headerName: 'EMAIL', field: 'email'},
      { headerName: 'PHONE', field: 'phone'},
      { headerName: 'APPROVAL', field: 'approval' },
      { headerName: 'FEVER', field: 'fever'},
      { headerName: 'COUGH', field: 'cough'},
      { headerName: 'POSITIVE', field: 'positive'  },
      { headerName: 'QUARANTINED', field: 'quarantined' },
      { headerName: 'TRAVELED', field: 'travel'},
      { headerName: 'PUBLIC TRANSIT', field: 'public_transit' },
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
        return "NO"
      case 1:
        return "YES"
      case null:
        return "NO"
      default:
        return "NO"
    }
  }


  const rowData = golfers?.map((s, i) => ({
    visit_location: s.visit_location,
    first_name: s.first_name,
    last_name: s.last_name,
    email: s.email,
    phone: s.phone,
    approval: permitKey(s.approval),
    fever: qKey(s.fever),
    cough: qKey(s.cough),
    positive: qKey(s.positive),
    quarantined: qKey(s.quarantined),
    travel: qKey(s.travel),
    public_transit: qKey(s.public_transit),
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

export default GolfCerts
