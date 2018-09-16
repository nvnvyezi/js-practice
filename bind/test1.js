// let a = require('./test.js');

// let b = 'sds';
// console.log(a, 4);

// exports.b = b;

// console.log(env);


// function suggest (items) {
//   var str = document.getElementsByClassName('js-input')[0].value.trim();
//   var reg = '/';
//   for (let i = 0; i < str.length; i++) {
//     reg += str[i] + '.*?';
//   }
//   reg += '/';

// }

// function A(){
//   this.fn = function(){
//     return 1;
//   }
//  }
//   A.prototype.fn = function(){return 2};
//    var a = new A();
//   console.log(a.fn())

// function foo(params) {
//   let p;
//   for (let i = 0; i < 3; i++) {
//     if (i === 2) {
//       p = function () {
//         return i;
//       }
//     }
//   }
//   console.log(p());
// }

// console.log(foo());
// // foo()

// function foo(x) {
//   x = x || 3;
//   console.log(x);
// }

// foo();
// foo(0)
// foo(-1)
// foo(1);



// function sort (stu) {
//   let arr1 = stu;
//   stu = stu.sort((a, b) => a.class - b.class);
//   for (let i = 0; i < stu.length - 1; i++) {
//     if (stu[i].class == stu[i+1].class) {
//       if (stu[i].score < stu[i+1].score) {
//         let arr = stu.splice(i+1, 1);
//         stu.splice(i-1, 0, arr);
//       }
//     }
//   }
//   console.log(stu, 2, arr1);
// }

function sort(students) {
  let str = JSON.stringfy(students);
  let originArr = JSON.parse(str);

students = students.sort(function(a, b){
    return a.class - b.class;
  });

  for(let i=0; i< students.length-1; i++){
    if(students[i].class === students[i+1].class && students[i].score < students[i+1].score){
        let t = students[i];
          students[i] = students[i+1];
          students[i+1] = t;
      }
  }
  for(let i=0; i< students.length-1; i++){
    if(students[i].class === students[i+1].class && students[i].score === students[i+1].score){
          const itemA = originArr.indexOf(students[i]);
          const itemB = originArr.indexOf(students[i+1]);
          if(itemA > itemB){
              let t = students[i];
              students[i] = students[i+1];
              students[i+1] = t;
          }
      }
  }
  return students;

}

sort([{name: 'a', class: 2, score: 64},{name: 'b', class: 1, score: 80},{name: 'c', class: 1, score: 80},{name: 'd', class: 4, score: 94}])