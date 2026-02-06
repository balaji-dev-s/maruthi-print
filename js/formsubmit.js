document.getElementById("enquiryForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;

  if (!f.checkValidity()) {
    f.classList.add("was-validated");
    return;
  }

  const data = {
    name: f.name.value,
    email: f.email.value,
    phone: "'" + f.phone.value,
    message: f.message.value
  };

  alert("Enquiry submitted successfully");

  f.reset();
  f.classList.remove("was-validated");

  fetch("https://script.google.com/macros/s/AKfycbzaDCOtoUu5GOBsW7SQUQZZsieZ172pdZFfi6kQEUohP5t7k7DKVmhAex5OiAANZOmaXw/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
  });
});
