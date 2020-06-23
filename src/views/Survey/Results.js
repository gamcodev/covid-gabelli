import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSurveys } from '../../redux/modules/Survey/actions'
import ResultsTable from './ResultsTable'


const Results = (props) => {

  const dispatch = useDispatch()
  const surveys = useSelector(state => state.survey.surveys || [])
  // console.log(props.location.surveys)
  console.log(surveys)

  useEffect(() => {
      dispatch(fetchSurveys())
  }, [])


  return (
    <div>
      <ResultsTable surveys={surveys} />
    </div>
  )
}

export default Results
