//                                  Классы в JavaScript
// Синтаксис класса в JavaScript подразумевает, что вы используете ключевое слово class,
// имя(название) этого класса с большой буквы и внутри него описываете главную функцию - конструктор,
// которая так и называется — constructor.В этой функции, как правило, вы указываете все свойства класса,
// а методы описываете, как другие функции внутри класса.
// Пример создаем класс в JavaScript
class Human {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
    }
    showInfo() {
        console.log(this.firstname + ' ' + this.lastname);
    }
    showAge() {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const age = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + ' ' + this.lastname + ' is ' + age + ' years old.');
    }
}
const john = new Human('John', 'Smith', '09-17-2003');
john.showInfo(); john.showAge();
console.log(john);

// Пример поиска площади и периметра прямоугольника, для которого известны его ширина и высота. 
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    square() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

let rect1 = new Rectangle(20, 30);
console.log(rect1.square(), rect1.perimeter());
//600 100
let rect2 = new Rectangle(78, 92);
console.log(rect2.square(), rect2.perimeter());
// 7176 340
console.log(rect1, rect2);
