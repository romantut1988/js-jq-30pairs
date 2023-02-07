// отправка на сервер запроса - stringify
const userPersone = {
    name: "Martin",
    tel: '+77777777'
};
console.log(JSON.stringify(userPersone));

// получение от сервера - parse
console.log(JSON.parse(JSON.stringify(userPersone)));

// глубокие копии
const user2Persone = {
    name: "Martin",
    tel: '+77777777',
    parents: {
        mather: 'Nina',
        father: 'Tolia'
    }
};

const clone = JSON.parse(JSON.stringify(user2Persone));
clone.parents.mather = 'Olia';
console.log(user2Persone);
console.log(clone);