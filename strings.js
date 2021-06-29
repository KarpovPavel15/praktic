let string = 'string test example'


 /* Получить первую и последнюю букву строки*/

 console.log(string.charAt(0));
 console.log(string[string.length-1]);

 /* Сделать первую и последнюю буквы в верхнем регистре*/

 console.log(string[0].toUpperCase());
 console.log(string[string.length-1].toUpperCase());


 /* Найти положение слова string в строке*/

 console.log(string.indexOf("string"));

 
 /* Найти положение второго пробела*/
 let pos = string.indexOf(' ', string.indexOf(' ') + 1);
 console.log(pos);

 /* Получить строку со 2-ого символа длинной 6 букв*/

 console.log(string.slice(1,8));
 
 /* Получить строку с 1 по 7 символ*/

 console.log(string.slice(0,7));

  /* Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' */

 let  x = 20;
 let  y = 21;
 let a = String(x);
 let b = String(y)
 console.log(a+b);