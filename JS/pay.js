document.getElementById("paymentForm").addEventListener("submit", function(event){
  event.preventDefault(); // Stop the form from submitting normally
  // Simulate payment processing delay
  setTimeout(() => {
      alert("Payment processed!,Continue more shopping...."); // Notify the user that payment was successful
      window.location.href = 'shop.html'; // Redirect to the thank you page
  }, 2000); // Delay for demonstration purposes
});
