document.getElementById("usernameInput").addEventListener("input", function() {
  updateProgressBar(); 
});

document.getElementById("passwordInput").addEventListener("input", function() {
  updateProgressBar(); 
});

function updateProgressBar() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;
  const progressBar = document.getElementById("progressBar");

  if (username && password) {
      progressBar.style.width = "100%"; 
  } else if (username || password) {
      progressBar.style.width = "50%"; 
  } else {
      progressBar.style.width = "0%"; 
  }
}

function validateLogin() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;

  
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);


  alert("Registration successful!");


  window.location.href = 'login.html'; 

  return false; } 
