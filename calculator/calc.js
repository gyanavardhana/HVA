const but0 = document.getElementById('btn0');
but0.addEventListener('click', () => {
    res.innerText += '0';
});
const but1 = document.getElementById('btn1');
but1.addEventListener('click', () => {
    res.innerText += '1';
});
const butClr = document.getElementById('btnClr');
butClr.addEventListener('click', () => {
    res.innerText = '';
});
const butEql = document.getElementById('btnEql');
butEql.addEventListener('click', ()=>{
    befres = res.innerText;
    res.innerText = '';
    if (befres.includes('+')){
        let nums = befres.split('+');
        let num1 = parseInt(nums[0],2);
        let num2 = parseInt(nums[1],2);
        let sum = num1 + num2;
        res.innerText = sum.toString(2);
    }else if (befres.includes('-')){
        let nums = befres.split('-');
        let num1 = parseInt(nums[0],2);
        let num2 = parseInt(nums[1],2);
        let sum = num1 - num2;
        res.innerText = sum.toString(2);
    }else if (befres.includes('*')){
        let nums = befres.split('*');
        let num1 = parseInt(nums[0],2);
        let num2 = parseInt(nums[1],2);
        let sum = num1 * num2;
        res.innerText = sum.toString(2);
    }else if (befres.includes('/')){
        let nums = befres.split('/');
        let num1 = parseInt(nums[0],2);
        let num2 = parseInt(nums[1],2);
        let sum = num1 / num2;
        res.innerText = sum.toString(2);
    }
});

const butSum = document.getElementById('btnSum');
butSum.addEventListener('click',()=>{
    res.innerText += '+';
});
const butSub = document.getElementById('btnSub');
butSub.addEventListener('click',()=>{
    res.innerText += '-';

});
const butMul = document.getElementById('btnMul');
butMul.addEventListener('click',()=>{
    res.innerText += '*';

});
const butDiv = document.getElementById('btnDiv');
butDiv.addEventListener('click',()=>{
    res.innerText += '/';

});