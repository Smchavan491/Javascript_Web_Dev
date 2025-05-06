const calculate = (a,b,operation)=>{
    return operation(a,b)
}

//method1 callback
let add = calculate(3,4, function(num1, num2){
    return num1+num2
})
console.log(add)

//method2 callback
let sub = (a,b) => a-b 
let subresult =  calculate(8, 3, sub);

console.log(subresult)

//methode3 callback
function mul(a, b){
    return a*b
}
const mulresult = calculate(4,3,mul)
console.log(mulresult)

//note : when we pass any value as a parameter or argument we never used bracket like add
// when we want to call function we used bracket like add()

