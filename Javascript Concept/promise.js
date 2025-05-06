// // for sync operation 
// let promise = new promise((resolve, reject) => {
//     console.log("Samrudhi")
// })


//promise for async code
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(function myname(){
//         console.log("samrudhi")
//     }, 1000);
//     resolve(1);
// });


//promise with 'then' & 'catch'
// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("fulfilled");  // Resolving the promise
//     } else {
//         reject("failure");  // Rejecting the promise
//     }
// });

// // Calling `.then()` and `.catch()` outside the Promise constructor
// promise
//     .then((message) => {
//         console.log("Then message is: " + message);
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     })
//     .finally((message)=>{
//         console.log("resolve rahude nhitar error aapn kayam sobat"  + message)
//     })



//what if we have to handle 
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 15000, "First")
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(reject, 15000, "second")
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 15000, "third")
})

Promise.all([promise1, promise2, promise3])

.then((values)=>{
    console.log(values)
})
.catch((error)=>{
    console.log("error : " + error)
})

//note : if one promise is rejected then no promise is going to work all will get rejected
