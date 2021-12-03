function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "YE") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }
// bring you to next page or tells you you're incorrect //