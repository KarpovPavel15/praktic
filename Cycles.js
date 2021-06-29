

/* В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре" */

let string = 'Я стану крутым программистом';

let str = string.split('');

for(let i =0; i< str.length; i++){
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
let result =str.join('');
console.log(result);

 /* Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) . */

  let num = 5;
  let total = 1;

for (i = 0; i < num; i++){
    total = total * (num - i);
}

console.log(num  + total);


  /* Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1" */

  let str ="Просветление наступит через:"
  for(let i=1; i<=10; i++){
      str= str+i;
    }
    console.log(str);

/* Найти и вывести в консоль все нечетные числа от 1 до 20 включительно */
let num =20
for (var i = 1; i < 20; i += 2) {
   if(num%2==0){
     console.log(i);
   } 
}

/* На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы */
  

let string = 'теперь я мастер циклов javascript';
let str ="";
let s = string.split('');

for(let i =0; i< s.length; i++){
    str=s[i]=s[i].charAt(0).toUpperCase()+s[i].slice(1);
    str.trim();
}
let result =s.join('');

console.log(result);


