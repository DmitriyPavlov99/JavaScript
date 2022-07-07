// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от 0 до 10 ( на дз от -10)
// 			Выведите массив в консоль
// 			Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

// 		########

// math.floor(Math.random() * 10)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSmth(a, b) {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    var randomInt = getRandomInt(a, b);
    arr.push(randomInt);
  }
  return arr;
}
var arrSum = doSmth(-10, 10);
console.log(arrSum);
var sum = 0;
for (let i = 0; i < arrSum.length; i++) {
  if (arrSum[i] > 0) {
    sum = sum + arrSum[i];
  }
}
console.log(sum);
