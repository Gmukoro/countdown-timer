let js = "Amazing";
if (js === "Amazing") alert("Javascript is FUN!");

let firstName = "Praise";
let lastName = "Adams";

let text = `Welcome ${firstName} ${lastName}!`;
document.getElementById("light").innerHTML = text;
function login() {
   const username = document
      .getElementById("login-user")
      .value.toLowerCase()
      .trim();

   const password = document.getElementById("login-password").value;

   if (username == "") {
      alert("No username entered");
   } else if (password == "") {
      alert("No password entered");
   } else {
      sendLoginDetails(username, password);
   }
}

function sendLoginDetails(username, password) {
   const xmlhttp = new XMLHttpRequest();
   const url = "login.php?username=" + username + "&password=" + password;
   xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         if (this.responseText.trim() != "") {
            let response = this.responseText;
            alert(response);
         }
      }
   };
   xmlhttp.open("GET", url, true);
   xmlhttp.send();
}
