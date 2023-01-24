// Фундаментальные  принципы ООП
// ООП — это наследование, инкапсуляция и полиморфизм.
// !!! Инкапсуляция - её принцип подразумевает, что мы скрываем детали реализации класса от доступа извне,
// делая переменные и функции недоступными из экземпляров класса.
// Напомню, что экземпляры класса — это переменные (константы),созданные на основе функции-конструктора или класса.

//Все свойства и методы, которые мы создавали до сих пор, принято называть публичными.
// Пример плохого кода, т.е. не защищенного.
function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`Имя пользователя ${this.name}, возраст: ${this.age}`);
    };
}

let user = new User('Roman', 34);
console.log(user.name);
console.log(user.age);
user.say();

user.age = 30;
user.name = 'Petya';
user.say();


// Пример нормального кода.
function User(name, age) {
    this.name = name;
    let useAge = age;

    this.getAge = function () {
        return useAge;
    }
    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            useAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
    this.say = function () {
        console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
    };
}

let user = new User('Roman', 34);
console.log(user.name);
console.log(user.userAge);
user.say();
console.log(user.getAge());
user.setAge('30');
console.log(user.getAge());


// Наследование.