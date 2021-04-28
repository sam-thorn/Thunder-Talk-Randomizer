import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { createRandomList, humans } from './appHelper'

function App (props) {
    const [seedHumans, setSeedHumans] = useState(humans)
    const [list, setList] = useState([])

    useEffect(() => {
    setList(createRandomList(seedHumans))
  }, [])

  return (
    <>
      <div className='app container'>
        <div className='header'>
          <h1>Jared's Astonishing Randomizer of Humans</h1>
        </div>
      
        <div className='list'>
          <h1>Seed list of Humans</h1>
          <ul>
            {humans.map(human => (
              <li key={human}>{human}</li>
            ))}
          </ul>
        </div>
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
