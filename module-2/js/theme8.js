// Функции-конструкторы  в JavaScript
// Примеры:
let diana = {
    firstname: 'Diana',
    lastname: 'Fenton',
    birthday: '07/22/1996',
    showInfo: function () {
        console.log('Student name: ' + this.firstname + ' ' + this.lastname);
    },
    showAge: function () {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const studentAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + ' ' + this.lastname + ' is ' + studentAge + ' years old.');
    }
}
let luis = {
    firstname: 'Luis',
    lastname: 'Melitano',
    birthday: '02/06/2002',
    showInfo: function () {
        console.log('Student name: ' + this.firstname + ' ' + this.lastname);
    },
    showAge: function () {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const studentAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + ' ' + this.lastname + 'is' + studentAge + 'years old.');
    }
}
console.log(diana);
diana.showInfo();
diana.showAge();
console.log(luis);
luis.showInfo();
luis.showAge();

// Функциям-конструкторам,отличие от обычных функций,принято давать имена с большой буквы, Пишем такой код:
function Student(firstname, lastname, birthday) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.showInfo = function () {
        console.log('Student name: ' + this.firstname + ' ' + this.lastname);
    }
    this.showAge = function () {
        const deltaTime = Date.now() - Date.parse(this.birthday);
        const studentAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + ' ' + this.lastname + ' is ' + studentAge + ' years old.');
    }
}
let michael = new Student('Michael', 'Dowson', '11/23/2001');
michael.showInfo();
michael.showAge();
let lisa = new Student('Lisa', 'Paltrow', '08/12/1998');
lisa.showInfo();
lisa.showAge();
console.log(michael, lisa);

// Еще пример создадим функцию-конструктор
// Условие: задачи.
// -которая будет описывать некий отель в некой стране,
// причем нас будет интересовать помимо названия отеля и его месторасположения
// еще и количество занятых и незанятых в нем номеров.
// Количество занятых номеров мы будем передавать в функцию - конструктор в качестве параметра,
// как и общее количество номеров,
// а количество доступных номеров и их процент будем получать с помощью методов, т.к.это несложно рассчитать.
function Hotel(name, country, rooms, bookedRooms) {
    this.name = name;
    this.country = country;
    this.rooms = rooms;
    this.bookedRooms = bookedRooms;
    this.availableRooms = function () {
        return this.rooms - this.bookedRooms;
    }
    this.availablePercent = function () {
        return Math.floor(this.availableRooms() / this.rooms * 100) + '%';
    }
}
let antiqueRomanPalace = new Hotel('Antique Roman Palace', 'Turkey', 270, 130),
    sharmDreamsClub = new Hotel('Sharm Dreams Club', 'Egypt', 320, 212),
    miramarenHotel = new Hotel('Miramaren Hotel', 'Greece', 70, 63);
console.log(antiqueRomanPalace.availableRooms(),
    antiqueRomanPalace.availablePercent());
console.log(sharmDreamsClub.availableRooms(),
    sharmDreamsClub.availablePercent());
console.log(miramarenHotel.availableRooms(),
    miramarenHotel.availablePercent());
miramarenHotel.bookedRooms += 4;
console.log(miramarenHotel.availableRooms(),
    miramarenHotel.availablePercent());

// !!! Прототип — это носитель важной информации об объекте,которой вы можете воспользоваться,
// а можете оставить без внимания.Это все равно, что ген человека: потенциально носитель гена
// может обладать способностями к музыке или спорту,но, если эти данные не развивать, т.е.не вызывать функции,
// ответственные за эти умения, то мы никогда не получим из Майкла или Лизы ни музыканта,
// ни спортсмена.Поэтому в JavaScript все методы принято записывать для прототипа.
// Использовать их или нет для каждого объекта зависит от задачи,
// в которой используются экземпляры объекта.Кроме того, когда методы вынесены в прототип,
// каждый объект не «несет их с собой»,
// поэтому количество используемой оперативной памяти для скрипта несколько уменьшается.
// Пример:
function Student(firstname, lastname, birthday) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
}
Student.prototype.showInfo = function () {
    console.log('Student name: ' + this.firstname + ' ' + this.lastname);
}
Student.prototype.showAge = function () {
    const deltaTime = Date.now() - Date.parse(this.birthday);
    const studentAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
    console.log(this.firstname + ' ' + this.lastname + ' is ' + studentAge + ' years old.');
}
let micha = new Student('Michael', 'Dowson', '11/23/2001');
micha.showInfo();
micha.showAge();
let lis = new Student('Lisa', 'Paltrow', '08/12/1998');
lis.showInfo();
lis.showAge();
console.log(micha, lis);


