/**
 * Closure 예제코드
 * 함수안에서 새로운 함수를 만들어 반환하는 경우에는 예외적으로 변수접근을 허용하는 것
 */

function add(a,b,callback){
	var result = a + b;
	callback(result);
	
	var count = 0;
	var history = function(){
		count++;
		return "history 호출 횟수 "+ count + ' : '+ a + '+' + b + '=' + result;
	};
	return history;
}

var addHistory = add(10,10, function(result){
	console.log(" 콜백 함수 파라미터 : 10 + 10 = " + result);
});
console.log(addHistory());

var addHistory2 = add(20,20, function(result){
	console.log(" 콜백 함수 파라미터 : 20 + 20 = " + result);
});
console.log(addHistory2());

console.log("\n");

// add()함수의 history()를 호출해서 add의 count값을 증가시킨다.
// history()함수에서 사용하는 count변수 접근이 가능하다.
console.log(addHistory());
console.log(addHistory2());

