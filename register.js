// Adding event listeners to input fields to update the progress bar dynamically
document.getElementById("usernameInput").addEventListener("input", function() {
    updateProgressBar(); // Update progress bar based on input fields
  });
  
  document.getElementById("passwordInput").addEventListener("input", function() {
    updateProgressBar(); // Update progress bar based on input fields
  });
  
  // Function to update the progress bar based on the current state of the input fields
  function updateProgressBar() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    const progressBar = document.getElementById("progressBar");
  
    if (username && password) {
      progressBar.style.width = "100%"; // Both fields are filled
    } else if (username || password) {
      progressBar.style.width = "50%"; // One of the fields is filled
    } else {
      progressBar.style.width = "0%"; // Both fields are empty
    }
  }
  
  // Function to validate and store the registration details
  function validateLogin() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
  
    // Store user information in localStorage (not secure for real-life applications)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    // Display registration success message
    alert("Registration successful!");
  
    // Redirect to the login page
    window.location.href = 'login.html'; // Ensure the URL is correct for your login page
  
    return false; // Prevent form from submitting to keep the logic client-side
  }
  