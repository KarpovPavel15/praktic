 /* Получить число Pi из Math и округлить его до двух знаков после точки */
 let num = Math.PI;
 console.log(num.toFixed(2))

  /* Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1 */

  console.log(Math.max(10,17,5,12,15,99,1));

 /* С помощью Math.random:
получить случайное число и округлить его до двух цифр после запятой
получить случайное число от 0 до Х */


console.log(Math.random().toFixed(2));

let x;
console.log(Math.random(0,x));

/* Получить число из строки '100$'   (не получилось)*/

let  str = '100$';
let num3 = parent(str.match(/\d+/))
console.log(num3)



