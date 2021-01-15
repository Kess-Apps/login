function logout(){
	document.cookie = "login=false";
	window.open("../index.html","_self");
}
function deleteAccount(){
	document.cookie = "username=#";
	document.cookie = "password=#";
	document.cookie = "login=false";
	window.open("../index.html","_self");
}
