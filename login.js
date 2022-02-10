// const login = (e) => {
//   const usernameInput = document.querySelector("#username").value;
//   const passwordInput = document.querySelector("#password").value;

//   const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
//   console.log(usernameInput, passwordInput);
//   console.log("data", dataLocalStorage);

//   if (
//     usernameInput === dataLocalStorage.username &&
//     passwordInput === dataLocalStorage.password
//   ) {
//     window.location.href("./index.html");
//   } else {
//     alert("username atau password anda salah");
//   }

//   e.preventDefault();
// };


// IMPORT LOGIN MODULE FROM helpers.js
import { 
    isLogin, validateEmail, validatePassword, checkRegisteredEmail, checkPassword, setLocalStorage, getLocalStorage 
  } from "./helpers.js";
  
  // IMPORT REGISTER MODULE FROM helpers.js
  
  
  // CHECK IF USER ALRREADY LOGIN
  if(isLogin()) {
    window.location.href = "./index.html"
  }
  
  // LOGIN EVENT LISTENER
  const formLogin = document.querySelector("#loginForm")
  
  if(formLogin) {
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
  
    let elements = {
      email: email,
      password: password,
    }
    
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault()
    
      const isValid = loginValidation(elements)
  
      if(isValid === true) {
        window.location.href = "./index.html"
      }
    })
  }
  
  // FUNCTION TO VALIDATE LOGIN
  const loginValidation = (elements) => {
    let email = elements.email.value.trim()
    let password = elements.password.value.trim()
    let emailPrevSib = elements.email.previousElementSibling
    let passwordPrevSib = elements.password.previousElementSibling
    
    if(validateEmail(email)) {
  
      // change input to valid
      elements.email.classList.remove("is-invalid")
      emailPrevSib.classList.remove("border-danger")
      elements.email.classList.add("is-valid")
      emailPrevSib.classList.add("border", "border-success")
      elements.password.classList.remove("is-invalid")
      passwordPrevSib.classList.remove("border-danger")
      elements.password.classList.add("is-valid")
      passwordPrevSib.classList.add("border-success")
      if(checkRegisteredEmail(email)) {
        if(checkPassword(email, password)) {
          setLocalStorage("login", email)
          return true
        } else {
          const alert = document.querySelector(".alert")
          alert.firstElementChild.classList.remove("d-none")
          alert.children[1].classList.add("d-none")
          alert.classList.remove("d-none")
          elements.password.classList.add("is-invalid")
          passwordPrevSib.classList.add("border", "border-danger")
        }
      } else {
        const alert = document.querySelector(".alert")
        alert.children[0].classList.add("d-none")
        alert.children[1].classList.remove("d-none")
        alert.classList.remove("d-none")
        elements.email.classList.add("is-invalid")
        emailPrevSib.classList.add("border", "border-danger")
        elements.password.classList.remove("is-invalid")
        passwordPrevSib.classList.remove("border-danger")
        elements.password.classList.remove("is-valid")
        passwordPrevSib.classList.remove("border-success")
      }
    }
    else {
      elements.email.classList.add("is-invalid")
      emailPrevSib.classList.add("border", "border-danger")
      elements.email.parentElement.nextElementSibling.classList.remove("d-none")
    }
  }
  
  // SHOW PASSWORD
  const showPasswordEl = document.getElementById("showPassword")
  showPasswordEl.addEventListener('click', () => {
    (showPasswordEl.checked)? password.type = "text" : password.type = "password"
  })
  
  // REGISTER EVENT LISTENER
  const registFormEl = document.querySelector("#registForm")
  
  if(registFormEl) {
    const username = document.querySelector("#username")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    
    const elements = {
      username: username,
      email: email,
      password: password,
    }
    
    registFormEl.addEventListener("submit", (e) => {
      e.preventDefault()
      
      let data = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
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
    window.location.href = './index.html'
  }
  
  const validateRegister = (elements, data) => {
    // GET ALL ELEMENTS NEEDED
    let usernamePrevSib = elements.username.previousElementSibling
    let emailPrevSib = elements.email.previousElementSibling
    let passwordPrevSib = elements.password.previousElementSibling
    const alert = document.querySelector(".alert")
    const validUsername = /.+/
  
    if(validUsername.test(data.username)) {
      elements.username.classList.remove("is-invalid")
      usernamePrevSib.classList.remove("border-danger")
      elements.username.parentElement.nextElementSibling.classList.add("d-none")
      elements.username.classList.add("is-valid")
      usernamePrevSib.classList.add("border-success")
  
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
      elements.username.classList.add("is-invalid")
      usernamePrevSib.classList.add("border", "border-danger")
      elements.username.parentElement.nextElementSibling.classList.remove("d-none")
      return false
    }
    
  }
  
  const dismissAlert = document.querySelector(".btn-close")
  dismissAlert.addEventListener("click", () => dismissAlert.parentElement.classList.add("d-none"))
  