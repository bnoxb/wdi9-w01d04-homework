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