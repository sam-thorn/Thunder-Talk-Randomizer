import React, { useEffect, useState } from 'react'

import { createRandomList } from './appHelper'

function App (props) {
  // const [seedHumans, setSeedHumans] = useState(humans)
  const [humans, setHumans] = useState([])
  const [list, setList] = useState([])
  const [formEntry, setFormEntry] = useState([])

  // useEffect(() => {
  //   setList(createRandomList(seedHumans))
  // }, [])
  function handleChange (event) {
    setFormEntry(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    setHumans([
      ...humans,
      formEntry
    ])
  }

  return (
    <>
      <div className='app container'>
        <div className='header'>
          <h1>Jared and Sam's Astonishing Randomizer of Humans</h1>
        </div>
        {/* to be replaced by form */}
        {/* <div className='list'>
          <h1>Seed list of Humans</h1>
          <ul>
            {humans.map(human => (
              <li key={human}>{human}</li>
            ))}
          </ul>
        </div> */}

        {/* name input form */}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' onChange={handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <div className='list'>
          <h1>Seed list of Humans</h1>
          <ul>
            {humans.map(human => (
              <li key={human}>{human}</li>
            ))}
          </ul>
        </div>


        {/* Output randomised list */}
        <div className='list'>
          <h1>Random Humans</h1>
          <ul>
            {list.map(person => (
              <li key={person}>{person}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
