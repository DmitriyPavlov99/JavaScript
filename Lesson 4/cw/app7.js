// 7.	Напишите функцию, которая проверят, делится ли число на два других числа.
// 			Сигнатура метода:

// num: 15;
// x: 3;
// y: 5;

// 			=>

// 			где num - проверяемое число,
// 				х - первое число для проверки,
// 				y - второе число для проверки

// 			Если num делиться на оба числа без остачи - вывести true
// 			Если num неделиться на оба числа - вывести "не делиться на х и у" (вместо х и у подставить соответствующие числа)
// 			Если num неделиться на одно из числе - вывести "не делиться на х|y" (вместо х и у подставить соответствующие числа)

function isDivisible(num, x, y) {
  if (num % x === 0 && num % y === 0) {
    return true;
  } else if (num % x != 0 && num % y != 0) {
    return "не ділиться";
  } else num / x != 0 || num % y != 0;
  return "не ділиться на оба";
}

console.log(isDivisible(15, 22, 5));
