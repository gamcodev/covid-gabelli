import React, { useState } from 'react'
import Input from 'muicss/lib/react/input'


const Autocomplete = ( { hosts }) => {

  const [state, setState] = useState({
    activeItem: 0,
    filteredItems: [],
    displayItems: false,
    inputValue: ''
  })

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value
    console.log(inputValue)
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
  }

  const filteredList = state.filteredItems.map((optionName, i) => (
    <p key={ i } onClick={ handleClick }>{ optionName }</p>
  )).slice(0, 10)
  

  console.log(state.displayItems)
  console.log(state.filteredItems)
  console.log(state.inputValue.length)
  console.log(state.filteredItems.length)
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
      
      <ul>{ filteredList }</ul>
      :
        null
      }
    </div>
  )
}

export default Autocomplete
