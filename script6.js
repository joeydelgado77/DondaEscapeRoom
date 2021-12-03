function colorChanger(color) {
  switch(color) {
		case "red":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,0,0,0.8), rgba(255,0,0,0.8)), url(https://joeydelgado77.github.io/DondaEscapeRoom/HIDDEN.png)"; 
			break;
      case "cyan":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(0,255,255,0.8), rgba(0,255,255,0.8)), url(https://joeydelgado77.github.io/DondaEscapeRoom/HIDDEN.png)"; 
			break;
      case "yellow":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0.8), rgba(255,255,0,0.8)), url(https://joeydelgado77.github.io/DondaEscapeRoom/HIDDEN.png)"; 
			break;
      case "transparent":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,0)), url(https://joeydelgado77.github.io/DondaEscapeRoom/HIDDEN.png)"; 
			break;
	}
}

function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "August29th") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }