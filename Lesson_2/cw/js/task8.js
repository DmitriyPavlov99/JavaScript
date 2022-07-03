// 8. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
// Значение вводит пользователь
var userAge = +prompt("please enter your age");

if (userAge >= 14 && userAge <= 90) {
  console.log("all is good");
} else {
  console.log("incorrect value");
}
