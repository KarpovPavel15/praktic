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

let n;//можно и без инициализации
let a;//можно и без инициализации
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
//talk
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
  console.log(sortReverse(arr)); //[9, 6, 5, 3, 2, -1, -9] - правильный ответ 

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

//Удвоить элементы массива, не используя циклы.,
//Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
//Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
//Вставить в произвольный массив любое значение после второго элемента.
//Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"
//Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},
//]

//Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]
//Например, filterServices(services, 20, 60).

