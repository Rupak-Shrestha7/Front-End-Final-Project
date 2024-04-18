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
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "100%";
  
    setTimeout(() => {
      if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "/dashboard.html"; // Change to your dashboard page
      } else {
        alert("Incorrect username or password.");
        progressBar.style.width = "0%";
      }
    }, 2000);
  
    return false; // Prevent form from submitting normally
  }
  