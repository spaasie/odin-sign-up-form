function validate() {
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm_password");

  if (password.value == confirm.value) return;
  else alert("password not the same");
}