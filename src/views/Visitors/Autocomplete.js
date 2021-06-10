import React, { useState } from 'react'
import Input from 'muicss/lib/react/input'
import styled from 'styled-components'

const Autocomplete = ({ hosts, setHost }) => {

    
  const [state, setState] = useState({
    activeItem: 0,
    filteredItems: [],
    displayItems: false,
    inputValue: ''
  })

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value
    const filteredItems = hosts.filter(
      (optionName) => optionName.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    )
    setState({
      activeItem: 0,
      filteredItems,
      displayItems: true,
      inputValue: e.currentTarget.value
    })
  }
  const handleClick = (e) => {
    setState({
      activeItem: 0,
      filteredItems: [],
      displayItems: false,
      inputValue: e.currentTarget.innerText
    })
    setHost(e.currentTarget.innerText)
  }

  const filteredList = state.filteredItems.map((optionName, i) => (
    <ListOption key={ i } onClick={ handleClick }>
      <span>{ optionName }</span>
    </ListOption>
  )).slice(0, 10)
  

  return (
    <div>
      <Input 
        name='host'
        label='Please specify the surname of the host employee'
        floatingLabel={true}
        value={state.inputValue}
        onChange={ handleChange }
      />
      { state.displayItems && state.inputValue.length && state.filteredItems.length ? 
      
      <HostList>{ filteredList }</HostList>
      :
        null
      }
    </div>
  )
}

export default Autocomplete

const HostList = styled.div `
  position: absolute;
  margin-top: -19px;
  background-color: #fff;
  width: 200px;
  z-index: 1000;
  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
  box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2);
`

const ListOption = styled.div `
  padding: 0.5rem 1rem;

  &:hover {
    background: rgba(0, 91, 151, 0.5);
  }
`