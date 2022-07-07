// Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #

// Примеры:

// removeUrlAnchor('www.codewars.com#about')
// // returns 'www.codewars.com'

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function site(url) {
  //Найти индекс под которым находится # в нашей строке
  //Если этот индекс равен -1 то вернуть исходную строку
  //и если не -1 то мы должны скопировать нашу строчку по найденный индекс
  // вывести результат
  var index = url.indexOf("#");
  if (index === -1) {
    return url;
  }
  var newUrl = url.slice(0, index);
  return newUrl;
}

console.log(site("www.codewars.com#about"));
console.log(site("www.codewars.com?page=1"));
