var result = 0;

console.time("sum");
for (var i = 1; i <= 100; i++) {
	result += i;
}
console.timeEnd("sum");
console.log("1~100 sum : %d", result);

var name = "collin";
console.log("Hello Node.js world %s", name);

console.log("실행파일 이름 %s", __filename);
console.log("실행파일 경로 %s", __dirname);

// 객체안의 속성값 확인
var person = {name:"collin", gender:"man"};
console.dir(person);
