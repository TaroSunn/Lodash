// function concat () {
//   var length = arguments.length
//   if (!length) {
//     return []
//   }
//   var args = new Array(length - 1),
//     array = arguments[0],
//     index = length
//   while (index--) {
//     args[index - 1] = arguments[index]
//   }
//   return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1))
// }

function arrayPush (array, values) {
  var index = -1, //
    length = values.length, // 数组2的长度
    offset = array.length // 数组1的长度
  while (++index < length) {
    // console.log(index + offset)
    array[offset + index] = values[index]
  }
  return array
}
// console.log(arrayPush([], [1, 2, 3, 4]))

function copyArray (source, array) {
  var index = -1,
    length = source.length

  array || (array = Array(length))

  while (++index < length) {
    array[index] = source[index]
  }
  return array
}

function baseFlatten (array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length

  // predicate || (predicate = r)
  result || (result = [])

  while (++index < length) {
    var value = array[index]
    if (depth > 0 && true) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        arrayPush(result, value)
        console.log(result)
      }
    } else if (!isStrict) {
      result[result.length] = value
    }
  }
  return result
}
var arr = [1, [2, [3, [4]]]]
baseFlatten(arr, 1)
