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

/*  分析
 * 如果数组1 [1,2,3,4] 数组2 [1,2,3,4] => [1,2,3,4,1,2,3,4]
 * 需要循环
 * 
*/

function arrayPush (array, values) {
  var index = -1, // 
    length = values.length, // 数组2的长度
    offset = array.length // 数组1的长度
  while (++index < length) {
    console.log(index+offset)
    array[offset + index] = values[index]
  }
  return array
}
console.log(arrayPush([1, 2, 3, 4], [1, 2, 3, 4]))



