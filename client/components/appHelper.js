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

  while (rawArray.length > 0) {
    addPersonToList()
  }
  return randomisedList
}
