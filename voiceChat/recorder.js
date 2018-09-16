
    // //公共方法
    // var Util = {
    //     //初始化
    //     init: function(){
    //         navigator.getUserMedia = navigator.getUserMedia ||
    //                                  navigator.webkitGetUserMedia ||
    //                                  navigator.mozGetUserMedia ||
    //                                  navigator.msGetUserMedia;

    //         window.AudioContext = window.AudioContext ||
    //                               window.webkitAudioContext;
    //     },
    //     //日志
    //     log: function(){
    //         console.log.apply(console,arguments);
    //     }
    // };
    // //构造函数
    // var Recorder = function(config){

    //     var _this = this;
    //     config = config || {}; //初始化配置对象
    //     config.sampleRate = config.sampleRate || 44100; //采样频率，默认为44100Hz(标准MP3采样率)
    //     config.bitRate = config.bitRate || 128; //比特率，默认为128kbps(标准MP3质量)

    //     Util.init();

    //     if(navigator.getUserMedia){
    //         navigator.getUserMedia({
    //             audio: true //配置对象
    //         },
    //         function(stream){ //成功回调
    //             var context = new AudioContext(),
    //                 microphone = context.createMediaStreamSource(stream), //媒体流音频源
    //                 processor = context.createScriptProcessor(16384,1,1), //js音频处理器
    //                 successCallback, errorCallback;

    //             config.sampleRate = context.sampleRate;

    //             processor.onaudioprocess = function(event){
    //                 //监听音频录制过程
    //                 var array = event.inputBuffer.getChannelData(0);
    //                 realTimeWorker.postMessage({ cmd: 'encode', buf: array });
    //             };

    //             var realTimeWorker = new Worker('./worker.js'); //开启后台线程
    //             realTimeWorker.onmessage = function(e){ //主线程监听后台线程，实时通信
    //                 switch(e.data.cmd){
    //                     case 'init':
    //                         Util.log('初始化成功');
    //                         if(config.success){
    //                             config.success();
    //                         }
    //                         break;
    //                     case 'end':
    //                         if(successCallback){
    //                             var blob = new Blob(e.data.buf, { type: 'audio/mp3' });
    //                             successCallback(blob);
    //                             Util.log('MP3大小：' + blob.size + '%cB', 'color:#0000EE');
    //                         }
    //                         break;
    //                     case 'error':
    //                         Util.log('错误信息：' + e.data.error);
    //                         if(errorCallback){
    //                             errorCallback(e.data.error);
    //                         }
    //                         break;
    //                     default:
    //                         Util.log('未知信息：' + e.data);
    //                 }
    //             };
    //             //接口列表
    //             //开始录音
    //             _this.start = function(){
    //                 if(processor && microphone){
    //                     microphone.connect(processor);
    //                     processor.connect(context.destination);
    //                     Util.log('开始录音');
    //                 }
    //             };
    //             //结束录音
    //             _this.stop = function(){
    //                 if(processor && microphone){
    //                     microphone.disconnect();
    //                     processor.disconnect();
    //                     Util.log('录音结束');
    //                 }
    //             };
    //             //获取blob格式录音文件
    //             _this.getBlob = function(onSuccess, onError){
    //                 successCallback = onSuccess;
    //                 errorCallback = onError;
    //                 realTimeWorker.postMessage({ cmd: 'finish' });
    //             };

    //             realTimeWorker.postMessage({
    //                 cmd: 'init',
    //                 config: {
    //                     sampleRate: config.sampleRate,
    //                     bitRate: config.bitRate
    //                 }
    //             });
    //         },
    //         function(error){ //失败回调
    //             var msg;
    //             switch(error.code || error.name){
    //                 case 'PermissionDeniedError':
    //                 case 'PERMISSION_DENIED':
    //                 case 'NotAllowedError':
    //                     msg = '用户拒绝访问麦克风';
    //                     break;
    //                 case 'NOT_SUPPORTED_ERROR':
    //                 case 'NotSupportedError':
    //                     msg = '浏览器不支持麦克风';
    //                     break;
    //                 case 'MANDATORY_UNSATISFIED_ERROR':
    //                 case 'MandatoryUnsatisfiedError':
    //                     msg = '找不到麦克风设备';
    //                     break;
    //                 default:
    //                     msg = '无法打开麦克风，异常信息:' + (error.code || error.name);
    //                     break;
    //             }
    //             Util.log(msg);
    //             if(config.error){
    //                 config.error(msg);
    //             }
    //         });
    //     }else{
    //         Util.log('当前浏览器不支持录音功能');
    //         if(config.fix){
    //             config.fix('当前浏览器不支持录音功能');
    //         }
    //     }

    // };
    // //模块接口
    // let a = 8;
    // export default a;

    (function (window) {
        console.log(333)
        //兼容
        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


        var HZRecorder = function (stream, config) {
            config = config || {};
            config.sampleBits = config.sampleBits || 16;      //采样数位 8, 16
            config.sampleRate = config.sampleRate || (8000);   //采样率(1/6 44100)


            var context = new AudioContext();
            var audioInput = context.createMediaStreamSource(stream);
            var recorder = context.createScriptProcessor(4096, 1, 1);


            var audioData = {
                size: 0          //录音文件长度
                , buffer: []     //录音缓存
                , inputSampleRate: context.sampleRate    //输入采样率
                , inputSampleBits: 16       //输入采样数位 8, 16
                , outputSampleRate: config.sampleRate    //输出采样率
                , oututSampleBits: config.sampleBits       //输出采样数位 8, 16
                , input: function (data) {
                    this.buffer.push(new Float32Array(data));
                    this.size += data.length;
                }
                , compress: function () { //合并压缩
                    //合并
                    var data = new Float32Array(this.size);
                    var offset = 0;
                    for (var i = 0; i < this.buffer.length; i++) {
                        data.set(this.buffer[i], offset);
                        offset += this.buffer[i].length;
                    }
                    //压缩
                    var compression = parseInt(this.inputSampleRate / this.outputSampleRate);
                    var length = data.length / compression;
                    var result = new Float32Array(length);
                    var index = 0, j = 0;
                    while (index < length) {
                        result[index] = data[j];
                        j += compression;
                        index++;
                    }
                    return result;
                }
                , encodeWAV: function () {
                    var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);
                    var sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits);
                    var bytes = this.compress();
                    var dataLength = bytes.length * (sampleBits / 8);
                    var buffer = new ArrayBuffer(44 + dataLength);
                    var data = new DataView(buffer);


                    var channelCount = 1;//单声道
                    var offset = 0;


                    var writeString = function (str) {
                        for (var i = 0; i < str.length; i++) {
                            data.setUint8(offset + i, str.charCodeAt(i));
                        }
                    }

                    // 资源交换文件标识符
                    writeString('RIFF'); offset += 4;
                    // 下个地址开始到文件尾总字节数,即文件大小-8
                    data.setUint32(offset, 36 + dataLength, true); offset += 4;
                    // WAV文件标志
                    writeString('WAVE'); offset += 4;
                    // 波形格式标志
                    writeString('fmt '); offset += 4;
                    // 过滤字节,一般为 0x10 = 16
                    data.setUint32(offset, 16, true); offset += 4;
                    // 格式类别 (PCM形式采样数据)
                    data.setUint16(offset, 1, true); offset += 2;
                    // 通道数
                    data.setUint16(offset, channelCount, true); offset += 2;
                    // 采样率,每秒样本数,表示每个通道的播放速度
                    data.setUint32(offset, sampleRate, true); offset += 4;
                    // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
                    data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true); offset += 4;
                    // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
                    data.setUint16(offset, channelCount * (sampleBits / 8), true); offset += 2;
                    // 每样本数据位数
                    data.setUint16(offset, sampleBits, true); offset += 2;
                    // 数据标识符
                    writeString('data'); offset += 4;
                    // 采样数据总数,即数据总大小-44
                    data.setUint32(offset, dataLength, true); offset += 4;
                    // 写入采样数据
                    if (sampleBits === 8) {
                        for (var i = 0; i < bytes.length; i++, offset++) {
                            var s = Math.max(-1, Math.min(1, bytes[i]));
                            var val = s < 0 ? s * 0x8000 : s * 0x7FFF;
                            val = parseInt(255 / (65535 / (val + 32768)));
                            data.setInt8(offset, val, true);
                        }
                    } else {
                        for (var i = 0; i < bytes.length; i++, offset += 2) {
                            var s = Math.max(-1, Math.min(1, bytes[i]));
                            data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                        }
                    }


                    return new Blob([data], { type: 'audio/wav' });
                }
            };


            //开始录音
            this.start = function () {
                audioInput.connect(recorder);
                recorder.connect(context.destination);
            }


            //停止
            this.stop = function () {
                recorder.disconnect();
            }


            //获取音频文件
            this.getBlob = function () {
                this.stop();
                return audioData.encodeWAV();
            }


            //回放
            this.play = function (audio) {
                audio.src = window.URL.createObjectURL(this.getBlob());
            }


            //上传
            this.upload = function (url, callback) {
                var fd = new FormData();
                fd.append("audioData", this.getBlob());
                var xhr = new XMLHttpRequest();
                if (callback) {
                    xhr.upload.addEventListener("progress", function (e) {
                        callback('uploading', e);
                    }, false);
                    xhr.addEventListener("load", function (e) {
                        callback('ok', e);
                    }, false);
                    xhr.addEventListener("error", function (e) {
                        callback('error', e);
                    }, false);
                    xhr.addEventListener("abort", function (e) {
                        callback('cancel', e);
                    }, false);
                }
                xhr.open("POST", url);
                xhr.send(fd);
            }


            //音频采集
            recorder.onaudioprocess = function (e) {
                audioData.input(e.inputBuffer.getChannelData(0));
                //record(e.inputBuffer.getChannelData(0));
            }


        };
        //抛出异常
        HZRecorder.throwError = function (message) {
            alert(message);
            throw new function () { this.toString = function () { return message; } }
        }
        //是否支持录音
        HZRecorder.canRecording = (navigator.getUserMedia != null);
        //获取录音机
        HZRecorder.get = function (callback, config) {
            if (callback) {
                if (navigator.getUserMedia) {
                    navigator.getUserMedia(
                        { audio: true } //只启用音频
                        , function (stream) {
                            var rec = new HZRecorder(stream, config);
                            callback(rec);
                        }
                        , function (error) {
                            switch (error.code || error.name) {
                                case 'PERMISSION_DENIED':
                                case 'PermissionDeniedError':
                                    HZRecorder.throwError('用户拒绝提供信息。');
                                    break;
                                case 'NOT_SUPPORTED_ERROR':
                                case 'NotSupportedError':
                                    HZRecorder.throwError('浏览器不支持硬件设备。');
                                    break;
                                case 'MANDATORY_UNSATISFIED_ERROR':
                                case 'MandatoryUnsatisfiedError':
                                    HZRecorder.throwError('无法发现指定的硬件设备。');
                                    break;
                                default:
                                    HZRecorder.throwError('无法打开麦克风。异常信息:' + (error.code || error.name));
                                    break;
                            }
                        });
                } else {
                    HZRecorder.throwErr('当前浏览器不支持录音功能。'); return;
                }
            }
        }


        export default HZRecorder;


    })(window);