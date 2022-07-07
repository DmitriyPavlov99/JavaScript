// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

var company = [
  (p1 = {
    name: (a = prompt("Введите имя")),
    sName: (b = prompt("Введите фамилию")),
    age: (c = prompt("Введите возраст")),
    occupation: (d = prompt("Введите профессию:")),
    show: function () {
      console.log("Имя: " + this.name);
      console.log("Фамилия: " + this.sName);
      console.log("Возраст: " + this.age + " лет");
      console.log("Профессия: " + this.occupation);
    },
  }),
  (p2 = {
    name: (a = prompt("Введите имя:")),
    sName: (b = prompt("Введите фамилию:")),
    age: (c = prompt("Введите возраст:")),
    occupation: (d = prompt("Введите профессию:")),
    show: function () {
      console.log("Имя: " + this.name);
      console.log("Фамилия: " + this.sName);
      console.log("Возраст: " + this.age + " лет");
      console.log("Профессия: " + this.occupation);
    },
  }),
  (p3 = {
    name: (a = prompt("Введите имя:")),
    sName: (b = prompt("Введите фамилию:")),
    age: (c = prompt("Введите возраст:")),
    occupation: (d = prompt("Введите профессию:")),
    show: function () {
      console.log("Имя: " + this.name);
      console.log("Фамилия: " + this.sName);
      console.log("Возраст: " + this.age + " лет");
      console.log("Профессия: " + this.occupation);
    },
  }),
];

for (var i = 0; i < company.length; i++) {
  company[i].show();
}
