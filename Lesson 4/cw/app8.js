// 8.	Сумма в диапазоне

// 			Напишите 2 функции.
// 			Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его
// 			Т.е. принимает 3 параметра и А не может быть больше чем B
// 			Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]

// 			Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
// 			Должна быть валидация индексов
// 				- Чтобы не было отрицательных чисел
// 				- Чтобы индекс не выходил за рамки допустимых индексов
// 				- Чтобы первый индекс был меньше или равен второму

// 			Пример вывода в консоль:
// 			Массив: [.....] сгенерированный от A до B
// 			Сумма чисел в диапазоне от индекса C по индекс D равна: 10
//      -->

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSmth(a, b, num) {
  // if (a < b) {
  //     let arr = [];
  //     for (var i = 0; i < num; i++) {
  //         var randomInt = getRandomInt(a, b);
  //         arr.push(randomInt);
  //     }
  //     return arr;
  // } else {
  //     alert("error");
  // }

  // second solution
  if (a > b) {
    alert("error");
    return;
  }
  let arr = [];
  for (var i = 0; i < num; i++) {
    var randomInt = getRandomInt(a, b);
    arr.push(randomInt);
  }
  return arr;
}
// doSmth(10, 1, 5);
// console.log(doSmth(1, 10, 5));

function calculateSumBtwNumb(c, d, array) {
  if (c < 0 || d < 0) {
    alert("error");
    return;
  }

  if (d > array.length) {
    alert("error");
    return;
  }

  if (c > d) {
    alert("error");
    return;
  }
  var sum = 0;
  for (var i = c; i < d; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
}
var targetArr = doSmth(1, 10, 5);
console.log(targetArr);
calculateSumBtwNumb(0, 4, targetArr);
