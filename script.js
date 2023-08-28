let allocatedEmails = [];

function allocateCenter() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  // check for empty fields
  if (name == "" || email == "") {
    alert('Enter missing fields.');
    return;
  }

  // check for duplicate emails
  if (allocatedEmails.includes(email)) {
    alert('Email already allocated to a center.');
    return;
  }

  // generate random city
  let randomIndex = Math.floor(Math.random() * indianCountries.length);
  let center = indianCountries[randomIndex].name;

  allocatedEmails.push(email);

  document.getElementById('outputName').textContent = name;
  document.getElementById('outputEmail').textContent = email;
  document.getElementById('outputCenter').textContent = center;
  document.getElementById('output').style.display = 'block';
}