// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь)
// от 0 (на дз от -10) до 10
//     Определите наименьшее и наибольшее число в массиве.
//     Массив, минимальное и максимальное число - вывести в консоль.

var num = +prompt("Введите колличество элементов массива");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSmth(a, b, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    var randomInt = getRandomInt(a, b);
    arr.push(randomInt);
  }
  return arr;
}
var arrNew = doSmth(-10, 10, num);
console.log(arrNew);
var minNum = Number.MAX_SAFE_INTEGER;
var maxNum = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < arrNew.length; i++) {
  if (minNum > arrNew[i]) {
    minNum = arrNew[i];
  }

  if (maxNum < arrNew[i]) {
    maxNum = arrNew[i];
  }
}
console.log("Min " + minNum);
console.log("Max " + maxNum);
