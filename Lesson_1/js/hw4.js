// 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.
//       Пользователь с именем "имя" и фамилией "фамилия" и его возраст через 10 лет будет "возраст" + 10
var userName = prompt('Please enter user name');
var secondName = prompt('Please enter second name');
var enteredUserAge = prompt('Please enter your age');

if (Number(enteredUserAge) === NaN) {
    alert('please enter only digits');
}

var userAgeInTenYears = Number(enteredUserAge) + 10;

console.log("Пользователь с именем " + userName + " и фамилией " + secondName + " и его возраст через 10 лет будет " + userAgeInTenYears);