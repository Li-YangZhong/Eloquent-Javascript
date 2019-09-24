// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }

// repeat(3, console.log);

// let labels = [];
// // repeat(5, i => {
// //     labels.push(`Unit ${i + 1}`);
// // });
// // console.log(labels);
// // // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

// repeat(5, i => labels.push(`Unit ${i + 1}`));
// console.log(labels);
// // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);

// console.log(typeof greaterThan10);
// console.log(greaterThan10);
// console.log(greaterThan10(11));
// // → true


// function noisy(f) {
//       return (...args) => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
// };
// }
// noisy(Math.min)(3, 2, 1);
// // → calling with [3, 2, 1]
// // → called with [3, 2, 1] , returned 1



// ["A", "B", "CDEF"].forEach(l => console.log(l));
// → A
// → B
// CDEF

