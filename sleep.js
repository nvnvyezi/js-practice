function sleep(ms) {
  const start = Date.now();
  const end = start + ms;
  while (Date.now() < end) {};
  console.log(1)
  return ;
}
sleep(1000);

function sleep2(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, ms);
  })
}

sleep2(1000).then(() => {
  console.log(333);
})

async function sleep3(ms) {
  await sleep(ms);
  console.log(3333);
}

sleep3(3000);