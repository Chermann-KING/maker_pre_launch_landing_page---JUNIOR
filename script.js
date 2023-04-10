document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");
  const colorError = "hsl(343, 100%, 58%)";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      emailError.textContent = "Oops! That doesn’t look like an email address";
      emailInput.style.border = `1.6px solid ${colorError}`;
    } else {
      emailError.textContent = "";
      emailInput.style.border = "";
      form.reset();
    }
  });
});
