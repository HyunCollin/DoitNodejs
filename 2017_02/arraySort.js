var api1 = [{"name":"a","type":"b"},{"name":"ab","type":"c"},{"name":"abc","type":"cd"},{"name":"zz","type":"f"}];
var api2 = [{"name":"zz","type":"f"},{"name":"a","type":"b"},{"name":"abc","type":"cd"},{"name":"ab","type":"c"}];

function typeAscSort(array){
	array.sort(function(a,b){
		var x = a.type.toLowerCase();
		var y = b.type.toLowerCase();
		if(x < y){
			return -1;
		}
		if(x > y){
			return 1;
		}
		return 0;
	});	
}

function typeDescSort(array){
	array.sort(function(a,b){
		var x = b.type.toLowerCase();
		var y = a.type.toLowerCase();
		if(x < y){
			return -1;
		}
		if(x > y){
			return 1;
		}
		return 0;
	});	
}

function printApi(array){
	for (var int = 0; int < array.length; int++) {
		console.log(array[int].name + " : " + array[int].type);
	}
}

typeAscSort(api1);
typeDescSort(api2);

console.log("printApi(api1)")
printApi(api1);
console.log("printApi(api2)")
printApi(api2);