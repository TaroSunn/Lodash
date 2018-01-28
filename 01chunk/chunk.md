
> The time is out of joint: O cursed spite, That ever I was born to set it right.                                                                                       --莎士比亚

# 最艰难的第一步

最近学习遇到了些障碍，浮躁浮躁又浮躁。很难静下心来做一件事，北京的寒风也难以让我冷静下来.

之前一直很想找个源码读读，太懒，总是各种理由敷衍自己.于是下定决心迈出第一步，读Lodash源码!

就从api的一个开始读！

## [chunk.js](https://github.com/lodash/lodash/blob/master/chunk.js)

### 先看一下例子

```
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
chunk函数主要想实现的功能是:传入一个数组，指定分割值，输出分割后的数组

### 看一下chunk.js的源码
```
import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
```
ok下面开始分析：
 1. 首先定义一个函数 `` chunk`` 需要传递两个参数：一个数组：`` array``，一个分割值：`` size`` 

2.  先举个栗子，如果我输入的数组是 :``array = [0,1,2]`` 分割值是: ``size = 1``,最终应该返回一个这样的数组: ``[[0],[1],[2]]``.
  
    再比如``array = [0,1,2,3]``,分割值是: ``size = 3``,那么结果就是:``[[0,1,2],[3]]``,有没有发现规律（样本这么少发现才怪,逃...

3. 通过源码可以发现数组的 ``length`` 与``size``有密切关联.

    也就是说数组的长度是4,分割值为1时,应该返回四个数组;
    
    当分割值为2时,应该返回两个数组;
    
    当分割值为3时,应该返回2个数组;
    
    当分割值为4时,应该返回一个数组.
    
    那么问题来了,当分割值为3时,``4/3=1.3333``怎么确保割后的数组长度为2呢.
    
    于是就需要引入``Math.ceil``这个方法,[Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) 表示大于或等于给定数字的最小整数.

    再举个栗子
    ```
    Math.ceil(.95);    // 1
    Math.ceil(4);      // 4
    Math.ceil(7.004);  // 8
    Math.ceil(-0.95);  // -0
    Math.ceil(-4);     // -4
    Math.ceil(-7.004); // -7
    ```

4. 那么有了最关键的部分，接下来就是分割数组了,这个方法比较常用就用``Array.prototype.slice`` 方法实现,通过循环把分割的数组一个一个传到一个新数组中去.
5. 大致思路就是这样,接下来再次有请源码上场:

```
function chunk(array, size) {
  size = Math.max(size, 0); // 寻找一组数中最大的值

  const length = array == null ? 0 : array.length; // 定义length的值 即array的length值

  if (!length || size < 1) {
    return []; // 如果length 为0 或者size 小于1的话 返回一个空数组
  }

  let index = 0;  //定义index,用于保存分割值

  let resIndex = 0; // 定义resIndex,用于保存数组下标

  const result = new Array(Math.ceil(length / size)); //定义一个 result 是一个只有数组长度的数组,通过length和size确定分割后数组的长度

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size)); // slice()方法 与原生Array.prototype.slice()用法一样

    // 分析一下： array:[0,1,2],size 1 为例 那么 length:3

    // result[0] = [0,1,2].slice(0,1) 即 result[0] =[0] ;index=1 resIndex = 1

    // while(1<3) result[1] = [0,1,2].slice(1,1+1) result[1] = [1] ;index = 2 resIndex = 2

     // while(2<3) result[2] = [0,1,2].slice(2,2+1) result[2] = [2] ;index = 3 resIndex = 3

     // while(3<3) 结束循环
  }
  return result; // 返回最终的数组
}
```

### 自己试(can)着(kao)写一个

```
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

console.log(chunk([1, 2, 3], 1)) // [[1], [2], [3]]

console.log(chunk([1, 2, 3, 4], 2)) // [[1, 2], [3,4]]

console.log(chunk([1, 2, 3, 4], 3)) // [[1, 2, 3], [4]]

```

# 最后
这样一步一步的分析,其实也不(tai)难(nan)。从网上参考了一些资料,对我解读源码有很大的帮助。最后由衷的感谢：[lodash源码解析——chunk函数](https://segmentfault.com/a/1190000012025488#articleHeader2)这篇文章对我的帮助,写的通俗易懂
