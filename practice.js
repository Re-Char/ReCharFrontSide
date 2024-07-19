console.log(a);//undefined but not error
var a = 114514;
console.log(a);

//console.log(b); error!!!
let b = 1919810;
console.log(b);

//int, double, float all is used as number

//"==" doesn't judge the type of data but "===" does judge
console.log(1 == 1);
console.log(1 === 1);
console.log("hello" == 'hello');
console.log("hello" === 'hello');
console.log('1' == 1);
console.log('1' === 1);
console.log(0 == false);
console.log(0 === false);

function fib(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;
    let a = 0, b = 1, result = 0;
    for (i = 2; i < n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(fib(6));

//can use more than one param
const fibnonacci = n => {
    if (n == 1) return 0;
    if (n == 2) return 1;
    let a = 0, b = 1, result = 0;
    for (i = 2; i < n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(fibnonacci(6));

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        console.log("The year is leap year.");
    else
        console.log("The year isn't leap year");
}
leapYear(400);