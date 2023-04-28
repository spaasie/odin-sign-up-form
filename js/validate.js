function validatePass() {
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm_password");
  let confirmNotify = document.getElementById("confirm_pass_notify");

  if (password.value.length > 0 && confirm.value.length > 0) {
    if (password.value == confirm.value) {
      confirmNotify.textContent = "";
      confirmNotify.setAttribute("isvalid", "true");
      confirm.parentElement.setAttribute("isvalid", "true");
      password.parentElement.setAttribute("isvalid", "true");
    }
    else {
      confirmNotify.textContent = "password not the same";
      confirmNotify.setAttribute("isvalid", "false");
      confirm.parentElement.setAttribute("isvalid", "false");
      password.parentElement.setAttribute("isvalid", "false");
    }

  }
}

function validateTel() {
  let tel = document.getElementById("tel");
  let telNotify = document.getElementById("tel-notify")

  if (tel.checkValidity() && tel.value.length > 1) {
    tel.parentElement.setAttribute("isvalid", "true");
    telNotify.setAttribute("isvalid", "true");
    telNotify.textContent = "";
  } else {
    tel.parentElement.setAttribute("isvalid", "false");
    telNotify.setAttribute("isvalid", "false");

    telNotify.textContent = tel.value;
    // check if long enough
    if (tel.value.length < 10 && /^\d+$/.test(tel.value)) {
      telNotify.textContent = "too short";
    } else if (/[[:alpha:]]/.test(tel.value)) {
      telNorify.textContent = "no letters";
    }
  }

  if (tel.value.length == 0) {
    tel.parentElement.removeAttribute("isvalid");
    telNotify.removeAttribute("isvalid");
    telNotify.textContent = "";
  }

}