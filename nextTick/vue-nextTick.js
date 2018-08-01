// $nextTick目的就是把传进来的函数延迟到dom更新后再使用，所以这里依次优雅降序的使用js的方法来做到这一点。

const callbasks = [];               //用来存储所有需要执行的回调函数
let pending = false;                //用来标志是否正在执行回调函数
let microTimeFunc = null;
let macroTimeFunc = null;
let useMacroTask = false;

//这个函数用来执行callbacks里存储的所有回调函数。
function flushCallbacks () {
  pending = false;
  // copy的复数
  const copies = callbasks.slice(0);
  callbasks.length = 0;
  for (let i = 0, len = copies.length; i < len; i++) {
    copies[i]();
  }  
}

// setTimeout采用的是类似IO观察者，setImmediate采用的是check观察者，而process.nextTick()采用的是idle观察者。
// 三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者
if (typeof setImmediate !== undefined && isNative(setImmediate)) {
  macroTimeFunc = () => {
    setImmediate(flushCallbacks);
  }
} else if (typeof MessageChannel !== undefined && (isNative(MessageChannel) 
|| MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimeFunc = () => {
    port.postMessage(1);
  }
} else {
  macroTimeFunc = () => {
    setTimeout(flushCallbacks, 0);
  }
}
// 如果浏览器支持Promise，那么就用Promise.then的方式来延迟函数调用，Promise.then方法可以将函数延迟到当前函数调用栈最末端，也就是函数调用栈最后调用该函数。从而做到延迟。

if (typeof Promise !== undefined && isNative(Promise)) {
  const p = Promise.resolve()
  microTimeFunc = () => {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    // 在问题uiwebview,承诺。
    // 然后不完全打破,但它可以陷入一种奇怪的状态回调是推入microtask队列的队列不被刷新,直到浏览器需要做一些其他的工作,如处理一个计时器。
    // 因此我们可以“迫使”microtask队列刷新通过添加一个空的计时器。

    // 在部分 iOS 系统下的 UIWebViews 中，Promise.then 可能并不会被清空，因此我们需要添加额外操作以触发  
    if (isIOS) {
      setTimeout(noop);
    }
  }
} else {
  microTimeFunc = macroTimeFunc;
}
// 采用promise实现，有意思的一点是针对ios的UIWebViews进行了优化，强行触发了一次microtask的事件处理
// UIWebView是iOS内置的浏览器控件;
// 系统自带的Safari浏览器就是通过UIWebView实现的;

// UIWebView不但能加载远程的网页资源，还能加载绝大部分的常见文件
// html\htm
// pdf、doc、ppt、txt
// mp4
// … …
export function WithMacroTask (fn : Function): Function {
  return fn._withTask || fn._withTask = function () {
    useMacroTask = true;
    const res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  }
}

export function nextTick (cb ? : Function, ctx ? : Object) {
  let _resolve;
  callbasks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (err) {
        handleError(e, ctx, 'nextTixk');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  })
  if (!pending) {
    pending = true;
    if (useMacroTask) {  // 手动指定使用macroTask方式
      macroTimeFunc();
    } else {
      microTimeFunc();
    }
  }
  if (!cb && typeof Promise !== undefined) {
    return new Promise(resolve => {
      _resolve = resolve;
    })
  }
} 