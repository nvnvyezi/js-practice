function getParam (url, params) {
  let res = [];
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      res.push(`${key}=${params[key]}`)
    }
  }
  return `${url}?${res.join('&')}`;
}

console.log(getParam('https://youngzhang08.github.io', {date: '2018-08-12', article: 'myMVVM'}));