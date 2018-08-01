onmessage = function (data) {
  console.log(data);
  this.postMessage('zi收到');
}
