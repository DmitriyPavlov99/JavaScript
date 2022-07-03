// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// 		Функция должна вернуть "Even" или "Odd";

function isEven(num) {
  //   if (num % 2 === 0) {
  //     return alert("Even");
  //   }
  //   return alert("Odd");
  num % 2 === 0 ? alert("Even") : alert("Odd");
}
isEven(2);
isEven(3);
