                    // Объекты - это некоторая конкретная реализация какой-то сущности.                                           
// создаем пустой объект
// мы используем ключевое слово new для создания объекта 
var obj = new Object();

// второй вариант создания объекта var obj2 = {};      

//!!! Первый вариант
// создаем пустой объект
var student = new Object();
// Добавляем свойство в объект используя обычный
// синтаксис массивов 
// ["ключ"] 
student["Name"] = "Vasya"; // вместо двойных кавычек можно использовать одинарные
student['Age'] = 23;
alert(student["Name"]);
alert(student['Age']);

//!!! При втором способе вы добавляете свойства в объект, как будто вы уже ранее указывали их.
// создаем пустой объект
var firm = {};
// создаём свойство внутри объекта
firm.Name = "Star Inc";
firm.Address = 'Somewhere street 5';
alert(firm.Name);
alert(firm.Address);

//Удаление свойств
/*
Добавленные к объекту свойства можно удалить.
Для этого используется delete.
После удаления свойства, ключ и значение безвозвратно исчезнут.
*/
// создаем пустой объект
var cat = {};
// задаём значение свойствам
// синтаксис через точку
cat.Name = "Vasiliy";
// синтаксис, как при работе с массивами
cat["Age"] = 2;
// отображаем значения
alert(cat.Name);
// можем обращаться в любом синтаксисе
alert(cat.Age);
alert(cat["Age"]);
// удаляем свойства
delete cat.Name;
delete cat["Age"];
// при попытке показа значения мы увидим значение
// undefined
alert(cat.Name);
alert(cat.Age);

// Проверка существования свойства внутри объекта
// создали объект
var obj = {};
obj.Name = "Oleg";
// проверяем есть ли свойство Age
// in вернет false, так как этого свойства нет
if ("Age" in obj) {
    alert("Exists");
} else {
    alert("Not exists");
}

// Ещё один способ создания объекта со свойствами
// Третий вариант)))
// !!!Пример
// создали объект студента
var student = {
    name: "Daria",
    lastName: "Kislicina",
    age: 23
};
/*  То же самое, что и выше
  var student = {};
    student.name = "Daria";
     student.lastName = "Kislicina";
       student.age = 23;
        */
alert(student.age);

// !!!Еще вариант.При создании объекта можно внутрь вставить другой объект.
// создали объект студента
var student = {
    name: "Daria",
    lastName: "Kislicina",
    age: 23,
    address: {
        street: "Tiraspolskaya 5",
        city: "Larnaca",
        country: "Kipr"
    }
};
alert(student.lastName);
alert(student.address.street);
alert(student.address.city);

// Просмотр всех свойств внутри объекта
// Узнаем все свойства объекта.
var rect = {
    x: 0,
    y: 0,
    endX: 10,
    endY: 10
};
// в tempProperty будет попадать название свойства
// такое как x,y,endX,endY
for (var tempProperty in rect) {
    // отображаем название свойства
    alert(tempProperty);
    // значение свойства
    alert(rect[tempProperty]);
}

// Примеры объектов {} {} {}...
const options = {
    name: 'project',
    with: '1200',
    height: '1200',
    colors: {
        border: 'red',
        bg: 'yellow'
    }
}
// получаем одно из.. значений 
console.log(options.height);
delete options.height;
console.log(options)





