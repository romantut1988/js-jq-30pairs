                                      // Строки
// Объект String
// используем двойные кавычки
var str = "Test string";
alert(str);
// используем одинарные кавычки 
var str2 = 'New string';
alert(str2);

// \t — табуляция 
var str = "Sun\t is going \\down\\";
// Sun is going \down\ 
alert(str);
// для вставки кавычек в строку надо использовать \"
var str2 = "\"Yes\"";
// на экране "Yes"
alert(str2);

// Для доступа к конкретному элементу строки необходимо использовать []
var str = "trees and fruits";
// на экране trees and fruits
alert(str);
// на экране t 
alert(str[0]);
// на экране s 
alert(str[5]);

// !!! Запомнить строки в JS являются неизменяемыми объектами.
// Нельзя изменить элемент строки(например элемент по индексу)
var str = "trees and fruits";
// на экране trees and fruits 
alert(str); str[0] = "Z";
// на экране все равно t
alert(str[0]);
str[4] = "W"
// на экране s
alert(str[4]);
str = "Here is a car";
// на экране Here is a car
alert(str);

// Для конкатенации строк используется оператор +.
var first = "boat";
var second = "river";
var result = first + " and " + second;
// boat and river
alert(result);



// Свойства и методы String
// У строки есть большое количество свойств и методов,
// которые очень полезны для решения той или иной задачи.
// Свойство length - используется для получения длины строки:
var str = "gold";
// 4
alert(str.length);

/*
Метод charAt является аналогом[] и используется для доступа к i - му элементу массива.
Отличие между charAt и[] состоит в том, что при обращении к несуществующему индексу 
charAt возвращает пустую строку, а[] значение undefined.
*/
var str = "gold";
// g
alert(str.charAt(0));
// пустая строка
alert(str.charAt(15));
// undefined
alert(str[15]);

// Методы toLowerCase и toUpperCase изменяют регистр букв.
var str = "FootbalL";
var newStr = str.toLowerCase();
// football
alert(newStr);
// FootbalL
alert(str);


// Вспомним  о методах indexOf и lastIndexOff, которые использовались для поиска по массиву.
// Пример поиска значения в строке:
var str = "earth and sun";
var index = str.indexOf("sun");
// значение индекса равно 10
alert(index);
index = str.indexOf("moon");
// значение индекса равно -1
// так как moon нет в строке 
alert(index);

// Задача посчитаем сколько раз некоторое слово встречается в строке.
var str = "test it is test sun test no";
var counter = 0;
var wordToFind = "test";
var index = str.indexOf(wordToFind);
while (index != -1) {
    counter++;
    index = str.indexOf(wordToFind, index + 1);
}
// 3
alert(counter);



// Методы substr, substring используются для получения подстроки из строки.
// Метод substring(start,[end]) возвращает подстроку начиная с индекса start, но не включая индекс end.
// Если end не указан, то возвращаем подстроку до конца строки
var str = "Some value";
// end — необязательный параметр, который можно опустить
var newStr = str.substring(2);
// me value
alert(newStr);
newStr = str.substring(1, 3);
// om
alert(newStr);

/*
Метод substr(start, [length]) работает немного по другому.
Он возвращает подстроку начиная с start, при этом можно указать длину подстроки во втором параметре.
Если же длина не указана, то возвращается подстрока до конца оригинальной строки.
*/
var str = "Some value";
// length — необязательный параметр, который можно опустить 
var newStr = str.substr(2);
// me value
alert(newStr);
newStr = str.substr(1, 3);
// ome 
alert(newStr);

// Метод slice(start, end) работает немного по другому. 
// есть особеность работать с отрицательным оргументом !!!
let str = "сегодня славный день";
let newStr = str.slice(4);
alert(newStr);
newStr = str.slice(1, -3);
alert(newStr);

// Метод localCompare(compareValue)
var str = "cheese";
// попадем в if, так как строки равны между собой
if (str.localeCompare("cheese") == 0) {
    alert("Strings are equal! Cheese!");
} else {
    alert("Strings are not equal! Not cheese!");
} str = "Fb";
// первая строка больше, так как сравнение происходит
// посимвольно до первого несовпадения 
// F больше по числовому коду чем f 
// поэтому первая строка больше
if (str.localeCompare("fb") > 0) {
    alert("First is greater");
} else {
    alert("Equal or less than second string");
}