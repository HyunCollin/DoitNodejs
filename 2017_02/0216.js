/**
 * process 객체
 * argv 프로세스를 실행할 때 전달되는 파라미터 정보
 * env 환경 변수 정보
 * exit() 프로세르를 끝내는 메소드
 */

console.log('argv : ' + process.argv);
console.log('argv length : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function (item, index){
	console.log(index + ": " + item);
});

console.log(process.env);
//process.env속성에는 사용자 정의 환경 변수만 들어있다. 시스템 환경변수에는 접근할 수 없다.
console.log("JAVA_HOME : " + process.env[JAVA_HOME]);