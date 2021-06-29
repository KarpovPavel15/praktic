/*
Используя функцию, найти последний элемент массива, не изменяя его.
*/

let nums =[1,2,3,4,5];

function lastElement(arr){
 return arr[arr.length - 1]
}
console.log(lastElement(nums))

/*
Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
*/

let ar=[1,2,3]

function returnDubble(ar){
   return ar.concat(ar);
}
console.log(returnDubble(ar));

/*
Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
*/

let n;
let a;
function returnArray(a,n){
let arr= [];
for(let i=a;i<=n; i++){
    arr.push(i);
}
return arr;
}
console.log(returnArray(1,6))

/*
Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
*/

function change() {
    for (let i = 0; i <= arguments.length - 1; i++) {
      arguments[i].splice(0, 1);
    }
  }
  
  let arr1 = [1, 2, 3, 4];
  let arr2 = ["x", "y", "z"];
  
  
  change(arr1, arr2);
  
  console.log(arr1, arr2); 

  /*
Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и 
возвратит строку в обратном порядке ("кизжёедгвба").
*/

let arr =["е","к","в","а","ж","б","и","г","ё","з","д"]
function sortReverse(arr){
  return arr.sort().reverse();
}
console.log(sortReverse(arr));

 /*
Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
*/

let arr =[5, 2, -1, 6, 9, -9, 3]
function sortReverse(arr){
    return arr.sort().reverse();
  }
  console.log(sortReverse(arr));

 /*
Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер
*/
let start =1;
let last =4;
let arr=[];
function threeArguments(arr,start,last){
 arr.arguments[0]=start;
 arr.arguments[arr.length-1]=last;
    return arr;
}
console.log(threeArguments(arr));



 /*
Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам 
(с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
*/

let arr = ['а', 'б', 'в', 'г', 'д', 'е'];
let start;
let end;

function getNewArray(arr,start,end){
   return arr.slice(start,end+1);
}

console.log(getNewArray(arr,1,3))


