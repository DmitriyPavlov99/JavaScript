// 1. Напишите цепочку операторов if / else if, чтобы выполнить следующие условия (num вводит пользователь), результат вывести в консоль:
// (бонус через тернарный оператор)
// num < 5 - "Tiny"
// num < 10 - "Small"
// num < 15 - "Medium"
// num < 20 - "Large"
// num >= 20 - "Huge"

var num = prompt('please enter a positive number');

var result;

if (num < 5) {
    result = "Tiny";
} else if (num < 10) {
    result = "Small";
} else if (num < 15) {
    result = "Medium";
} else if (num < 20) {
    result = "Large";
} else if (num >= 10) {
    result = "Huge";
} else {
    result = 'you have entered incorrect value';
}

console.log(result);