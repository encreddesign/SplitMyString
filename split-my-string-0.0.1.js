//split-my-string-0.0.1.js 0.0.1
//(c) 2014 JoshuaGrierson, EncredDesign
//For all documentation and api goto
//http://github.com/encreddesign/SplitMyString

/*
* func = SMS(string, array)
*/
function SMS(a, b){

	c = console; //use console for debugging
	
	d = arguments; //get arguments
	
	!d?c.error('args to short'):true; //check args for validility
	
	//split function, must have array in args
	this.split=function(){
		!d[1]?c.error('args to short'):true;
		e = a.match(/\w+/g);
		for(i=0;i<e.length;i++){
			b.push(e[i]);
		}
	};
	
	//call privately for creating json element
	var f = function(k, v){
		return '{"'+k+'":"'+v+'"},';
	};
	
	//call privately for removing last comma
	var j = function(a){
		return a.replace(/(,)+(?=])/g, '');
	};
	
	//splitAsJson function, takes name within params
	this.splitAsJson=function(g){
		!arguments[0]?c.error('args to short'):true;
		e = a.match(/\w+/g);
		h = '{"'+g+'":[';
		for(i=0;i<e.length;i++){
			h += f('key',e[i]);
		}
		return JSON.parse(j(h+']}')); //finally return json string
	}
}