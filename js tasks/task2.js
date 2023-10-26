class rectange{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    carea(){
        return this.width*this.height;  
    }
    cperimeter(){
        return 2*(this.width+this.height);
    }
}
let rect = new rectange(4,5);
let rect1 = new rectange(5,8);
let rect2 = new rectange(23,2342);

console.log(rect.carea());
console.log(rect.cperimeter());
console.log(rect1.carea());
console.log(rect1.cperimeter());
console.log(rect2.carea());
console.log(rect2.cperimeter());

///////////////////////////////////////////////


// second max in an array

let arr = [7,2,5,2,1,9,35,2,345,23]
const k = (arr) => {
    arr.sort((a,b)=>b-a);
    return arr[1];
}
console.log(k(arr));

///////////////////////////////////////////////
