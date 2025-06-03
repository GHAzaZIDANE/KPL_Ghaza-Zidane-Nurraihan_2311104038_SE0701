const UserManager = require('./userManager');

window.register = () => {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  const result = UserManager.register(username, password);
  document.getElementById('result').innerText = result;
}

window.login = () => {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const result = UserManager.login(username, password);
  document.getElementById('result').innerText = result;
}
