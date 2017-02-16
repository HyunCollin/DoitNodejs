/**
 * https://www.npmjs.com/package/nconf
 * 외장모듈 nconf 설치 후 환경변수 확인하기
 */

var nconf = require('nconf');
nconf.env();

console.log("JAVA_HOME 환경 변수 : " + nconf.get('JAVA_HOME'));