const correctFn = (str,wrongWord,correctWord)=>{
    let newStr = str.replace(wrongWord,correctWord);
    return newStr;
}
console.log(correctFn('Hi my name is Uday','Uday','Uday Sharma'));
