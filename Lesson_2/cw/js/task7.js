// 7. Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

var login = "Admin";
var message = prompt("enter login");

if (message === login) {
  var password = "Я главный";
  var enteredPassword = prompt("please enter password");

  if (enteredPassword === password) {
    console.log("Hello");
  } else if (enteredPassword === "") {
    console.log("please enter correct password");
  } else if (enteredPassword === null) {
    console.log("cancelled");
  } else if (enteredPassword !== password) {
    console.log("incorrect passwod");
  }
} else {
  console.log("uknown name member");
}
