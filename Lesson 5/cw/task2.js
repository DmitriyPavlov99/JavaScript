// 2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит
// проверку на истинность (второй аргумент).
// Если ни один элемент не проходит тест, вернуть undefined.

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let checkFunc = func(arr[i]);
    // console.log(checkFunc);
    if (checkFunc) {
      return arr[i];
    }
  }
  return undefined;
  // return item;
}

let newArr = [1, 3, 4, 6];
function checkIfEven(test) {
  // if (test % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return test % 2 === 0
}
var res = checkIfEven("123");
// console.log(res);

var result = findElement(newArr, checkIfEven);
console.log(result);
