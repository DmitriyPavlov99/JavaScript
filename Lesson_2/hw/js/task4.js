// 4. Дано два числа A и B где (A < B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

var a = parseInt(prompt("Введите число A"));
var b = parseInt(prompt("Введите число B"));

if (a < b) {
  var i = a;
  var sum = 0;
  var list = "";
  while (i < b) {
    sum += i;
    if (i % 2 !== 0) {
      list += " " + i;
    }

    i++;
  }
  document.write("Сумма чисел от А до В равна " + sum);
  if (list.length > 0) {
    document.write(
      "<p>" + "В числовом промежутке от А до В найдены не четные числа:" + list
    );
  } else {
    document.write(
      "<p>" + "В числовом промежутке от А до В не найдены не четные числа!"
    );
  }
} else {
  document.write("Условие А < В не выполняется!");
}