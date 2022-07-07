// 2. Допишите функцию countOnline

let users = [
  {
    age: 27,
    online: false,
  },
  {
    age: 32,
    online: true,
  },
  {
    age: 48,
    online: false,
  },
  {
    age: 19,
    online: true,
  },
];
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}
console.log(countOnline(users));
