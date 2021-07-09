import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchVisitors } from '../../redux/modules/Visitors/actions'
import EventCertsTable from './EventCertsTable'
import ExportCerts from './ExportCerts'

const GolfCerts = () => {

  const dispatch = useDispatch()
  const visitors = useSelector(state => state.visitors.visitors || [])
  console.log(visitors)
  useEffect(() => {
    dispatch(fetchVisitors())
  }, [])

  const golfers = visitors?.filter(v => v.visit_location === 'golf')


  return (
      <div>
        <ScreeningHeader>
          <div></div>
          <h2>Golf Outing Screening Results</h2>
          <div>
            <ExportCerts
              registrants={ golfers } 
              fileName='golfers' 
            />
          </div>
        </ScreeningHeader>
        <EventCertsTable attendees={ golfers } />
      </div>
    )
}

export default GolfCerts

export const ScreeningHeader = styled.header `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 20% 60% 20%;
  text-align: center;
  margin-top: 15px;
  h2 {
    margin-top: 0;
  }
`