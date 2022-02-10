const showPasswordEl = document.querySelector("#showPassword")
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? password.type = "text" : password.type = "password"
  })

const elRegist = document.querySelector("#register");
elRegist.onclick = register;

function register() {
  const userNameInput = document.querySelector("#username").value;
  const emailInput = document.querySelector("#email").value;
  const passInput = document.querySelector("#password").value;

  let userData = {
    username: userNameInput,
    email: emailInput,
    password: passInput,
  };

  localStorage.setItem("user", JSON.stringify(userData));
  console.log(userNameInput, emailInput, passInput);
  location="./profile-page.html";
};