import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVisitors } from '../../redux/modules/Visitors/actions'
import EventCertsTable from './EventCertsTable'
import { ScreeningHeader } from './GolfCerts'
import ExportCerts from './ExportCerts'


const BeachCerts = () => {

  const dispatch = useDispatch()
  const visitors = useSelector(state => state.visitors.visitors || [])
  
  useEffect(() => {
    dispatch(fetchVisitors())
  }, [])

  const beachers = visitors?.filter(v => v.visit_location === 'beach')

  return (
      <div>
        <ScreeningHeader>
          <div></div>
          <h2>Beach Bash Screening Results</h2>
          <div>
            <ExportCerts
              registrants={ beachers } 
              fileName='beachers' 
            />
          </div>
          </ScreeningHeader>
        <EventCertsTable attendees={ beachers } />
      </div>
    )
}

export default BeachCerts

