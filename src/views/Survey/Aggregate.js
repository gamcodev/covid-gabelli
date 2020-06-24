import React from 'react'
import styled from 'styled-components'
import { withRouter, NavLink } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'

const AggregateContainer = styled.div `
  padding: 0 1rem 1rem 1rem;
  text-align: center;
`
const AggregateRow = styled.div `
  display: inline-grid;
  grid-template-columns: repeat(6, 16.6%);
  width: 100%
`
const ComfortRow = styled.div `
  display: inline-grid;
  grid-template-columns: repeat(5, 20%);
  width: 100%
`
const CommentsButton = styled.button `
  width: 30%;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background: #6dcff6;
`
const Aggregate = (props) => {
  const s = props.surveys

  const sNm = s.filter(s => s.needs_met === 4).length
  const nM = s.filter(s => s.needs_met === 3).length
  const nNm = s.filter(s => s.needs_met === 2 || s.need_met === null).length
  const noNm = s.filter(s => s.needs_met === 1).length
  const sNnm = s.filter(s => s.needs_met === 0).length

  const sE = s.filter(s => s.effectiveness === 4).length
  const e = s.filter(s => s.effectiveness === 3).length
  const nE = s.filter(s => s.effectiveness === 2 || s.effectiveness === null).length
  const noE = s.filter(s => s.effectiveness === 1).length
  const sNE = s.filter(s => s.effectiveness === 0).length

  const sCi = s.filter(s => s.checkins === 4).length
  const cI = s.filter(s => s.checkins === 3).length
  const nCi = s.filter(s => s.checkins === 2 || s.checkins === null).length
  const noCi = s.filter(s => s.checkins === 1).length
  const sNci = s.filter(s => s.checkins === 0).length

  const sTc = s.filter(s => s.team_connected === 4).length
  const tC = s.filter(s => s.team_connected === 3).length
  const nTc = s.filter(s => s.team_connected === 2 || s.team_connected === null).length
  const noTc = s.filter(s => s.team_connected === 1).length
  const sNtc = s.filter(s => s.team_connected === 0).length

  const sOc = s.filter(s => s.office_comfort === 4).length
  const oC = s.filter(s => s.office_comfort === 3).length
  const nOc = s.filter(s => s.office_comfort === 2 || s.office_comfort === null).length
  const noOc = s.filter(s => s.office_comfort === 1).length
  const sNoc = s.filter(s => s.office_comfort === 0).length

  const limit = s.filter(s => s.limiting === true).length
  const purpose = s.filter(s => s.purpose === true).length
  const temp = s.filter(s => s.temperature === true).length
  const tested = s.filter(s => s.tested === true).length
  const dc = s.filter(s => s.deep_cleaning === true).length
  const ic = s.filter(s => s.intraday_clean === true).length
  const noPt = s.filter(s => s.no_public_transit === true).length

  const high = s.filter(s => s.high_risk === true).length
  const dep = s.filter(s => s.dependent_coverage === true).length
  const pTonly = s.filter(s => s.public_trans_only === true).length
  const other = s.filter(s => s.other_reason === true).length
  const none = s.filter(s => s.no_concerns === true).length



  // const viewComments = () => {
  //   const comments = props.surveys.filter(s => s.comments !== "").map(s => s.comments)
  //   props.history.push({
  //     pathname: '/results/comments',
  //     comments: comments
  //   })
  // }
  return (
    <AggregateContainer>
      <h2>Aggregate Survey Results</h2>
      <AggregateRow>
        <div></div>
        <div><strong>Strongly Agree</strong></div>
        <div><strong>Agree</strong></div>
        <div><strong>Neutral</strong></div>
        <div><strong>Disagree</strong></div>
        <div><strong>Strongly Disagree</strong></div>
      </AggregateRow>
      <AggregateRow>
        <div><strong>Needs Met:</strong></div>
        <div>{sNm}</div>
        <div>{nM}</div>
        <div>{nNm}</div>
        <div>{noNm}</div>
        <div>{sNnm}</div>
      </AggregateRow>

      <AggregateRow>
        <div><strong>Effective WFH:</strong></div>
        <div>{sE}</div>
        <div>{e}</div>
        <div>{nE}</div>
        <div>{noE}</div>
        <div>{sNE}</div>
      </AggregateRow>

      <AggregateRow>
        <div><strong>Regular Checkins:</strong></div>
        <div>{sCi}</div>
        <div>{cI}</div>
        <div>{nCi}</div>
        <div>{noCi}</div>
        <div>{sNci}</div>
      </AggregateRow>

      <AggregateRow>
        <div><strong>Feel Connected: </strong></div>
        <div>{sTc}</div>
        <div>{tC}</div>
        <div>{nTc}</div>
        <div>{noTc}</div>
        <div>{sNtc}</div>
      </AggregateRow>
      <hr/>
      <h4><strong>Comfort Level About Returning To The Office:</strong></h4>
      <ComfortRow>
        <div>Ready To Come Back: {sOc}</div><div>Comfortable: {oC} </div><div>Neutral: {nOc}</div><div>Uncomfortable: {noOc} </div><div>Very Uncomfortable: {sNoc}</div>
      </ComfortRow>
      <hr />
      <h4>What would increase comfort: </h4>
      <AggregateRow>
        <div>Limiting employees: {limit}</div><div>Purpose only: {purpose} </div><div>Temperature: {temp}</div><div>Testing: {tested}</div><div>Deep clean: {dc} </div><div>Intraday clean: {ic}</div><div>No public transit: {noPt}</div>
      </AggregateRow>
      <hr />
      <h4>Concerns: </h4>
      <AggregateRow>
        <div>HighRisk: {high}</div><div>Dependent coverage: {dep} </div><div>Public trans only: {pTonly}</div><div>Other: {other}</div><div>No Concerns: {none} </div>
      </AggregateRow>
      <hr />
      <NavLink to='/survey/results/comments' >
        <CommentsButton >View Individual Comments <MdArrowForward style={{paddingLeft: '10px', paddingTop: '10px'}} /></CommentsButton>
      </NavLink>

    </AggregateContainer>
  )
}




export default withRouter(Aggregate)
