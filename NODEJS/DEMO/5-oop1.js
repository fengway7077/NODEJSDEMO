
var person ={
	ho:"Tran",
	ten:"Linh",
	chao : function(){
		console.log("Chao ban: " + " " + this.ten);
	}
}
person.chao();//Chao ban: Linh

console.log(person["ten"]);//nh