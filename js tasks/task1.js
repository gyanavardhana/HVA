// using a normal function...
function isprime(num) {
    if (num <= 1){

        return 0;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return 0;
    }
    return 1;
}
// using a anonymous function...
const aisprime = function(num) {
    if (num <= 1){
        return 0;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return 0;
    }
    return 1;
}
// using a arrow function...
const arisprime = (num) => {
    if (num <= 1){
        return 0;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return 0;
    }
    return 1;
}
///////////////////////////////////////

let num=2
let pr = []
while(pr.length<100){
    if(arisprime(num)){
        pr.push(num)
    }
    num++
}
console.log(pr)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// second max using normal function

function secmax(arr){
    arr.sort((a,b)=>a-b)
    return arr[arr.length-2];
}
// second max using anonymous function
const secomax = function(arr){
    arr.sort((x,y)=>y-x);
    return arr[1];
}
// second max using arrow function
const seconmax = (arr) => {
    arr.sort((x,y)=>y-x);
    return arr[1];
}
console.log(secmax([1,2,3,4,5,6,7,8,9,10]));
