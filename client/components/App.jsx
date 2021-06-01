import React, { useEffect, useState, forceUpdate } from 'react'

import { createRandomList } from './appHelper'

function App (props) {
  // const [seedHumans, setSeedHumans] = useState(humans)
  const [humans, setHumans] = useState(["Jared", "Sam", "Ulysses"])
  const [list, setList] = useState([])
  const [formEntry, setFormEntry] = useState([])
  let trigger = 0

  useEffect(() => {
    setHumans(humans)
  }, [trigger])

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
    let array = humans

    array.splice(index, 1)
    setHumans([...array])
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
            Add a name:
            <input type='text' name='name' onChange={handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <div className='list'>
          <h1>Seed list of Humans</h1>
          <button onClick={randomise}>Randomise</button>
          <ul>
            {humans.map(human => (
              <><li key={human}>{human}</li><button className={human} onClick={handleDelete}>X</button></>
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
