// 2. Построить прямоугольный треугольник состоящий из символа "*".
// Запросить у пользователя число, к примеру - 4

// *
// **
// ***
// ****

var lines = prompt("Введите число");
var str = " ";
var star = "*";
for (var i = 0; i < lines; i++) {
  str += star;
  console.log(str);
}