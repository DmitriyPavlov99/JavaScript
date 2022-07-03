// 1. Сделать собственные примеры методов применяемых для массивов.
// С помощью map можно сгенерировать массив с динамическим контентом
const users = [
  {
    first_name: "Mike",
    location: "London",
  },
  {
    first_name: "Tim",
    location: "US",
  },
  {
    first_name: "John",
    location: "Australia",
  },
];
const usersList = users.map(function (user) {
  return `${user.first_name} lives in ${user.location}`;
});
console.log(usersList);
