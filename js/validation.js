function ValidateLogin() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.value != "" && password.value != "") {
    if (username.value == "vikash" && password.value == "12345") {
      window.location = "../../index.html";
    } else {
      alert("Invalid credentials. Please try again.");
      username.value = "";
      password.value = "";
      return false;
    }
  } else {
    if (username.value == "") {
      alert("Username is required field.");
      username.focus();
      return false;
    }
    if (password.value == "") {
      alert("Password is required field.");
      password.focus();
      return false;
    }
  }
}
let username1 = "vikash";
