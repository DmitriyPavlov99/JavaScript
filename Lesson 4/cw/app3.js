// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его.
// Ваш результат должен быть строкой.
// "something"

// "test" => "tset"

// ########

var testParam = "something";

function reverseString(str) {
  let arr = str.split('');
  console.log(arr);
}

reverseString(testParam);
