/**
 * require() 함수에 전달되는 0216_calc.js 파일이 없을경우
 * 0216_calc 폴더에 있는 index.js를 불러온다.
 */
var calc = require('./0216_calc');
console.log("calc.add(5,10) : "+calc.add(5,10));

var calc2 = require('./0216_calc2');
console.log("calc2.add(15,15) : " + calc2.add(15,15));

var calc3 = require('./0216_calc3');
console.log("calc3.add(20,20) : " + calc3.add(20,20));

console.dir(calc);
console.dir(calc2);
console.dir(calc3);