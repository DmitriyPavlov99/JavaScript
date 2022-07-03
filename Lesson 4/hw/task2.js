// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность
var number = +prompt("Введите число");
var power = +prompt("Введите степень");
function abs(val) {
  if (val < 0) {
    return -val;
  } else {
    return val;
  }
}
function fun1(a, b) {
  if (b == 0) {
    return 1;
  } else if (b == 1) {
    return a;
  }
  var r = 1;
  for (var n = 0; n < abs(b); n++) {
    r = r * a;
  }
  if (b < 0) {
    return 1 / r;
  }
  return r;
}
alert(fun1(number, power));
