console.log("Roberto your JS seems to working...... for now....");
// 1. The parameters are variables that will be input to the function in order to run it, basically variables that do not need to be assigned and exist only within that function
// This will be defined when the funtion is called on.
// Arguments are the actual data that will be inputinto the parameters.

// 2. In a function, return will "return" or insert a value back into something else (variables, etc.) whenever the code is ran. 
// console.log is used to actually print out values in the console part of dev tools.

// 3.  In short.. the sky is the limit.  Being able to use functions to compute code and return values to other things
// will allow you to do many many different things.

const checkPalindrome = (str) => {
    let revStr = [];
    const strSplit = str.split("");
    for (i = 0; i < strSplit.length; i++){
        revStr.unshift(strSplit[i]);
    }
    let joinStr = revStr.join("");
    if (joinStr.toLowerCase() === str.toLowerCase()){
        console.log("true");
    } else {
        console.log("false");
    }
}
checkPalindrome("Racecar");

const sumDigits = (num) => {
    const numStr = '' + num;
    let sumOf = 0;
    const numArr = [];
    const numSplit = numStr.split("");
    for (i = 0; i < numSplit.length; i++){
        numArr.push(+numStr[i]);
    }
    for (i = 0; i<numArr.length; i++){
        sumOf += numArr[i];
    }
    console.log(sumOf);
}
sumDigits(1002);

const calculateSide = (num1,num2) => {
    let c = (Math.pow(num1, 2) + (Math.pow(num2, 2)))
    console.log(`The length of your third side is: ${Math.sqrt(c)}`);
}
calculateSide(8,6);

const sumArray = (array) => {
    let sumOf = 0;
    for (let i = 0; i < array.length; i++){
        sumOf += array[i];
    }
    return sumOf;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

const checkPrime = (num) => {
    
    let sqrtNum = Math.sqrt(num);
    let isPrime = true;
       for (let i = 2; i <= sqrtNum; i++){
        if (num % i === 0) {
            isPrime = false;
            break;
        } 
    } 
    return isPrime;
}
console.log(checkPrime(4));

const printPrime = (limit) => {
    for (let i = 1; i <= limit; i++){
        if (checkPrime(i)){
            console.log(`${i} is a Prime Number!!`);
        } else {
            console.log(`${i} is not a Prime number.`);
        }
    }
}
printPrime(97);