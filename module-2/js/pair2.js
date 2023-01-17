// Массивы [] или Array
/*
- это структура данных, которая группирует набор некоторых значений под одним именем.
Для доступа к конкретному значению используется индекс.
Индексация в массивах в JavaScript начинается с нуля.
*/

// !!! ПЕРВЫЙ СПОСОБ СОЗДАНИЯ МАССИВА
// Объект Array
// Примеры создания массивов
// создаем пустой массив
var arrayName = new Array();
// создаем массив заданной длины
var arrayName = new Array(Number.length);
// создаем массив и сразу инициализируем его значениями
var arrayName = new Array(element1, element2, elementN);

// создали пустой массив
var arr = new Array();
// заполнили его значениями
arr[0] = 34;
arr[1] = 99;
arr[2] = 100;

// создали массив с длиной 3
var arr2 = new Array(3);
// заполнили его значениями
arr2[0] = 111;
arr2[1] = 56;
arr2[2] = 73;

// теперь длина массива увеличилась на 2 элемента
arr2[3] = 333;
arr2[4] = 999;
// создали массив и сразу записали в него три значения 
var arr3 = new Array("music", "guitar", "apple");
// добавили ещё один элемент 
arr3[3] = "lemon";

// Для того, чтобы узнать длину массива нужно воспользоваться свойством length.
var arr = new Array(10, 20);
// отображаем значение нулевого элемента 
// 10 
alert(arr[0]);
// с помощью alert можно показывать весь массив сразу 
// элементы массива будут перечислены через запятую 
alert(arr);
// показываем длину массива
//2
alert(arr.length);

// Важно помнить !!!
var arr = new Array();
// реальных заполненных элементов один
arr[499] = 86;
// на экране 500
// length это последний индекс + 1 !!!!!!!!!!!!!!!!
alert(arr.length);
// при обращении к неинициализированному элементу 
// отобразится undefined
alert(arr[0]);

// уменьшить значение length !!!



// !!! ВТОРОЙ СПОСОБ СОЗДАНИЯ МАССИВА - это короткий способ и применяймый на практике...
// создаём пустой массив 
var arr = [];
// записали в него 2 элемента
arr[0] = 11;
arr[1] = 12;
// 11,12 
alert(arr);
// создаём массив с тремя элементами
var arr = [88, 99, 111];
// 88,99,11
alert(arr);
// создаём массив с тремя элементами
var cars = ["BMW", "Audi", "Toyota"];
// "BMW","Audi","Toyota"
alert(cars);
// 3
alert(cars.length);


// Обращение к элементам массива
// Пример
var arr = [2, 9, 33, 1];
var amt = 0;
// считаем в цикле сумму элементов массива
for (var i = 0; i < arr.length; i++) {
    amt += arr[i];
}
// результат 45
alert(amt);

// Пример2
var arr = [33, "sun", 12, "planet"];
for (var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}

// Пример Создаём двумерный массив
// создали двумерный массив 2 строки 3 столбца
// 1 3 5
// 2 7 8
var arr = [
    [1, 3, 5],
    [2, 7, 8]
];
// 1
alert(arr[0][0]);
// 8
alert(arr[1][2]);

// Пример
// функция записывает новое значение по указанному
// индексу
function SetValue(arr, index, newValue) {
    arr[index] = newValue;
}
var arr = [88, 11, 3];
// 88,11,3
alert(arr);
SetValue(arr, 0, 999);
// 999,11,3 
alert(arr);



// Свойства и методы массивов
//У массивов в JavaScript есть большое количество встроенных методов.
// Метод поиска - это indexOf и last-IndexOf
name_of_array.indexOf(what_to_search[fromIndex])
// indexOf- ищет совпадение в массиве слева направо !!!
// Если искомое значение найдено метод возвращает индекс найденного значения, 
// если же значения нет в массиве, то метод вернет - 1.
// Пример
var arr = [1, 45, -3, 78, 1];
// ищем значение 45
var index = arr.indexOf(45);
// на экране индекс 1
alert(index);
// ищем значение, которого нет в массиве
index = arr.indexOf(99);
// на экране -1, так как 99 нет в массиве 
alert(index)

// Пример 
// подсчета сколько раз некоторое искомое значение встречается в массиве.
var arr = [12, 45, -3, 82, 12, 78, 12];
// счетчик для подсчета количества раз вхождения
// искомого значения в массив
// искать будем значение 12
var counter = 0;
var index = arr.indexOf(12);
while (index != -1) {
    counter++;
    // двигаемся дальше по массиву за счет изменения
    // индекса на значение индекс+1
    index = arr.indexOf(12, index + 1);
}
// на экране 3 
alert(counter);

// Пример *
const a = [32, 17, 77, 89, 50]
// -1
console.log(a.indexOf(4));


// Метод lastIndexOf - но ищет по index справа налево.
// Если искомое значение найдено метод возвращает индекс найденного значения, 
// если же значения нет в массиве, то метод вернет - 1.
// Пример 
var arr = [12, 45, -3, 82, 12, 78, 12];
// ищем 12 справа налево
var index = arr.lastIndexOf(12);
// на экране 6
alert(index);
index = arr.lastIndexOf(77);
// на экране -1
alert(index);


// Пример подсчёта сколько раз встречается искомое значение в массиве при помощи lastIndexOf
var arr = [12, 45, -3, 82, 12, 78, 12];
// счетчик для подсчета количества раз вхождения
// искомого значения в массив
// искать будем значение 12
var counter = 0;
var index = arr.lastIndexOf(12);
while (index != -1) {
    counter++;
    // мы проверяем на ноль
    // так как ниже начинаем с index-1 
    // при 0 мы получим старт -1 
    // для метода lastIndexOf отрицательный индекс
    // означает искать с конца массива  
    if (index == 0)
        break;
    // двигаемся дальше по массиву за счет изменения
    // индекса на значение индекс-1  
    index = arr.lastIndexOf(12, index - 1);
}
// на экране 3 
alert(counter);


// Метод sort
// Привер
var arr = [10, 1, 3, 33, 6];
arr.sort();
// 1 10 3 33 6
alert(arr);

// Пример сортировки данных по возрастанию:
function compareFunc(a, b) {
    if (a > b)
        return 1;
    else if (b > a)
        return -1;
    else return 0;
}
var arr = [10, 1, 3, 33, 6];
// 1 3 6 10 33
arr.sort(compareFunc);
console.log(arr);

// Сортировка по убыванию
function compareFunc(a, b) {
    if (a > b)
        return -1;
    else if (b > a)
        return 1;
    else return 0;
}
var arr = [10, 1, 3, 33, 6];
// 33 10 6 3 1
arr.sort(compareFunc);
alert(arr);