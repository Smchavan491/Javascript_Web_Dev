//Creation of async function

// async function getData(){
//     setTimeout(function() {
//         console.log("I am here")
//     },15000
// )
// }
// getData()

//Fetch API

async function getData() {
    //get request
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //parse json async
    let data = response.json()
    console.log(response)
}

// scenario :
//1)prepare url / api endpoint / syncx
//2)fetch data -> networkcall -> async
//process data -> async
