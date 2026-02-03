// script.js
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page reload
  alert("Thank you! We will contact you soon.");
  form.submit(); // actually submit to Google Sheets
});