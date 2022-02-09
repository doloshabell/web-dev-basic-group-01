// const register = () => {

//     const usernameInput = document.querySelector("#username").value;
//     const emailInput = document.querySelector("#email").value;
//     const passwordInput = document.querySelector("#password").value;
  
//     let userData = {
//       username: usernameInput,
//       email: emailInput,
//       password: passwordInput,
//     };
  
//     localStorage.setItem("users", JSON.stringify(userData));
//     console.log(usernameInput, emailInput, passwordInput);
//   };

// SHOW PASSWORD
const showPasswordEl = document.getElementById("showPassword")
showPasswordEl.addEventListener('click', () => {
  (showPasswordEl.checked)? password.type = "text" : password.type = "password"
})

// REGISTER EVENT LISTENER
const registFormEl = document.getElementById("registForm")

if(registFormEl) {
  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const password = document.getElementById("password")
  const confirmPass = document.getElementById("konfirmasiPassword")
  
  const elements = {
    name: name,
    email: email,
    password: password,
    confirmPass: confirmPass,
  }
  
  registFormEl.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let data = {
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      confirmPass: confirmPass.value.trim(),
    }
    
    let isValid = validateRegister(elements, data)
    
    if(isValid) {
      register(data)
    }
  })
  
  
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? confirmPass.type = "text" : confirmPass.type = "password"
  })
  
}



const register = (data) => {
  let users = getLocalStorage("users")
  
  if(users) {
    users = JSON.parse(users)
    users.push(data)
  } else {
    users = [data]
  }
  
  users = JSON.stringify(users)
  
  setLocalStorage("users", users)
  setLocalStorage("login", data.email)
  window.location.href = '../index.html'
}

const passwordConfirmation = (password, confirmPassword) => password === confirmPassword

const validateRegister = (elements, data) => {
  // GET ALL ELEMENTS NEEDED
  let namePrevSib = elements.name.previousElementSibling
  let emailPrevSib = elements.email.previousElementSibling
  let passwordPrevSib = elements.password.previousElementSibling
  let confirmPassPrevSib = elements.confirmPass.previousElementSibling
  const alert = document.querySelector(".alert")
  const validName = /.+/

  if(validName.test(data.name)) {
    elements.name.classList.remove("is-invalid")
    namePrevSib.classList.remove("border-danger")
    elements.name.parentElement.nextElementSibling.classList.add("d-none")
    elements.name.classList.add("is-valid")
    namePrevSib.classList.add("border-success")

    if(validateEmail(data.email)) {
      elements.email.classList.remove("is-invalid")
      emailPrevSib.classList.remove("border-danger")
      elements.email.parentElement.nextElementSibling.classList.add("d-none")
      elements.email.classList.add("is-valid")
      emailPrevSib.classList.add("border-success")
      
      if(checkRegisteredEmail(data.email)) {
        alert.classList.remove("d-none")
        return false
      } else {
        alert.classList.add("d-none")
        if(validatePassword(data.password)) {
          elements.password.classList.remove("is-invalid")
          passwordPrevSib.classList.remove("border-danger")
          elements.password.parentElement.nextElementSibling.classList.remove("text-danger")
          elements.password.classList.add("is-valid")
          passwordPrevSib.classList.add("border-success")

          if(passwordConfirmation(data.password, data.confirmPass)) {
            return true
          } else {
            elements.confirmPass.classList.add("is-invalid")
            confirmPassPrevSib.classList.add("border", "border-danger")
            elements.confirmPass.parentElement.nextElementSibling.classList.remove("d-none")
            return false
          }
        } else {
          elements.password.classList.add("is-invalid")
          passwordPrevSib.classList.add("border", "border-danger")
          elements.password.parentElement.nextElementSibling.classList.add("text-danger")
          return false
        }
      }
      
    } else {
      elements.email.classList.add("is-invalid")
      emailPrevSib.classList.add("border", "border-danger")
      elements.email.parentElement.nextElementSibling.classList.remove("d-none")
      return false
    }
  } else {
    elements.name.classList.add("is-invalid")
    namePrevSib.classList.add("border", "border-danger")
    elements.name.parentElement.nextElementSibling.classList.remove("d-none")
    return false
  }
  
}

const dismissAlert = document.querySelector(".btn-close")
dismissAlert.addEventListener("click", () => dismissAlert.parentElement.classList.add("d-none"))
