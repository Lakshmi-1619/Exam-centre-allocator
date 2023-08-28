const allocatedEmails = [];

function allocateCenter() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name == "" || email == "") {
    alert('Enter missing fields.');
    return;
  }

  if (allocatedEmails.includes(email)) {
    alert('Email already allocated to a center.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * indianCountries.length);
  const center = indianCountries[randomIndex].name;

  allocatedEmails.push(email);

  document.getElementById('outputName').textContent = name;
  document.getElementById('outputEmail').textContent = email;
  document.getElementById('outputCenter').textContent = center;
  document.getElementById('output').style.display = 'block';
}