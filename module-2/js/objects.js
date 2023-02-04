// Примеры:

// const obj = new Object(); структура не очень и запись большая    

const optionTest = {
    name: 'test',
    width: 800,
    height: 800,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(optionTest.name);

// delete optionTest.name;
console.log(optionTest);

for (let key in optionTest) {
    console.log(`Свойство ${key} имеет значение ${optionTest[key]}`);
}

for (let key in optionTest) {
    if (typeof (optionTest[key]) === 'object') {
        for (let t in optionTest[key]) {
            console.log(`Свойство ${t} имеет значение ${optionTest[key][t]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${optionTest[key]}`);
    }
}

let counter = 0;
for (let key in optionTest) {
    if (typeof (optionTest[key]) === 'object') {
        for (let t in optionTest[key]) {
            console.log(`Свойство ${t} имеет значение ${optionTest[key][t]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${optionTest[key]}`);
        counter++;
    }
}
console.log(counter);

// Получаем массив всех ключей.
console.log(Object.keys(optionTest).length);