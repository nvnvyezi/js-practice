let start = document.getElementById('start');
let stop = document.getElementById('stop');
let play = document.getElementById('play');
let audio = document.getElementById('audio');

let audioCtx = new AudioContext();
start.onclick = () =>{
  navigator.mediaDevices.getUserMedia({audio: true, video: false})
  .then(stream => {
    // 接收音频输入
    let source = audioCtx.createMediaStreamSource(stream);
    let scriptNode = audioCtx.createScriptProcessor();

    //音频输出
    // source.connect(audioCtx.destination)
    source.connect(scriptNode);
    scriptNode.connect(audioCtx.destination);
    source.start();
    // 监听录音的过程
    scriptNode.onaudioprocess = event => {
      this.buffers.push(event.inputBuffer.getChannelData(0)); // 获取当前频道的数据，并写入数组
    };
  })
  .catch(err => {
    console.log(err)
  })
}

stop.onclick = () => {
  audioCtx.close();
}