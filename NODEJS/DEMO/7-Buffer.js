
//string -> Buffer
var buffer = new Buffer("phung","utf-8");
console.log(buffer);//Buffer =  70 68 75 6e 67>     //phung

////Buffer -> string
console.log(buffer.toString());  //phung

//////Buffer -> JSON
console.log(buffer.toJSON());// type: 'Buffer', data: [ 112, 104, 117, 110, 103 ] 
