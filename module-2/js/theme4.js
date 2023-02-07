   // Задержки и интервалы.
// Периодический вызов функций. (Таймер).
// Функция setTimeout используется для установки таймера.
// Простой пример функции setTimeout
function HelloWorld() {
    alert("Hello world!");
}
setTimeout(HelloWorld, 1000);

// Попробуем передать аргументы в функцию:
function Sum(a, b) {
    alert(a + b);
}
setTimeout(Sum, 1000, 1, 2);

// !!!Использовать alert не рекомендуется альтернатива безымянная(анонимная) функция.
// Функция с одной строкой кода.
setTimeout(function () {
    alert("Hi!");
}, 1000);

// Функции с параметрами.
setTimeout(
    function (a, b) {
        alert(a * b);
    }, 1000, 3, 7);

//  Функция отмены таймера clearTimeout.
// Пример
// clearTimeout(идентификатор_таймера) 
var id = setTimeout(function () {
    alert("Boom!")
}, 50000);
clearTimeout(id);

//  Функция setInterval.
setInterval(function () {
    alert("Boom!");
}, 2000);

//  Функция setInterval с вызовом clearInterval.
var id = setInterval(IntervalFunc, 2000);
var counter = 0; function IntervalFunc() {
    if (counter == 3) {
        clearInterval(id);
        return;
    }
    counter++;
    alert("Boom");
}

//  Альтернативой использованию setInterval является рекурсивный вызов setTimer.
var id = setTimeout(TimeOutFunc, 2000);
var counter = 0;
function TimeOutFunc() {
    // если таймер сработал уже трижды  
    // останавливаем процесс 
    if (counter == 3) {
        clearTimeout(id);
        return;
    }
    counter++;
    alert("Boom Timer");
    // ставим занова таймер на две секунды 
    id = setTimeout(TimeOutFunc, 2000);
}

/*  Можем использовать setTimeout несколько гибче,
так как у вас есть возможность каждый раз указывать новую длительность задержки.
*/
var id = setTimeout(TimeOutFunc, 2000);
var counter = 1;
function TimeOutFunc() {
    alert("Boom Timer");
    switch (counter) {
        case 1:
            id = setTimeout(TimeOutFunc, 5000);
            break;
        case 2:
            id = setTimeout(TimeOutFunc, 10000);
            break;
        case 3:
            clearTimeout(id);
            return;
    }
    counter++;
}
