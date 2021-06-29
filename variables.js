
 /* имя (постоянное)*/

 const name ="Vlad";  
 
 /*  фамилия (постоянное) */
 
 const name ="Orpik";

   
  /* возраст (может изменяться) */
 let age = "20";

  /* 1
  Что будет в консоле и почему:
// 1 (Посмотреть про всплытие https://medium.com/@stasonmars/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%D0%BC-hoisting-%D0%B2-javascript-7d2d27bc51f1)
console.log(test);
var test = 'string';  

Выведется значение стринг т.к переменная типа var)

//2
var x = 'string';
var x = 'string 2';
console.log(x);

Выведется string 2 т.к. string 2 было присвоенно позже

// 3
console.log(test);
let test = 'string';

var x = 'string';
var x = 'string 2';
console.log(x);

let num = 12;
let num = 1;

Будет ошибка т.к. идентификатор num уже объявлен
*/
