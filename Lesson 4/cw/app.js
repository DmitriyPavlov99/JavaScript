// 1. Напишите функцию, которая принимает массив в качестве аргумента.
// Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

// ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']

// ########
var startingArr = ["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"];
function getSubArr(arr) {
  let subArr = arr.slice(2, 4);
  return subArr;
}

const result = getSubArr(startingArr);
console.log(result);
