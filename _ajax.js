let xhr;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else {
  xhr = new ActiveXObject();
}

xhr.open(method, url, boolean);
/**接受数据类型 */
xhr.responseType = "arraybuffer";
/**设置请求头 */
xhr.setRequestHeader();
/**携带cookie */
xhr.withCredentials = true;
/**超时时间 */
xhr.timeout = 2000;
xhr.ontimeout = function() {};
xhr.send(data);

/**取消请求 */
xhr.abort();

xhr.onload = function() {
  if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
  }
};
