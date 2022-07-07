// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.

// // sort(function(a, b) { return a > b });
// // 1, 2, 3, 5, 10, 14
// // 1, 10, 14, 2, 3,
var company = [
  (p1 = {
    name: (a = prompt("Введите имя")),
    sName: (b = prompt("Введите фамилию")),
    age: (c = prompt("Введите возраст")),
    occupation: (d = prompt("Введите профессию:")),
  }),
  (p2 = {
    name: (a = prompt("Введите имя")),
    sName: (b = prompt("Введите фамилию")),
    age: (c = prompt("Введите возраст")),
    occupation: (d = prompt("Введите профессию:")),
  }),
  (p3 = {
    name: (a = prompt("Введите имя")),
    sName: (b = prompt("Введите фамилию")),
    age: (c = prompt("Введите возраст")),
    occupation: (d = prompt("Введите профессию:")),
  }),
];
function assignSalary(arr) {
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i].occupation) {
      case "директор":
        arr[i].salary = 3000;
        break;
      case "менеджер":
        arr[i].salary = 1500;
        break;
      case "программист":
        arr[i].salary = 2000;
        break;
      default:
        arr[i].salary = 1000;
    }
  }
}
assignSalary(company);
for (var i = 0; i < company.length; i++) {
  console.log("Имя: " + company[i].name);
  console.log("Фамилия: " + company[i].sName);
  console.log("Возраст: " + company[i].age + " лет");
  console.log("Профессия: " + company[i].occupation);
  console.log("Зарплата: " + company[i].salary);
}
