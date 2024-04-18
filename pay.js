document.getElementById("paymentForm").addEventListener("submit", function(event){
  event.preventDefault();
  setTimeout(() => {
      alert("Payment processed!, Continue more shopping....");
      window.location.href = 'shop.html';
  }, 2000);
});
