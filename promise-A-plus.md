# Promise/A+ 规范 

### 术语

1.Promise

    promise 是一个拥有 then 方法的对象或函数，其行为符合 Promise/A+ 规范；

2.thenable

    是一个定义了 then 方法的对象或函数，即“拥有 then 方法”；

### 要求

1.Promise 的状态
    
    一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。

2.等待态（Pending）
   
    处于等待态时，promise 需满足以下条件：
   
    + 可以迁移至执行态或拒绝态

3.执行态（Fulfilled）
    
    处于执行态时，promise 需满足以下条件：
    
    + 不能迁移至其他任何状态
    + 必须拥有一个不可变的终值

4.拒绝态（Rejected）
    
    处于拒绝态时，promise 需满足以下条件：
    
    + 不能迁移至其他任何状态
    + 必须拥有一个不可变的据因

5.Then 方法
    
    一个 promise 必须提供一个 then 方法以访问其当前值、终值和据因。
    promise 的 then 方法接受两个参数：onFulfilled 和 onRejected 必须为函数，如果不是则必须被忽略，且 then 方法必须返回一个 promise 对象。

    ```javascript
    promise.then(onFulfilled, onRejected)
    ```

    onFulfilled 特性：
    + 当 promise 执行结束后其必须被调用，其第一个参数为 promise 的终值
    + 在 promise 执行结束前其不可被调用
    + 其调用次数不可超过一次

    onRejected 特性：
    + 当 promise 被拒绝执行后其必须被调用，其第一个参数为 promise 的据因
    + 在 promise 被拒绝执行前其不可被调用
    + 其调用次数不可超过一次

![](./images/o1.png)

[Promise/A+ 规范](http://malcolmyu.github.io/malnote/2015/06/12/Promises-A-Plus/)


深入实现
http://www.shaynegui.com/promise-aplus-implementation/



http://www.tuicool.com/articles/RzQRV3


https://github.com/ygm125/promise/blob/master/promise.js
