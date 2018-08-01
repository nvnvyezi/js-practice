onmessage = function (data) {
  console.log(data);
  this.postMessage('收到');
  let z = new Worker('./workerz.js');
  z.postMessage('234');
  z.onmessage = function (data) {  
    console.log(data)
  }
}
