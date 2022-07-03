// 13. Перепишите код с использованием одной конструкции switch:
			
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//     alert('Вы ввели число 0');
// }

// if (number === 1) {
//     alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt("Enter number from 0 to 3");

switch (number) {
    case 0:
        alert("You entered 0");
        break;
    case 1:
        alert("You entered 1");
        break;
    case 2:
    case 3:
        alert("You entered 2 or 3");
        break;
    default:
        alert("You entered invalid number");
}