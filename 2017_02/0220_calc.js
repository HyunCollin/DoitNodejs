var util = require("util");
var EventEmitter = require('events').EventEmitter;//events 모듈에 정의되어 있는 EventEmitter 참조

var Calc = function(){
	var self = this;
	this.on('stop', function(){
		console.log("Call : Calc stop event ");
	});
};

util.inherits(Calc, EventEmitter);// util모듈의 inherits메소드를 사용하여 Calc객체가 EventEmitter를 상속받는다. 

Calc.prototype.add = function(a,b){return a+b;};

module.exports = Calc;
module.exports.title = "calculator";

