var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

let arrLength = arr.map((item) => {
  return item.length;
});

console.log(arrLength); // 4,5,2,5
