import React, { useState } from 'react'

import { createRandomList } from './appHelper'

function App (props) {
  const [humans, setHumans] = useState(['Jared', 'Sam', 'Ulysses'])
  const [list, setList] = useState([])
  const [formEntry, setFormEntry] = useState([])

  function randomise () {
    setList(createRandomList(humans))
  }

  function handleChange (event) {
    setFormEntry(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    setHumans([
      ...humans,
      formEntry
    ])
    event.target.reset()
  }

  const handleDelete = (event) => {
    const name = event.target.className
    const index = humans.indexOf(name)
    const array = humans

    array.splice(index, 1)
    setHumans([...array])
  }

  return (
    <>
      <div className='app-container'>

        {/* header */}
        <div className='header'>
          <h1>Jared and Sam's Astonishing Randomizer of Humans</h1>
        </div>

        {/* Inputs bar */}

        {/* Lists */}
        <div className='body-container'>

          <div className='list-container'>
            <div className='list-form'>
              <form onSubmit={handleSubmit}>
                <label>
                  Add a name:
                  <input type='text' name='name' onChange={handleChange} />
                </label>
                <input type='submit' value='Submit' />
              </form>
            </div>
            <div className='list-names'>
              <h1>Seed list of Humans</h1>
              <ul>
                {humans.map(human => (
                  <><li key={human}><button className={human} onClick={handleDelete}>X</button>  {human}</li></>
                ))}
              </ul>
            </div>
          </div>
          <div className='randomiser-container'>
            <button onClick={randomise}>Randomise</button>
            <div>
              <h1>Random Humans</h1>
              <ul>
                {list.map(person => (
                  <div className='match_button_height' key={person}>{person}</div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
