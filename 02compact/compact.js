// compact([0,1,false,2,'',3,null,5,undefined,5])
// [1,2,3,5,5]

// // 定义一个compact 函数 传一个参数
// function compact (arr) {
//   let resIndex = 0 // 定义变量记录索引
//   const result = [] // 定义常量保存数组
//   // 判断数组是否为空
//   if (arr === null) {
//     return result
//   }
//   console.log(result)
//   // for of 循环 获取数组的值
//   for (const value of arr) {
//     if (value) {
//       result[resIndex++] = value
//     }
//   }
//   return result
// }
// // console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))

// for循环直白版
// function compact (arr) {
//   if (arr === null) {
//     return []
//   }
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     // result = arr[i]
//     let value = arr[i]
//     if (arr[i]) {
//       result.push(value)
//     }
//   }
//   return result
// }
// console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))

// for 循环变种
// function compact (arr) {
//   let resIndex = 0
//   const result = []
//   if (arr === null) {
//     return result
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i]
//     if (value) {
//       result[resIndex++] = value
//     }
//   }
//   return result
// }
// console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))

// while 循环

// function compact (arr) {
//   if (arr === null) {
//     return []
//   }
//   const result = [] // 定义一个数组用于保存过滤后的数组
//   let index = 0 //
//   let resIndex = 0 //
//   let value
//   while (index < arr.length) {
//     value = arr[index]
//     if (value) {
//       result[resIndex++] = value
//     }
//     index++
//   }
//   return result
// }
// console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))

// map 方法
// function compact (arr) {
//   if (arr === null) {
//     return []
//   }
//   const result = []
//   arr.map(function (value) {
//     if(value){
//       result.push(value)
//     }
//   })
//   return result
// }
// console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))

// for in 循环
// function compact (arr) {
//   if (arr === null) {
//     return []
//   }
//   const result = []
//   let resIndex = 0
//   for (let index in arr) {
//     const value = arr[index]
//     if (value) {
//       result[resIndex++] = value
//     }
//   }
//   return result
// }
// console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))

// 把零去掉
function compact (arr) {
  let resIndex = 0 // 定义变量记录索引
  const result = [] // 定义常量保存数组
  // 判断数组是否为空
  if (arr === null) {
    return result
  }
  // console.log(result)
  // for of 循环 获取数组的值
  for (const value of arr) {
    if (value || value === 0) {
      result[resIndex++] = value
    }
  }
  return result
}
console.log(compact([0, 1, false, 2, '', 3, null, 5, undefined, 5]))
