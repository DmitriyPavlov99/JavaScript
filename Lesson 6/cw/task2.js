// Каждое число в квадрат

// Напишите функцию, которая принимает число и возводит каждую цифру этого числа в квадрат.

// Пример:
// squareDigits(9119) //811181 так как 9^2 равно 81 и 1^2 равно 1.

function quad(number) {
  // Перевести number в строку
  // полученную строку перевести в массив
  // циклом пройтись по массиву и каждый елемент возвести в степень
  // полученный массив привести в строку
  var string = number.toString();
  // return string
  //   console.log(string);
  var arr = string.split("");
  var mapArr = arr.map(function (number) {
    return number * number;
  });
  var res = mapArr.join("");
  console.log(res);
}
quad(333);
