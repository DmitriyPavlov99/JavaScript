// // 5.  Создать игру "Камень-Ножницы-Бумага".
// // Выбор компьютера определяется строкой:

// // var computerChoice = Math.random();
// // alert(computerChoice);

// // let comp = getComputerChoice();
// // let user = getUserChoice();
// // function game(comp, user) {

// // }

// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
// -->

function fullGame() {
  function getComputerChoice() {
      var r = 0.34;
      var p = 0.67;
      var computerChoice = Math.random();

      if (computerChoice <= r) {
          return 'Камень';
      } else if (computerChoice <= p) {
          return 'Бумага';
      } else {
          return 'Ножницы';
      }
  }

  let comp = getComputerChoice();
  alert(comp);

  let user = prompt('Введите ваш выбор: (Камень или Ножницы или Бумага)');
  function game(comp, user) {
      if (comp === user) {
          return 'Ничья';
      } else if (comp === 'Камень') {
          if (user === 'Ножницы') {
              return 'comp wins';
          }
          else if (user === 'Бумага') {
              return 'user wins';
          }
      } else if (comp === 'Бумага') {
          if (user === 'Камень') {
              return 'comp wins';
          }
          if (user === 'Ножницы') {
              return 'user wins';
          }
      } else if (comp === 'Ножницы') {
          if (user === 'Бумага') {
              return 'comp wins';
          }
          if (user === 'Камень') {
              return 'user wins';
          }
      }
  }
  alert(game(comp, user));
}


function startGame() {
  while (true) {
  fullGame();
  
  var result = confirm("Хотите повторить ?");
  if (!result) {
    return;
  }
}
}
startGame();
