// Завдання 1. forEach 
 
// Заданий масив з числами. Знайдіть суму цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

// let arr = [5, 6, 7, 8, 9];
// let s = 0;
// arr.forEach(function(val, ind,arr){
//     s +=arr[ind];
// })

// console.log(s);

// Завдання 2. Map 
 
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.	
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

// let arr = [5, 6, 7, 8, 9];
// const newArr = arr.map(a => a*a)
//     console.log(newArr);

// Завдання 3. Every
 
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.

let arrs = [
    {
        name: 'Ivan', 
        country: 'Ukraine'
    },
    {
        name: 'Petro', 
        country: 'Ukraine'
    },
    {
        name: 'Miguel', 
        country: 'Cuba'
    }
]

let newArr = arrs.every(arr => arr.country === 'Ukraine');
console.log(arrs);
console.log(newArr);

// Завдання 4. Some
 
// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.

// let arrs = [
//     {
//         name: 'Ivan', 
//         country: 'Ukraine'
//     },
//     {
//         name: 'Petro', 
//         country: 'Ukraine'
//     },
//     {
//         name: 'Miguel', 
//         country: 'Cuba'
//     }
// ]

// let newArr = arrs.some(arr => arr.country === 'Cuba');
// console.log(arrs);
// console.log(newArr);

// Завдання 5. Filter ---
 
// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
//     let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.


// Завдання 6. Reduce ----
 
// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.

// let arr = [1, 2, 5, 0, 4, 5, 6];
// for(let i=0; i<arr.length;i++){
//     let s = 0;
//     do{
//           s +=arr[i];
//           console.log(s);
//     }
//     while(arr[i]!=0)
//     console.log(s);
// }
// -----
// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let suma = 0;
// while(suma!=11){
//       suma = arr.reduce((accum, value)=>accum += value, 0);
//       console.log(suma);
// }

// Завдання 7. Любим методом
 
// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// let newArr = arr.filter(a => a>=0);
// console.log(newArr);
// let newArr2 = newArr.map(a => a*a);
// console.log(newArr2);