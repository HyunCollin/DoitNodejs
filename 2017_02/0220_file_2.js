var fs = require('fs');

// pipe() 두 개의 Stream을 붙여 주는 역할
var inName = "./output.txt";
var outName = "./output2.txt";

fs.exists(outName, function(exists){
	if(exists){
		fs.unlink(outName, function(err){
			if(err)throw err;
			console.log("기존 ["+outName + "] 삭제함");
		});
	}
	
	var inFile = fs.createReadStream(inName , {flags:'r'});
	var outFile = fs.createWriteStream(outName, {flags:'w'});
	
	inFile.pipe(outFile);
	console.log("파일 복사 ["+inName+"] -> ["+outName+"]");
});