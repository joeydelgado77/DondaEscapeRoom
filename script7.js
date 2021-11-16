function colorChanger(color) {
  switch(color) {
		case "red":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,0,0,0.8), rgba(255,0,0,0.8)), url(https://joeydelgado77.github.io/DondaEscapeRoom/Password.png)"; 
			break;
      case "cyan":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(0,255,255,0.8), rgba(0,255,255,0.8)), url(https://joeydelgado77.github.io/DondaEscapeRoom/Password.png)"; 
			break;
      case "yellow":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0.8), rgba(255,255,0,0.8)), url(https://joeydelgado77.github.io/DondaEscapeRoom/Password.png)"; 
			break;
      case "transparent":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,0)), url(https://joeydelgado77.github.io/DondaEscapeRoom/Password.png)"; 
			break;
	}
}

function oranges() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "APPLES") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }