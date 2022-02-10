const elLogin = document.querySelector("#login");
elLogin.onclick = login;

function login() {
  // e.preventDefault();
  const emailInput = document.querySelector("#email").value;
  const passwordInput = document.querySelector("#password").value;

  const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log(emailInput, passwordInput);
  console.log("data", dataLocalStorage);

  if (
    emailInput === dataLocalStorage.email &&
    passwordInput === dataLocalStorage.password
  ) {
    location="./index.html";
    console.log("login success");
  } else {
    alert("email atau password anda salah");
  }
  return false;
};

const showPasswordEl = document.querySelector("#showPassword")
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? password.type = "text" : password.type = "password"
  })
