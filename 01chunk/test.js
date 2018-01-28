function chunk(array, size) {
  var length = array.length
  if (!length || !size || size < 1) {
    return []
  }
  var index = 0
  var resIndex = 0
  var result = new Array(Math.ceil(length / size))
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

console.log(chunk([1, 2, 3], 1)) // [[1], [2], [3]]

console.log(chunk([1, 2, 3, 4], 2)) // [[1, 2], [3,4]]

console.log(chunk([1, 2, 3, 4], 3)) // [[1, 2, 3], [4]]