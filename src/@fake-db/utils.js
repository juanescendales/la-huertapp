export const paginateArray = (array, perPage, page) => array.slice((page - 1) * perPage, page * perPage)

export const sortCompare = key => (a, b) => {
  const fieldA = a[key]
  const fieldB = b[key]

  let comparison = 0
  if (fieldA > fieldB) {
    comparison = 1
  } else if (fieldA < fieldB) {
    comparison = -1
  }
  return comparison
}

export const getRandomInt = (min, max) => {
  if (min > max) {
    const temp = max
    /* eslint-disable no-param-reassign */
    max = min
    min = temp
    /* eslint-enable */
  }

  if (min <= 0) {
    return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min
  }
  return Math.floor(Math.random() * max) + min
}

export const randomDate = start => {
  const date = new Date(start.getTime())
  return date
}
