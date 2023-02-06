const arr = [7, 8, 23, 78, 38];
// pop() - удаляет последний элемент массива
arr.pop();
console.log(arr);

// push() - добавляет в конец элемент массива
arr.push(700);
console.log(arr);

// перебор массива 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let meaning of arr) {
    console.log(meaning);
}


// сломанная логика
const arr2 = [995, 654, 890, 542, 0, 34, 67];
arr2[99] = 300;
console.log(arr2.length);
console.log(arr2);

// вызов массива по индексу.
const arrI = [3, 5, 'я строка', 9];
console.log(arrI[2]);


// перебор массива через метод forEach 
// callback function
const arr3 = [434, 234, 590, 89, 73, 5500, 30000];
arr.forEach(function (item, i, arr3) {
    console.log(`${i}: ${item} с массивом внутри ${arr3}`)
});


// метод создания массива 2 способ const myArray = new Array.
const myArray = new Array("Egor", 300, false,);
console.log(myArray[0]);
console.log(myArray.length);

const myArray2 = new Array("Egor", 300, false,);
// сравним массивы.
myArray === myArray2;

// дальше  
const myArray3 = myArray
myArray === myArray3


// Задача: Дан массив arr: Выведите с его помощью слово 'черный'.
var arrTask = {
    'ru': ['черный', 'красный', 'зеленый'],
    'en': ['black', 'red', 'green'],
}