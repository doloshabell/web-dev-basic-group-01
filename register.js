function regist(e){
  e.preventDefault();

  let elUsername = document.querySelector("#username").value;
  let elEmail = document.querySelector("#email").value;
  let elPassword = document.querySelector("#password").value;

  let dataUser =  {
    username: elUsername,
    email: elEmail,
    password: elPassword,
  }

  let dataJSON = JSON.stringify(dataUser);
  localStorage.setItem("user", dataJSON);
  window.location.href = "./index.html";
}

const showPasswordEl = document.querySelector("#showPassword")
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? password.type = "text" : password.type = "password"
  })