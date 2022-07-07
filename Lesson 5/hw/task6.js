// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// // После выполнения функции — вывести информацию о сотрудниках.
var company = [
  (p1 = {
    name: (a = prompt("Enter first name:")),
    sName: (b = prompt("Enter surname:")),
    age: (c = +prompt("Enter age:")),
    occupation: (d = prompt("Enter occupation:")),
  }),
  (p2 = {
    name: (a = prompt("Enter first name:")),
    sName: (b = prompt("Enter surname:")),
    age: (c = +prompt("Enter age:")),
    occupation: (d = prompt("Enter occupation:")),
  }),
  (p3 = {
    name: (a = prompt("Enter first name:")),
    sName: (b = prompt("Enter surname:")),
    age: (c = +prompt("Enter age:")),
    occupation: (d = prompt("Enter occupation:")),
  }),
];
function assignSalary(arr) {
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i].occupation) {
      case "director":
        arr[i].salary = 3000;
        break;
      case "manager":
        arr[i].salary = 1500;
        break;
      case "programmer":
        arr[i].salary = 2000;
        break;
      default:
        arr[i].salary = 1000;
    }
  }
}
assignSalary(company);
var crit = prompt("Enter criteria (name, sName, age, salary): ");
company.sort(function (a, b) {
  switch (crit) {
    case "name":
      if (a["name"] > b["name"]) {
        return 1;
      } else if (a["name"] < b["name"]) {
        return -1;
      } else {
        return 0;
      }
      break;
    case "sName":
      if (a["sName"] > b["sName"]) {
        return 1;
      } else if (a["sName"] < b["sName"]) {
        return -1;
      } else {
        return 0;
      }
      break;
    case "age":
      return a["age"] - b["age"];
      break;
    case "salary":
      return a["salary"] - b["salary"];
      break;
    default:
      alert("None");
  }
});
// это решение нашёл в интернете, не пойму как оно в итоге должно сортироваться и выводится..
// но так-то вроде работает
assignSalary(company);
for (var i = 0; i < company.length; i++) {
  console.log("Имя: " + company[i].name);
  console.log("Фамилия: " + company[i].sName);
  console.log("Возраст: " + company[i].age + " лет");
  console.log("Профессия: " + company[i].occupation);
  console.log("Зарплата: " + company[i].salary);
}
