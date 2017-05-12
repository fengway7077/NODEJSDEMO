
function KhoaHoc(tenkh,hocphi){
	this.TenKh = tenkh;
	this.HocPhi = hocphi;
}
KhoaHoc.prototype.mota = function(){
	console.log("Hello " + this.TenKh + " " + this.HocPhi);
}
var nodejs = new KhoaHoc("Lap trinh Nodejs", 900000);
nodejs.mota(); //Hello Lap trinh Nodejs 900000
