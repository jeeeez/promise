## Promise 实现的几个重点

1. 要保证then方法回调的时序,即第一个 promise 兑现的时候,后面链式调用的 then 方法参数回调依次调用,但同时这些方法又不能在执行 then 方法的时候立即执行，必须等待前面 promise 兑现。

解决办法：引入一个函数数组队列来保存 then 方法的参数，待到 promise 兑现之后再执行。

```javascript
var Promise = function(resolver){
  if (!isFunction(resolver))
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  if(!(this instanceof Promise)) return new Promise(resolver);

  var promise = this;
  promise._value;
  promise._reason;
  promise._status = PENDING;
  promise._resolves = [];
  promise._rejects = [];
  
  var resolve = function(value){
    //状态转换为FULFILLED 
    //执行then时保存到_resolves里的回调，
    //如果回调有返回值，更新当前_value
  }
  var reject = function(reason){
    //状态转换为REJECTED
    //执行then时保存到_rejects里的回调，
    //如果回调有返回值，更新当前_rejects
  }
  
  resolver(resolve,reject);
}
```


2. 如果 then 方法执行的时候前面的 promise 已经兑现了,那后面链式调用 then 方法的回调应该立即执行,那如何知道它已经兑现了?

解决办法：引入 promise 的三个状态

3. promise/A+ 规范规定所有的then的2个参数的回调都应该是异步的,必须在 then 方法返回之后异步执行,对于我们实现来说就是必须把回调加入到下一个函数队列循环中。

4. 关于规范中 `promise2 = promise1.then(onFulfilled, onRejected);` 仔细看规范知道,这里可能会有3个 promise，即 promise1，onFulfilled返回的 thenpromise，promise2，promise2 必须在 thenpromise 兑现之后才能 reslove。




```javascript
var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('success');
            },2000);
    }).then(function success(v){
            return v;
        },function fail(err){
            return err;
            });
```
