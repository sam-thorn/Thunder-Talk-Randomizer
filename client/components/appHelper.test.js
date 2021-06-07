import { createRandomList, noDuplicates } from './appHelper'

test('createRandomList creates list containing correct amount of items', () => {
  const arr = ['Jared', 'Sam', 'Skeletor', 'Gargamel']
  const random = createRandomList(arr)
  expect(random).toHaveLength(4)
})

test('noDuplicates returns true when the string is not present in the array', () => {
  const str = 'Papa Smurf'
  const arr = ['Jared', 'Sam', 'Skeletor', 'Gargamel']
  expect(noDuplicates(str, arr)).toBe(true)
})

test('noDuplicates returns false when the string is present in the array', () => {
  const str = 'Skeletor'
  const arr = ['Jared', 'Sam', 'Skeletor', 'Gargamel']
  expect(noDuplicates(str, arr)).toBe(false)
})