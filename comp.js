var cookiesn = document.cookie.split(";");
for (var i = 0; i < cookiesn.length; i++){
	if(cookiesn[i].includes("login=true")){
		window.open("logedin.html","_self");
	}
}

function buttonClick(){
	if(document.getElementById('check').textContent === "Register"){
		if (document.getElementById('username').value.trim().length < 5){
			alert("The Username must be at least 5 characters long.");
		}else{
			document.cookie = "username=" + document.getElementById('username').value.trim();
			
			if (document.getElementById('password').value.trim().length < 8){
				alert("The Password musst be at least 8 characters long.");
			}else{
				document.cookie = "password=" + document.getElementById('password').value.trim();
				openLogin();
			}
		}
	}else if(document.getElementById('check').textContent === "Check"){
		var cookies = document.cookie.split(";");
		var richtig = 0;
		for (var i = 0; i < cookies.length; i++){
			if (cookies[i].includes("username=")){
				if (cookies[i].replace("username=","").trim() === document.getElementById('username').value.trim() && cookies[i].replace("username=","").trim() !== "#"){
					richtig ++;
				}
			}
			if (cookies[i].includes("password=")){
				if (cookies[i].replace("password=","").trim() === document.getElementById('password').value.trim() && cookies[i].replace("password=","").trim() !== "#"){
					richtig ++;
				}
			}
		}
		if (richtig == 2){
			document.cookie = "login=true";
			window.open("logedin.html","_self");
		}else{
			alert("Your Username or password is wronge!");
			openLogin();
		}
	}
}
function showPassword(){
	if(document.getElementById('password').type === "password"){
		document.getElementById('password').type = "text";
	}else{
		document.getElementById('password').type = "password"
	}
}

function openRegister(){
	if (document.getElementById('registerlink').innerHTML === "Login"){
		openLogin();
	}else{
		document.getElementById('registerlink').innerHTML = "Login";
		document.getElementById('check').textContent = "Register";
		document.getElementById('heading').textContent = "Register";
	}
}

function openLogin(){
	document.getElementById('registerlink').innerHTML = "Register";
	document.getElementById('check').textContent = "Check";
	document.getElementById('heading').textContent = "Login";

	document.getElementById('password').value = "";
}
