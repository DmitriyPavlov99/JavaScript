// 12*. Запросите у пользователя число и проверьте есть ли оно в массиве
// Если есть, то сколько раз встречается

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var number = +prompt("Add number");
let numberCount = 0;
for (var i = 0; i < myArray.length; i++) {
    if (number === myArray[i]) {
       numberCount++;
    }
}
console.log(numberCount);


