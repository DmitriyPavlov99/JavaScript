// 1.  Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент).
// Вернуть усеченную строку с ... окончанием.

function truncateString(str, num) {
  if (str.length > num) {
    let shortString = str.slice(0, num);
    let string = shortString + "...";
    // console.log(string);
    return string;
  }
  return str
}

let res = truncateString("A-tisket a-tasket A green and yellow basket", 15);
console.log(res);