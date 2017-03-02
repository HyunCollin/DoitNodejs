var fs = require('fs');

// file 동기식 io
console.time("fileLoadSync");
var data = fs.readFileSync('.././README.md', 'utf8');
//console.log(data);
console.log("동기식");
console.timeEnd("fileLoadSync");

console.log("--------------");

// file 비동기식 io
console.time("fileLoad");
fs.readFile('.././README.md', 'utf8', function(err, data) {
//	console.log(data);
	console.log("비동기식");
});
console.timeEnd("fileLoad");


var path = __dirname + "/upload";
console.log(path);

fs.exists(path, function(exists) {
	if( !exists){
		fs.mkdir(path, function(){
			console.log(path + "  new folder created");
		});
	}
});

