// Задачи:
// 1. Написать функцию, которая принимает аргументом предложение и заменяет в нем запрещенные слова на допустимые.
// Запрещенные слова должны быть объявлены в объекте внутри функции.
// Пример объекта:
// var stopWords = {
//   "fucking": "freaking",
//   "shit": "stuff"
// };
//
// То есть, ключи - слова, которые недопустимы. Их значения - слова, на которые нужно заменить недопустимые.
// Пример работы функции:
// Получает — "This fucking shit keeps pissing me off!", возвращает —> "This freaking stuff keeps pissing me off!"

// 2. Написать функцию, которая получает массив слов и удаляет из него слова, которые начинаются и заканчиваются на
// одну и ту же букву. Регистр буквы иметь значение не должен. Функция должна вернуть массив без удаленных слов.
//
// Пример работы функции:
// Получает — ["awake", "control", "escape", "test", "fire"], возвращает —> ["control", "test", "fire"]
//
// 3. Написать программу (используя цикл while), которая создает радомное число от 0 до 10 (используя Math.random())
// и дает 3 попытки юзеру на то, чтобы его угадать. Если юзер угадывает число, вывести в alert "You won". Если нет,
// то создать новое число и автоматически начать игру заново.


// // TASK1
//
function replaceBadwords(str) {
  var stopWords = {
  "fucking": "freaking",
  "shit": "stuff"
  };
  var strArr = str.split(' ');
  console.log(strArr);
  for(var i = 0; i < strArr.length; i++) {
    for(var key in stopWords){
      if(key ==  strArr[i]){
      strArr[i]  =  stopWords[key];
    }
  }
}
var strArr = strArr.join(' ');
console.log(strArr);
}
//
//  var result = replaceBadwords('This fucking shit keeps pissing me off!')
//
//
//
//
// // // TASK2
// //
function deleteWords(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var arrLetter = arr[i].split('');

    if (arrLetter[0] != arrLetter[arrLetter.length - 1]) {
      console.log(arrLetter);
      result.push(arr[i]);
    }
  }
console.log(result);
}

var arr = ["awake", "control", "escape", "test", "fire"];
var result = deleteWords(arr);



//TASK3
//

function inputGame(int){
  var i = 0;
  var secretNumber = Math.floor(Math.random() * 10) + 0;
  var userInput = prompt("Enter your number: ");
  while (i < 2) {
    console.log(secretNumber);
    if (secretNumber != userInput) {
      userInput = prompt("Enter your number: ")
    } else if(secretNumber == userInput) {
    alert('You won!');
    }
  i++;
  }
  inputGame();

}
  var result = inputGame();
