// export const humans = [
//   'Jared',
//   'Erin',
//   'Johann',
//   'Sam',
//   'Yuan',
//   'Rogan',
//   'Rebecca',
//   'Johnny',
//   'Grace',
//   'Sarah',
//   'Kateti',
//   'Jonathan',
//   'Karol'
// ]

// function addPersonToList () {
//   x = randomRange(0, (humans.length - 1)) //Randomise person
//   randomisedList.push(humans[x]) //Add person to randomised list
//   humans.splice(x,1) //Remove person from seed list
// }

function randomRange (myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

export function createRandomList (arr) {
  var rawArray = [...arr]
  var randomisedList = []

  function addPersonToList () {
    var x = randomRange(0, (rawArray.length - 1)) // Randomise person
    randomisedList.push(rawArray[x]) // Add person to randomised list
    rawArray.splice(x, 1) // Remove person from seed list
  }

  // function shufflePersonToTop(name) {
  //   const isName = (element) => element === name
  //   const toDelete = randomisedList.findIndex(isName)
  //   randomisedList.splice(toDelete, 1)
  //   randomisedList.unshift(name)
  // }

  while (rawArray.length > 0) {
    addPersonToList()
  }
  // shufflePersonToTop('Sarah')
  // shufflePersonToTop('Rebecca')
  return randomisedList
}
