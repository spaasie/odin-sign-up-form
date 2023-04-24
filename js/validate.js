function validate() {
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm_password");
  let confirmNotify = document.getElementById("confirm_pass_notify");

  if (password.value == confirm.value) {
    confirmNotify.textContent = "";
    confirmNotify.setAttribute("isvalid", "true");
    // confirmNotify.setCustomValidity("");
  }
  else {
    confirmNotify.textContent = "password not the same";
    confirmNotify.setAttribute("isvalid", "false");
    // confirmNotify.setCustomValidity("Password no match");
  }
}