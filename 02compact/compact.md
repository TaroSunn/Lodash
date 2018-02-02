>有一般天罡数，该三十六般变化；有一般地煞数，该七十二般变化 --《西游记》
## [Compact.js](https://github.com/lodash/lodash/blob/47a6d538f5759fc5788f1bbb147caa7fde6b0a92/compact.js)
Lodash第二个api``_.compact(array)``
指:删除数组中所有通过布尔值可以转换为false的值,如``null``、``false``、``''``、``0``、``undefinded``、``NaN``,返回一个新数组.

举个例子:
```
_.compact([0, 1, false, 2, '', 3]);

// => [1, 2, 3]
```
### 先看一下compact.js 的源码

```
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export default compact
```
### 分析一下源码

1. 首先创建一个函数``compact`` 传递一个参数.

2. 初始化一个变量``resIndex``为0,用于记录数组索引.

3. 创建一个空数组``result``过滤后数组值都保存在这里面.

4. 先判断参数是否为空,如果是空,这返回一个数组.

5. 利用``for of ``循环,将``null``、``false``、``0``、``undefinded``、``NaN``、``''``过滤除去.

### 思考
compact函数用了es6里面的``for of``方法,那么也可以用``for``循环的方法,来实现

#### for循环第一版
```
function compact (array) {
  const result = []
  if (array === null) {
    return result
  }
  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    if (arr[i]) {
      result.push(value)
    }
  }
  return result
}
```
#### for循环第二版
```
function compact (array) {
  let resIndex = 0
  const result = []
  if (array === null) {
    return result
  }
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}
```
第一版跟第二版的区别在添加数组的方式不同,第一版用的是push,而第二版用的是索引赋值.从速度上来说第二版会更快

#### while循环
```
function compact (array) {
  const result = [] 
  if (array === null) {
    return result
  }
  let index = 0 
  let resIndex = 0 
  while (index < arr.length) {
    let value = array[index]
    if (value) {
      result[resIndex++] = value
    }
    index++
  }
  return result
}
```
#### map方法
```
function compact (array) {
  const result = []
  if (array === null) {
    return result
  }
  array.map(function (value) {
    if(value){
      result.push(value)
    }
  })
  return result
}
```
#### for in 循环
```
function compact (array) {
  const result = []
  if (array === null) {
    return result
  }
  let resIndex = 0
  for (let index in array) {
    const value = array[index]
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}
```
### 例外
通常我们在开发过程中,不需要把数组里面的0去掉,稍微改一下源代码就可以实现这个功能
```
function compact (array) {
  let resIndex = 0 
  const result = [] 
  if (arr === null) {
    return result
  }
  for (const value of array) {
    if (value || value === 0) {
      result[resIndex++] = value
    }
  }
  return result
}
```

### 参考资料
 1. [Lodash源码讲解(3)-compact函数](https://dreamapple.me/2017/08/18/lodash%E6%BA%90%E7%A0%81%E8%AE%B2%E8%A7%A3-3/)
 2. https://github.com/Hushabyme/lodash-comments/blob/master/compact.js
 3. https://github.com/yeyuqiudeng/pocket-lodash/blob/master/compact.md
