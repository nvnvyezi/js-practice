/* 五子棋判断输赢 */
// const board = [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["white", "black", "", "black", "white"],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""]
// ];

// const board = [
//   ["", "white", "", "", ""],
//   ["", "black", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "black", "", "", ""],
//   ["", "white", "", "", ""]
// ];

// const board = [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["black", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "black", "", ""]
// ];

const board = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", "black"],
  ["", "", "", "", ""],
  ["", "", "black", "", ""]
];

let i, j;
// 判断白棋生 , x, y分别为每次新下的棋所在的位置
// for (let i = 0; i < 15; i++) {
//   for (let j = 0; j < 15; j++) {
//     gomokujudge(i, j, "black");
//   }
// }
function gomokujudge(x, y, color, size) {
  // 棋子
  let count = 1;
  let pos = y;
  /*计算水平方向连续棋子个数*/
  // console.log(pos > 0 && board[x][--pos] === color);
  while (pos > 0 && board[x][--pos] === color) {
    count++;
  }
  pos = y;
  while (x < size - 1 && board[x][++pos] === color) {
    count++;
  }
  if (count >= 3) {
    /* 获胜 */
    console.log(`1${color}获胜`);
    return true;
  }
  /*计算竖直方向连续棋子个数*/
  count = 1;
  pos = x;
  while (x > 0 && board[--pos][y] === color) {
    count++;
  }
  pos = x;
  while (x < size - 1 && board[++pos][y] === color) {
    count++;
  }
  if (count >= 3) {
    console.log(`2${color}获胜`);
    return true;
  }

  /* 判断倾斜方向连续棋子个数 */
  count = 1;
  pos = x;
  let posy = y;
  while (pos > 0 && posy > 0 && board[--pos][--posy]) {
    count++;
  }
  pos = x;
  posy = y;
  while (pos < size - 1 && posy < size - 1 && board[++pos][++posy]) {
    count++;
  }
  if (count >= 3) {
    console.log(`3${color}获胜`);
    return true;
  }

  /* 判断右倾斜方向连续棋子个数 */
  count = 1;
  pos = x;
  posy = y;
  while (pos > 0 && posy < size - 1 && board[--pos][++posy]) {
    count++;
  }
  pos = x;
  posy = y;
  while (pos < size - 1 && posy > 0 && board[++pos][--posy]) {
    count++;
  }
  if (count >= 3) {
    console.log(`4${color}获胜`);
    return true;
  }
}

gomokujudge(3, 3, "black", 5);
