var url = require('url');//url모듈

// 주소 문자열을 URL 객체로
var curUrl = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로
var curStr = url.format(curUrl);

console.log('주소 문자열 : ' + curStr);
console.log("curUrl : dir")
console.dir(curUrl);

//요청 파라미터 구분하기
var queryString = require('querystring');//querystring모듈
var param = queryString.parse(curUrl.query);

console.log("요청 파마리터 중 query :%s", param.query);
console.log("원본 요청 파마리터 : " + queryString.stringify(param));

//이벤트 EventEmitter / on(event, listener), once(event, listener), removeListener(event, listener)
//process는 노드에서 언제든지 사용할 수 있는 객체이고, 내부적으로 eventEmitter을 상속받도록 만들어짐
process.on('exit', function(msg){
	console.log("process.exit event 발생");
	console.log(msg);
});
console.time("test");
setTimeout(function(){
	console.log("2초 후에 process exit 호출 함");
	process.exit("종료합니다.");
}, 2000);
console.timeEnd("test");

console.log("----Calc----")
var Calc = require("./0220_calc.js");
var calc = new Calc();

console.log("10+10 = "+calc.add(10, 10));

console.log(Calc.title + "에 stop event 호출");
calc.emit('stop');
console.log("----Calc----")




