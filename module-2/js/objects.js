// Примеры:

// const obj = new Object(); структура не очень и запись большая.    

const optionTest = {
    name: 'test',
    width: 800,
    height: 700,
    colors: {
        border: 'red',
        bg: 'yellow'
    }
};

console.log(optionTest.name);
console.log(optionTest['width']);

delete optionTest.name;
console.log(optionTest);

for (let key in optionTest) {
    console.log(`Свойство ${key} имеет значение ${optionTest[key]}`);
}

for (let key in optionTest) {
    if (typeof (optionTest[key]) === 'object') {
        for (let t in optionTest[key]) {
            console.log(`Свойство ${t} имеет эти значения ${optionTest[key][t]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${optionTest[key]}`);
    }
}




let counter = 0;
for (let key in optionTest) {
    if (typeof (optionTest[key]) === 'object') {
        for (let t in optionTest[key]) {
            console.log(`Свойство ${t} имеет эти значения ${optionTest[key][t]}`);
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


// еще пример
const actions = {
    name: 'Roman',
    id: 7
}
const newActn = {
    ...actions,
    place: "Russia, Moskow"
}
console.log(newActn);
console.log(Object.entries(newActn));
