// 11. Подмассив наибольшей суммы
// 		Определите максимальную сумму в подмассиве
// Setup
var a = [
  [1, -10, 4, 5],
  [1, 5, 5, 3],
  [-1, 8, 4, 1],
  [1, -10, -4, 5],
  [1, 10, 4, 0],
];

function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([1, -10, 4, 5]) ); // 9
alert( getMaxSubSum([1, 5, 3, 5, 3]) ); // 17
alert( getMaxSubSum([-1, 8, 4, 1]) ); // 13
alert( getMaxSubSum([1, -10, -4, 5]) ); // 5
alert( getMaxSubSum([1, 10, 4, 0]) ); // 15

