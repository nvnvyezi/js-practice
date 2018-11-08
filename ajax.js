
function Ajax(params) {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();    
  } else {
    xhr = new ActiveXObject();
  }
  xhr.open(method, url, true);
  xhr.setRequsestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readState == 4 && (xhr.status >= 200 && xhr.status <300 ||xhr.status == 304)) {
      const type = xhr.getResponseHeader('Content-type');
      let res = '';
      if (type.indexOf('xml') !== -1 && xhr.responseXML) {
        res = xhr.responseXML;
      } else if (type === 'application/json') {
        res = JSON.parse(xhr.responseText);
      } else {
        res = xhr.responseText;
      }
    }
  }
  // post请求需要data
  xhr.send(data)
}