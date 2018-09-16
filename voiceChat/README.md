`**MediaDevices.getUserMedia()**` 会提示用户给予使用媒体输入的许可，媒体输入会产生一个[`MediaStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream)，里面包含了请求的媒体类型的轨道。此流可以包含一个视频轨道（来自硬件或者虚拟视频源，比如相机、视频采集设备和屏幕共享服务等等）、一个音频轨道（同样来自硬件或虚拟音频源，比如麦克风、A/D转换器等等），也可能是其它轨道类型。

它返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象，成功后会`resolve`回调一个 [`MediaStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream) 对象。若用户拒绝了使用权限，或者需要的媒体源不可用，`promise`会`reject`回调一个  `PermissionDeniedError` 或者 `NotFoundError` 。

> 返回的promise对象可能既不会resolve也不会reject，因为用户不是必须选择允许或拒绝。

```
var promise = navigator.mediaDevices.getUserMedia(constraints);
```

`constraints`

作为一个[`MediaStreamConstraints`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStreamConstraints) 对象，指定了请求的媒体类型和相对应的参数。

constraints 参数是一个包含了`video` 和 `audio`两个成员的`MediaStreamConstraints` 对象，用于说明请求的媒体类型。必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，那么返回的Promise对象就会处于rejected［失败］状态，`NotFoundError`作为rejected［失败］回调的参数。 

以下同时请求不带任何参数的音频和视频：

```
{ audio: true, video: true }
```

如果为某种媒体类型设置了 `true` ，得到的结果的流中就需要有此种类型的轨道。如果其中一个由于某种原因无法获得，`getUserMedia()` 将会产生一个错误。

当由于隐私保护的原因，无法访问用户的摄像头和麦克风信息时，应用可以使用额外的constraints参数请求它所需要或者想要的摄像头和麦克风能力。下面演示了应用想要使用1280x720的摄像头分辨率：

```
{
  audio: true,
  video: { width: 1280, height: 720 }
}
```

浏览器会试着满足这个请求参数，但是如果无法准确满足此请求中参数要求或者用户选择覆盖了请求中的参数时，有可能返回其它的分辨率。

强制要求获取特定的尺寸时，可以使用关键字`min`, `max`, 或者 `exact`(就是 min == max). 以下参数表示要求获取最低为1280x720的分辨率。

```
{
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 }
  }
}
```

如果摄像头不支持请求的或者更高的分辨率，返回的Promise会处于rejected状态，`NotFoundError作为`rejected回调的参数，而且用户将不会得到要求授权的提示。

造成不同表现的原因是，相对于简单的请求值和`ideal`关键字而言，关键字`min`, `max`, 和 `exact`有着内在关联的强制性，请看一个更详细的例子：

```
{
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 776, ideal: 720, max: 1080 }
  }
}
```

当请求包含一个ideal（应用最理想的）值时，这个值有着更高的权重，意味着浏览器会先尝试找到最接近指定的理想值的设定或者摄像头（如果设备拥有不止一个摄像头）。

简单的请求值也可以理解为是应用理想的值，因此我们的第一个指定分辨率的请求也可以写成如下：

```
{
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 }
  }
}
```

并不是所有的constraints 都是数字。例如, 在移动设备上面，如下的例子表示优先使用前置摄像头（如果有的话）：

```
{ audio: true, video: { facingMode: "user" } }
```

强制使用后置摄像头，请用：

```
{ audio: true, video: { facingMode: { exact: "environment" } } }
```

### 返回值

返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) ， 这个Promise成功后的回调函数带一个 [`MediaStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream) 对象作为其参数。

### 异常

返回一个失败状态的Promise，这个Promise失败后的回调函数带一个[`DOMException`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMException)对象作为其参数。 可能的异常有：

- `AbortError`［中止错误］

  尽管用户和操作系统都授予了访问设备硬件的权利，而且未出现可能抛出`NotReadableError`异常的硬件问题，但仍然有一些问题的出现导致了设备无法被使用。

- `NotAllowedError`［拒绝错误］

  用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。

  较旧版本的规范使用了`SecurityError`，但在新版本当中`SecurityError`被赋予了新的意义。

- `NotFoundError`［找不到错误］

  找不到满足请求参数的媒体类型。

- `NotReadableError`［无法读取错误］

  尽管用户已经授权使用相应的设备，操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。

- `OverConstrainedError`［无法满足要求错误］

  指定的要求无法被设备满足，此异常是一个类型为`OverconstrainedError`的对象，拥有一个`constraint`属性，这个属性包含了当前无法被满足的`constraint`对象，还拥有一个`message`属性，包含了阅读友好的字符串用来说明情况。

  因为这个异常甚至可以在用户尚未授权使用当前设备的情况下抛出，所以应当可以当作一个探测设备能力属性的手段［fingerprinting surface］。

- `SecurityError`［安全错误］

  在`getUserMedia()` 被调用的 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 上面，使用设备媒体被禁止。这个机制是否开启或者关闭取决于单个用户的偏好设置。

- `TypeError`［类型错误］

  constraints对象未设置［空］，或者都被设置为`false`。

[`AudioContext`](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext) 接口的`createScriptProcessor()` 方法创建一个[`ScriptProcessorNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/ScriptProcessorNode) 用于通过JavaScript直接处理音频.

```
var audioCtx = new AudioContext();
myScriptProcessor = audioCtx.createScriptProcessor(1024, 1, 1);
```

### 参数

- `bufferSize`

  缓冲区大小，以样本帧为单位。具体来讲，缓冲区大小必须去是下面这些值当中的某一个: 256, 512, 1024, 2048, 4096, 8192, 16384. 如果不传，或者参数为0，则取当前环境最合适的缓冲区大小, 取值为2的幂次方的一个常数，在该node的整个生命周期中都不变.

  该取值控制着`audioprocess事件被分派的频率，以及每一次调用多少样本帧被处理`. 较低bufferSzie将导致一定的延迟。较高的bufferSzie就要注意避免音频的崩溃和故障。推荐作者不要给定具体的缓冲区大小，让系统自己选一个好的值来平衡延迟和音频质量。

- `numberOfInputChannels`

  值为整数，用于指定输入node的声道的数量，默认值是2，最高能取32.

- `numberOfOutputChannels`

  值为整数，用于指定输出node的声道的数量，默认值是2，最高能取32.

- [`AudioNode.connect(AudioNode)`](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioNode/connect(AudioNode))

  允许将此节点的一个输出连接到另一个节点的一个输入。

- [`AudioNode.connect(AudioParam)`](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioNode/connect(AudioParam))

  允许将此节点的一个输出连接到音频参数的一个输入。

- [`AudioNode.disconnect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioNode/disconnect)

  允许断开此节点与另一个节点的连接。

 