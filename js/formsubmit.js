document.getElementById("enquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;

  // Capture values BEFORE reset
  const data = {
    name: f.name.value,
    email: f.email.value,
    phone: "'" + f.phone.value,
    message: f.message.value
  };

  // Instant UX
  alert("Enquiry submitted successfully");
  f.reset();
  f.classList.remove("was-validated");


  // Background request (no waiting)
  fetch("https://script.google.com/macros/s/AKfycbzaDCOtoUu5GOBsW7SQUQZZsieZ172pdZFfi6kQEUohP5t7k7DKVmhAex5OiAANZOmaXw/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
  });
});
