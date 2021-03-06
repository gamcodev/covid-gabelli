import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSurveys } from '../../redux/modules/Survey/actions'
import ResultsTable from './ResultsTable'
import { Waiting } from '../../components/MatchAuthenticated'

const Results = (props) => {

  const dispatch = useDispatch()
  const surveys = useSelector(state => state.survey.surveys || [])
  const makingRequestToAPI = useSelector(state => state.appTransactions.makingRequestToAPI)

  useEffect(() => {
    dispatch(fetchSurveys())
  }, [])


  return (
    <div>
      { makingRequestToAPI ?
        <Waiting />
        :
        <ResultsTable surveys={surveys} />
      }
    </div>
  )
}

export default withRouter(Results)
