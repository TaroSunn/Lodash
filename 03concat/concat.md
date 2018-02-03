## Lodash源码-concat

### 栗子

```
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```
创建一个新数组，将array与任何数组 或 值连接在一起。

### 源码

```
/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

```
在源码的最后又涉及了三个其他函数,``isArray()``这个方法调用的是原生``Array.isArray()``.所以磨刀不误砍柴工,在分析``concat()``之前,先解决这三个函数

#### arrayPush()

见名知义,实现的是与原生``push``类似的功能.把一个数组添加到另一个数组的后面,例如:
```
var values = [1,2,3,4,5]
var array = [1,2,3,4]
console.log(arrayPush(array,values)) 
// => [1,2,3,4,1,2,3,4,5]
```
吼,先看一下源码
```
/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
```
分析源码之前,先思考一下怎么实现.
 1. 数组1:arr1 = [1,2,3]
 2. 数组2:arr2 = [4,5,6]
 3. 返回数组1:arr1 = [1,2,3,4,5,6]
 4. 那么,数组1 arr1[3]对应的值为数组2 arr2[0]
 5. arr1[4] = arr2[1]
 6. arr1[5] = arr2[2]
 7. arr1[6] = arr2[3]

好,那再看看源码
 1. 首先定义一个``arrayPush()`` 函数,有两个参数 数组``array``和数组``values``.
 2. 定义一个变量``index`` 用于数组记录索引初始值为``-1``.``length``值为第二个数组的个数,``offset``值为第一个数组的个数.
 3. 循环,这里详细分析一下
    1. 第一次循环 ``0<3`` 成立, ``array[3+0] = values[0]`` 即``array[3] = 4``
    2. 第二次循环 ``1<3`` 成立, ``array[3+1] = values[1]`` 即``array[4] = 5``
    3. 第三次循环 ``2<3`` 成立, ``array[3+2] = values[2]`` 即``array[5] = 6``
    4. 第四次循环 ``3<3`` 不成立推出循环
  4. 返回 ``array``

#### copyArray()

把一个数组的值拷贝替换到另一个数组里面对应的值
举个例子
```
var values = ['a','b','c']
var array = [1,2,3,4,5]
console.log(values,array)
// =>['a','b','c',4,5]
```
看一下源码:
```
/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

```