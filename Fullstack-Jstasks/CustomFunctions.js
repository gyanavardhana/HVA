/*
ForEach: Write a function called forEachArray() that takes an array and a callback function as arguments. 
The forEachArray() function should apply the callback function to each element of the array but does not return anything.
 Note: You cannot use the inbuilt forEach function.
*/
let array = [1,2,3,4,5];
function callback(element){
    console.log(element);
}

function forEachArray(callback, array){
    for(let i = 0; i<array.length; i++){
        callback(array[i]);
    }
}
forEachArray(callback, array);
/*
Map: Write a function called mapArray() that takes an array and a callback function as arguments.
 The mapArray() function should apply the callback function to each element of the array and return a new array containing the transformed elements. 
 Note: You cannot use the inbuilt map function.
 */
function callback1(element){
    return element*element;
}
function mapArray(callback, array){
    let newArray = [];
    for(let i = 0; i<array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const callback1Array = mapArray(callback1, array);
console.log(callback1Array);

 /*
Filter: Write a function called filterArray that takes an array and a callback function as arguments.
 The filterArray function should apply the callback function to each element of the array and 
 eturn a new array containing only the elements for which the callback function returns true.
  Note: You cannot use the inbuilt filter function.
  */
function callback2(element){
    return element>2;
}
function filterArray(callback, array){
    let newArray = [];
    for(let i = 0; i<array.length; i++){
        if(callback(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const callback2Array = filterArray(callback2, array);
console.log(callback2Array);