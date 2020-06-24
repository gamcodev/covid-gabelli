import React, { useEffect } from 'react'
import styled from 'styled-components'
import { fetchSurveys } from '../../redux/modules/Survey/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Waiting } from '../../components/MatchAuthenticated'


const CommentsPage = styled.div `
  padding: 2rem;
`
const Comments = (props) => {
  const dispatch = useDispatch()
  const surveys = useSelector(state => state.survey.surveys || [])
  const makingRequestToAPI = useSelector(state => state.appTransactions.makingRequestToAPI)

  useEffect(() => {
    dispatch(fetchSurveys())
  }, [])

  const comments = surveys?.filter(s => s.comments !== "").map(c => (
    <p><strong>{c.user.first_name} {c.user.last_name}:</strong> {c.comments}</p>
  ))

  return (
    <div>
      { makingRequestToAPI ?
        <Waiting />
        :
        <CommentsPage>
          {comments}
        </CommentsPage>
      }
    </div>
  )
}

export default Comments
