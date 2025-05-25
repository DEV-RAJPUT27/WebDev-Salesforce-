function toggleForm() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");
  var formTitle = document.getElementById("formTitle");
  var link = document.querySelector("a");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent = "Login";
    link.textContent = "Switch to Register";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formTitle.textContent = "Register";
    link.textContent = "Switch to Login";
  }
}

function validateLogin() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please fill in all login fields.");
    return false;
  }

  alert("Login successful!");
  return false; // prevent real submission
}

function validateRegister() {
  var name = document.getElementById("regName").value;
  var email = document.getElementById("regEmail").value;
  var password = document.getElementById("regPassword").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all registration fields.");
    return false;
  }

  alert("Registration successful!");
  return false; // prevent real submission
}

function togglePassword(id, icon) {
  var input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🔒";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
}
