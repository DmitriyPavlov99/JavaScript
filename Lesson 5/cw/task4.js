// 4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  var count = 0;
  for (var counter in obj) {
    count++;
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

var obj = {};
var obj1 = { test: "task" };

isEmpty(obj);
isEmpty(obj1);
console.log(isEmpty(obj));
console.log(isEmpty(obj1));