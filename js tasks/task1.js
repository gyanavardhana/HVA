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
