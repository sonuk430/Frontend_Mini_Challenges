//! Selecting the elements
document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");

  // Summary
  const yearsInput = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  // Function to calculate the loan

  function calculateLoan() {
    const principal = parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12;
    const payment = parseFloat(yearsInput.value) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(payment)) {
      alert("Please enter valid numbers");
      return;
    }
    // calculate monthly payment

    const x = Math.pow(1 + interest, payment);
    const monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
      // calculate total payment and interest
      const total = monthly * payment;
      const totalInterest = total - principal;

      // display the result

      animationValue(monthlyPayment, 0, monthly, 1000);
      animationValue(totalPayment, 0, total, 1000);
      animationValue(totalInterestPayment, 0, totalInterest, 1000);
    }
  }

  //animation

  function animationValue(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // bind the event to calc btn
  calculateBtn.addEventListener("click", calculateLoan);
});
