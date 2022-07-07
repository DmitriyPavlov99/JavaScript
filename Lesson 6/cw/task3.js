// 3.	Заменить все элементы

// 			Напишите функцию replaceAll, которая принимает первым параметром массив элементов,
// вторым параметром - элемент, который нужно заменить и третьим -
// 			элемент, который должен заменить второй элемент.
// 			Пример:
// 			 replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

function replaceAll(array, old, newNumber) {
  //Найти индекс параметра old в массиве array
  // Если он равен -1 то вывести alert
  //если он есть то с помощью splice удалить old и вставить newNumber
  // вывести в консоль
  var targetIndex = array.indexOf(old);
  if (targetIndex === -1) {
    return alert("");
  }
  array.splice(targetIndex, 1, newNumber);
  console.log(array);
}
replaceAll([1, 2, 3], 1, 5);
