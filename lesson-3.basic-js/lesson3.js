// const mas = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];
// let resKeys = mas.map(item => console.log(Object.keys(item)));
// let resValues = mas.map(item => console.log(Object.values(item)));


//////////////////////////////////////////////////////////////////////////////////////////////////////////


//Task11

// function resArr() {
//     const arr1 = [1, 2, 3, 4];
//     const arr2 = [2, 3, 4, 5];
//     let newArr = [];
//     let length;
  
//   if (arr1.length >= arr2.length) {
//     length = arr1.length;
//   } else {
//     length = arr2.length;
//   }

//     for (let i = 0; i < length; i += 1){
//         const a = arr1[i] === undefined ? 0 : arr1[i];
//         const b = arr2[i] === undefined ? 0 : arr2[i];
//         newArr.push(a + b);
//     }
//     console.log(newArr);
// };
// resArr();


////////////////////////////////////////////////////////////////////////////////////////////////////


//Task

// function funcRElement(){
//     // console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const funRandomElement of arguments) {
//         if (funRandomElement > max) max = funRandomElement;
//         if (funRandomElement < min) max = funRandomElement;
//     };
//     console.log("max ",max);
//     return min;
// };
// const min = funcRElement(2,3,4,5,6,7,8);


//////////////////////////////////////////////////////////////////////////////////////////////////////


// Task

const foo = (arr, value) => {
    const arr1 = arr[value];
    const arr2 = arr[value + 1];

    arr[value] = arr2;
    arr[value + 1] = arr1;

    return arr;
};
// console.log(foo([9, 8, 0, 4], 0));
// console.log(foo([9, 8, 0, 4], 1));
// console.log(foo([9, 8, 0, 4], 2));


//////////////////////////////////////////////////////////////////////////////////////////////////////


//Task

// const sortArr = arr => {
//     let arrNotZero = [];
//     let arrZero = [];
//     let newMas = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === 0) {
//             arrZero.push(arr[i]);
//             } else {
//             arrNotZero.push(arr[i]);
//         }
//     }
//     newMas = [...arrNotZero, ...arrZero];
//     console.log(newMas);
// };

// sortArr([1, 0, 6, 0, 3]);
// sortArr([0, 1, 2, 3, 4]);
// sortArr([0, 0, 1, 0]);


///////////////////////////////////////////////////////////////////////////////////////////////////


//Task

// const normalizedFunc = str => {
//     let transformStr = str.split('      ');
//     let newStr = transformStr.join('');
//     console.log(transformStr);
//     console.log(newStr);
//    };

// normalizedFunc('    Harry       Potter      ');
// normalizedFunc('    Ron       Whisley      ');
// normalizedFunc('    Hermione       Granger      ');