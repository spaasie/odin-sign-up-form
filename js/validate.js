function validateFirstName() {
  let firstName = document.getElementById("first_name");
  let fnameNotify = document.getElementById("fname_notify");

  if (firstName.value.length > 0) {
    firstName.parentElement.setAttribute("isvalid", "true");
    fnameNotify.setAttribute("isvalid", "true");
    fnameNotify.textContent = "";
  } else {
    firstName.parentElement.removeAttribute("isvalid");
    fnameNotify.setAttribute("isvalid", "false");
    fnameNotify.textContent = "required";
  }

}

function validateLastName() {
  let lastName = document.getElementById("last_name");
  let lnameNotify = document.getElementById("lname_notify");

  if (lastName.value.length > 0) {
    lastName.parentElement.setAttribute("isvalid", "true");
    lnameNotify.setAttribute("isvalid", "true");
    lnameNotify.textContent = "";
  } else {
    lastName.parentElement.removeAttribute("isvalid");
    lnameNotify.setAttribute("isvalid", "false");
    lnameNotify.textContent = "required";
  }
}

function validateEmail() {
  let email = document.getElementById("email");
  let emailNotify = document.getElementById("email-notify");

  if (email.value.length > 0) {
    if (email.validity.valid) {
      email.parentElement.setAttribute("isvalid", "true");
      emailNotify.setAttribute("isvalid", "true");
      emailNotify.textContent = "";
    } else {
      email.parentElement.setAttribute("isvalid", "false");
      emailNotify.setAttribute("isvalid", "false");
      emailNotify.textContent = "invalid";
    }
  } else {
    email.parentElement.removeAttribute("isvalid");
    emailNotify.setAttribute("isvalid", "false");
    emailNotify.textContent = "required";
  }
}

function validateTel() {
  let tel = document.getElementById("tel");
  let telNotify = document.getElementById("tel-notify");

  if (tel.checkValidity() && tel.value.length > 1) {
    tel.parentElement.setAttribute("isvalid", "true");
    telNotify.setAttribute("isvalid", "true");
    telNotify.textContent = "";
  } else {
    tel.parentElement.setAttribute("isvalid", "false");
    telNotify.setAttribute("isvalid", "false");

    // check if long enough and only digits
    if (tel.value.length < 10 && /^\d+$/.test(tel.value)) {
      telNotify.textContent = "too short";
    } else if (/[:alpha:]/.test(tel.value)) {
      telNotify.textContent = "only numbers";
    } else if (/\s/.test(tel.value)) {
      telNotify.textContent = "no spaces";
    }
  }

  // remove styling if no input
  if (tel.value.length == 0) {
    tel.parentElement.removeAttribute("isvalid");
    telNotify.removeAttribute("isvalid");
    telNotify.textContent = "";
  }

}

function validatePass() {
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm_password");
  let passNotify = document.getElementById("pass_notify");
  let confirmNotify = document.getElementById("confirm_pass_notify");


  // check if both fields are filled in then check
  if (password.value.length > 0 && confirm.value.length > 0) {
    if (password.value == confirm.value) {
      passNotify.setAttribute("isvalid", "true");
      passNotify.textContent = "";
      confirmNotify.setAttribute("isvalid", "true");
      confirmNotify.textContent = "";
      confirm.parentElement.setAttribute("isvalid", "true");
      password.parentElement.setAttribute("isvalid", "true");
    }
    else {
      password.parentElement.setAttribute("isvalid", "false");
      passNotify.setAttribute("isvalid", "false");
      passNotify.textContent = "";
      confirm.parentElement.setAttribute("isvalid", "false");
      confirmNotify.setAttribute("isvalid", "false");
      confirmNotify.textContent = "passwords don't match";
    }
  } else if (password.value.length == 0 && confirm.value.length == 0) {
    password.parentElement.removeAttribute("isvalid");
    confirm.parentElement.removeAttribute("isvalid");
    passNotify.setAttribute("isvalid", "false");
    confirmNotify.setAttribute("isvalid", "false");
    passNotify.textContent = "required";
    confirmNotify.textContent = "required";
  }
}