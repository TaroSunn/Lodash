/* @Math.max 函数返回大于或等于一个给定数字的最小整数
 * @... 允许一个表达式在期望多个参数（用于函数调用）或多个元素（用于数组字面量）或多个变量（用于解构赋值）的位置扩展。
var a = Math.max(5, 0)
console.log(a)//5

var arr = [111111, 1111, 2, 3]
var max = Math.max(...arr)
console.log(max) //111111
*/
/*
var array = [1, 2, 3, 4, 5]
const length1 = array == null ? 0 : array.length
console.log(length1) // 5
var array1 = []
const length2 = array1 == null ? 0 : array1.length
console.log(length2) // 0
*/
/*
 * @Math.ceil()函数返回大于或等于一个给定数字的最小整数
 * Math.ceil(.95);    // 1
 * Math.ceil(4);      // 4
 * Math.ceil(7.004);  // 8
 * Math.ceil(-0.95);  // -0
 * Math.ceil(-4);     // -4
 * Math.ceil(-7.004); // -7
 *
*/
// var size = 2
// var length = 4
// const result = new Array(Math.ceil(length / size))
// console.log(result) // 2
// var result = new Array(2)
// console.log(result)
/*
 * @ Array.prototpe.slice() 方法返回一个从开始到结束（包括开始但不包括结束）选择的数组的一部分浅拷贝到一个新数组对象 。原始数组不变
 * [1,2,3,4,5].slice(1,3) // 从下标为1开始，包括下标为1的这个数到下标为3但不包括下标为3的这个数 即 [2,3]
*/

// function chunk (array, size) {
//   size = Math.max(size, 0) // 寻找一组数中最大的值

//   const length = array == null ? 0 : array.length // 定义length的值 即array的length值
//   if (!length || size < 1) { // 如果length 为0 或者size 小于1的话 返回一个空数组
//     return []
//   }
//   let index = 0 // 定义index
//   let resIndex = 0 // 定义resIndex
//   const result = new Array(Math.ceil(length / size)) // 定义一个 result 是一个只有数组长度的数组
//   while (index < length) {
//     result[resIndex++] = slice(array, index, (index += size)) // slice()方法 与原生Array.prototype.slice()用法一样
//      // 分析 array:[0,1,2],size 1 为例 那么 length:3
//      // result[0] = [0,1,2].slice(0,1) 即 result[0] =[0] ;index=1 resIndex = 1
//      // while(1<3) result[1] = [0,1,2].slice(1,1+1) result[1] = [1] ;index = 2 resIndex = 2
//      // while(2<3) result[2] = [0,1,2].slice(2,2+1) result[2] = [2] ;index = 3 resIndex = 3
//      // while(3<3) 结束循环
//   }
//   return result
// }

function chunk (array, size) {
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
console.log(chunk([1, 2, 3], 1))

