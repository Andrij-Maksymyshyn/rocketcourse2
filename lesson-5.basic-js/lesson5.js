// Task 1a////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [1, 3, 2, 4, 6, 5, 9, 7, 8, 10, 12, 11, 13, 46, 51, 16, 15, 18, 20, 17];
arr.sort((a, b) => a - b);
// console.log(arr);

//Task 1b/////////////////////////////////////////////////////////////////////////////////////////////////////////

arr.sort((a, b) => b - a);
// console.log(arr);

//Task 1c/////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr1c = arr.filter(item => (item % 3 === 0));
// console.log(filteredArr1c);

// Task 1d////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr1d = arr.filter(item => (item > 10));
// console.log(filteredArr1d);

//Task 1f//////////////////////////////////////////////////////////////////////////////////////////////////////////

const newArr1f = arr.map(item => (item * 3));
// console.log(newArr1f);

//Task 1g//////////////////////////////////////////////////////////////////////////////////////////////////////////

const total = arr.reduce((acc, value) =>  acc + value, 0);
// console.log(total);

//Task 2a///////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr1 = ['Розрахунок', 'вартості', 'здійснили', 'з', 'припущенням', 'що', 'більшість', 'ракет', 'які', 'влучили', 'це', 'дорогі', 'й', 'високоточні', 'Х-101', 'а', 'також', 'ракети', 'з', 'тактичною'];
const sortedArrAlphabet = [...arr1].sort((a, b) => a.localeCompare(b));
// console.log(sortedArrAlphabet);

//Task 2b//////////////////////////////////////////////////////////////////////////////////////////////////////////
const sortedArrAlphabetBack = [...arr1].sort((a, b) => b.localeCompare(a));
// console.log(sortedArrAlphabetBack);

//Task 2c//////////////////////////////////////////////////////////////////////////////////////////////////////////
const filteredArr2b = arr1.filter(item => (item.length > 4));
// console.log(filteredArr2b);

//Task 2d//////////////////////////////////////////////////////////////////////////////////////////////////////////

const changeArr = arr1.map(item => ('Some says ' + item));
// console.log(changeArr);

//Task 3a//////////////////////////////////////////////////////////////////////////////////////////////////////////

const users = [
   {name: 'vasya', age: 31, isMarried: false},
   {name: 'petya', age: 30, isMarried: true},
   {name: 'kolya', age: 29, isMarried: true},
   {name: 'olya', age: 28, isMarried: false},
   {name: 'max', age: 30, isMarried: true},
   {name: 'anya', age: 31, isMarried: false},
   {name: 'oleg', age: 28, isMarried: false},
   {name: 'andrey', age: 29, isMarried: true},
   {name: 'masha', age: 30, isMarried: true},
   {name: 'olya', age: 31, isMarried: false},
   {name: 'max', age: 31, isMarried: true}
];


const inAscendingOrderAge = users.sort((firstUser, seconsUser) => firstUser.age - seconsUser.age);
// console.log(inAscendingOrderAge);

const inDescendingOrderAge = users.sort((firstUser, seconsUser) => seconsUser.age - firstUser.age);
// console.log(inDescendingOrderAge);

//Task 3b///////////////////////////////////////////////////////////////////////////////////////////////////////

const inAscendinNameLength = users.sort((firstUser, seconsUser) => firstUser.name.length - seconsUser.name.length);
// console.log(inAscendinNameLength);

const inDescendingNameLength = users.sort((firstUser, seconsUser) => seconsUser.name.length - firstUser.name.length);
// console.log(inDescendingNameLength);

//Task 3c///////////////////////////////////////////////////////////////////////////////////////////////////////

const usersJSON = JSON.stringify(users);
const newUsers = JSON.parse(usersJSON);

const newArr3c = newUsers.reduce((acc, value, index) => {
    value.id = index + 1;
    acc.push(value);

    return acc;
}, []);
// console.log(newArr3c);
// console.log(users);

//Task 3d/////////////////////////////////////////////////////////////////////////////////////////////////////////

const sortedNewArr3c = newArr3c.sort((firstUser, secondUser) => firstUser.id - secondUser.id);
// console.log(sortedNewArr3c);

//Task 3e/////////////////////////////////////////////////////////////////////////////////////////////////////////

const newArr3e = newArr3c.reduce((acc, value) => {
    if (value.isMarried) {
        value.hasFlat = true;
        acc.push(value);
    }    

    return acc;
}, []);
// console.log(newArr3e);

//Task 4.a////////////////////////////////////////////////////////////////////////////////////////////////////////

const cars = [
   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

const filteredArr4a = cars.filter(car => car.power > 300);
// console.log(filteredArr4a);

//Task 4b////////////////////////////////////////////////////////////////////////////////////////////////////////////
const filteredArr4b = cars.reduce((acc, value) => {
    if (value.power === 200) {
        acc.push(value);
    }

    return acc;
}, []);
// console.log(filteredArr4b);

//Task 4c///////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr4c = cars.filter(car => car.producer === "mercedes");
// console.log(filteredArr4c);

//Task 4d///////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr4d = cars.reduce((acc, value) => {
    if (value.producer === "mercedes" && value.power > 300) {
        acc.push(value);
    }

    return acc;
}, []);
// console.log(filteredArr4d);

//Task 4e///////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr4e = cars.filter(car => car.engine.includes('ej'));
// console.log(filteredArr4e);

//Task 4f//////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr4f = cars.reduce((acc, value) => {
    if (value.engine.includes('ej') && value.producer === "subaru" && value.power > 300) {
        acc.push(value);
    }

    return acc;
}, []);
// console.log(filteredArr4f);

//Task 5a///////////////////////////////////////////////////////////////////////////////////////////////////////////

const usersWithAddress = [
   {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
   {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
   {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
   {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
   {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
   {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
   {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
   {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
   {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
   {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
   {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

const sortedArr5a = usersWithAddress.sort((firstUser, secondUser) => firstUser.id - secondUser.id);
// console.log(sortedArr5a);

//Task 5b/////////////////////////////////////////////////////////////////////////////////////////////////////

const sortedArr5b = usersWithAddress.sort((firstUser, secondUser) => secondUser.id - firstUser.id);
// console.log(sortedArr5b);

//Task 5c/////////////////////////////////////////////////////////////////////////////////////////////////////

const sortedArr5c = usersWithAddress.sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// console.log(sortedArr5c);

//Task 5d//////////////////////////////////////////////////////////////////////////////////////////////////////

const sortedArr5d = usersWithAddress.sort((firstUser, secondUser) => firstUser.address.street.localeCompare(secondUser.address.street));
// console.log(sortedArr5d);

//Task 5e//////////////////////////////////////////////////////////////////////////////////////////////////////

const sortedArr5e = usersWithAddress.sort((firstUser, secondUser) => firstUser.address.number - secondUser.address.number);
// console.log(sortedArr5e);

//Task 5f///////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr5f = usersWithAddress.filter(user => user.age < 30);
// console.log(filteredArr5f);

//Task 5g////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr5g = usersWithAddress.filter(user => user.age < 30 && user.isMarried);
// console.log(filteredArr5g);

//Task 5h/////////////////////////////////////////////////////////////////////////////////////////////////////////

const filteredArr5h = usersWithAddress.filter(({ address: { number } }) => number % 2 === 0);
// console.log(filteredArr5h);

//Task 5i/////////////////////////////////////////////////////////////////////////////////////////////////////////

const totalAge = usersWithAddress.reduce((acc, value) => acc + value.age, 0);
// console.log(totalAge);

//Task 5j/////////////////////////////////////////////////////////////////////////////////////////////////////////

const newArr5j = usersWithAddress.reduce((acc, value) => {
    if (value.isMarried && value.age > 30) {
        value.child = true;
        acc.push(value);
    }

    return acc;
}, []);

// console.log(newArr5j);

//Task 6a/////////////////////////////////////////////////////////////////////////////////////////////////////////

const cars2 = [
    { producer: "subaru", powerEngine: 400, year: 2010, price: 10000, owner: { name: 'vasya', age: 31, drivingExperience: 5 } },
    { producer: "bmw", powerEngine: 500, year: 2009, price: 9300, owner: { name: 'petya', age: 35, drivingExperience: 3 } },
    { producer: "mercedes", powerEngine: 550, year: 2011, price: 10500, owner: { name: 'kolya', age: 37, drivingExperience: 4 } },
    { producer: "mazda", powerEngine: 450, year: 2004, price: 5500, owner: { name: 'dara', age: 26, drivingExperience: 2 } },
    { producer: "toyota", powerEngine: 580, year: 2010, price: 7000, owner: { name: 'andrij', age: 38, drivingExperience: 7 } },
    { producer: "ford", powerEngine: 380, year: 2003, price: 4500, owner: { name: 'taras', age: 49, drivingExperience: 20 } },
    { producer: "renault", powerEngine: 390, year: 2005, price: 4700, owner: { name: 'oleh', age: 58, drivingExperience: 19 } },
    { producer: "audi", powerEngine: 610, year: 2008, price: 8000, owner: { name: 'olena', age: 29, drivingExperience: 4 } },
];

const JSONCars6a = JSON.stringify(cars2);
const newCars6a = JSON.parse(JSONCars6a);

const newPowerEngineNameArr6a = newCars6a.reduce((acc, value) => {
    value.powerEngine = Number((value.powerEngine * 1.1).toFixed(2));
    value.owner.name = 'new ' + value.owner.name;
    acc.push(value);

    return (acc);
}, []);

// console.log(newPowerEngineNameArr6a);
// console.log(cars2);

//Task 6b////////////////////////////////////////////////////////////////////////////////////////////////////////////

const JSONCars6b = JSON.stringify(cars2);
const newCars6b = JSON.parse(JSONCars6b);


const filteredArr6b = newCars6b.filter((car, index) => {
    car.id = index;
    car.powerEngine = Number((car.powerEngine * 1.1).toFixed(2));
    car.price = Number((car.price * 1.05).toFixed(2));
    
    return car.id % 2 === 0;
});

// console.log(filteredArr6b);
// console.log(cars2);

//Task 6c////////////////////////////////////////////////////////////////////////////////////////////////////////////

const JSONCars6c = JSON.stringify(cars2);
const newCars6c = JSON.parse(JSONCars6c);


const newArr6c = newCars6c.reduce((acc, value) => {
    if (value.owner.drivingExperience < 5 && value.owner.age > 25) {
        value.owner.courseDriving = true;
        value.owner.drivingExperience += 1;
        acc.push(value);
    }

    return acc;
}, []);

// console.log(newArr6c);
// console.log(cars2);

//Task 6d/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const totalValueCars2 = cars2.reduce((acc, value) => acc + value.price, 0);
// console.log('totalValueCars2', totalValueCars2);

//Task 7//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr7 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.

const search = key => {
    let minIndex = arr7.indexOf(key);
    let maxIndex = arr7.lastIndexOf(key);
    
    console.log(`MinIndex: ${minIndex}`);
    console.log(`MaxIndex: ${maxIndex}`);

}
search(4);






















