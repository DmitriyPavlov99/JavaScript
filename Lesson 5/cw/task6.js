// 6.	Сколько чашек кофе мы можем сделать?

// Напишите функцию, которая принимает один аргумент - количество кофейных зерен.
// По условию - из 5 кофейных зерен можно сделать 1 чашку кофе.
// Если зерен на чашку кофе не хватает - попросите у пользователя еще.
// Верните количество чашек с кофе, которые можно сделать из того кол-ва зерен, что у вас уже имеется.
// Те зерна, которые остались должны быть учтены при следующей готовке (используйте глобальную переменную)

// Например вызовите подряд несколько раз функцию, с разными значениями:
// doCoffee(10)    => "Приготовлено чашек кофе: 2, осталось зерен: 0";
// doCoffee(4)		=> "Можно еще зерен?" => "Приготовлено чашек кофе: 1, осталось зерен: 2";
// doCoffee(3)		=> "Приготовлено чашек кофе: 1, осталось зерен: 0";
// -->
function doCoffee(qtyCoffee) {
  if (qtyCoffee % 5 === 0) {
    alert("Сделали " + qtyCoffee / 5 + " чашку кофе");
  }
  if (qtyCoffee / 5 < 1) {
    prompt("Дайте ещё зерен");
  } else {
    var caps = Math.floor(qtyCoffee / 5);
    var beensLeft = qtyCoffee - (caps * 5);
    alert("Чашек кофе " + caps + ' Зерен осталось ' + beensLeft);
  }
}
doCoffee(12);
