// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var a, b, c;
a = Number(prompt("Введите первое число:"));
b = Number(prompt("Введите второе число:"));
c = Number(prompt("Введите третье число:"));
s = ((a+b+c)/3);
alert(s);
if (a===b || a===c || b===c) {
    alert("Error");
}
