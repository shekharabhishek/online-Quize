function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginForm.classList.toggle("active");
  signupForm.classList.toggle("active");
}

function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }

  alert("Login successful!");
  return false; // prevent actual submission for demo
}

function validateSignup() {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Signup successful!");
  return false; // prevent actual submission for demo
}
