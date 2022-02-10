
// VALIDATION FUNCTION

// Email validation
export const validateEmail = (email) => {
    const validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/g; //check for @, domain
  
    return validEmail.test(email) ? true : false
  
  }
  
  // Password validation
  export const validatePassword = (password) => {
    const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    // Haha@12
    return validPassword.test(password)? true : false
  }
  
  // Check for registered email
  export const checkRegisteredEmail = (email) => {
    let users = getLocalStorage("users")
    
    if(users) {
      users = JSON.parse(users)
      let isEmailexist = users.find(user => user.email === email)
      
      if(isEmailexist) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  // Check password
  export const checkPassword = (email, password) => {
    let users = getLocalStorage("users")
    users = JSON.parse(users)
    
    let user = users.find(user => user.email === email)
    return (user.password === password) ? true : false
  }
  
  
  export const isLogin = () => {
    const isExist = getLocalStorage("login")
    
    return isExist
  }
  
  // LOGOUT
  export const logout = () => {
    localStorage.removeItem('login')
    location.href = window.location.origin
  }
  
  
  
  // WEB STORAGE SET AND GET
  export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
  }
  
  export const getLocalStorage = (key) => {
    return localStorage.getItem(key)
  }
  
  
  // GET USER DATA
  export const getUser = () => {
    let email = getLocalStorage("login")
    let users = JSON.parse(getLocalStorage("users"))
    let user = users.find(user => user.email === email)
    return user
  }
  
  // // GET KERANJANG DATA
  // export const getKeranjang = () => {
  //   let keranjang = getLocalStorage("keranjang")
  //   keranjang = JSON.parse(keranjang)
  //   return keranjang
  // }
  
  // export const setKeranjang = (products) => {
  //   let allKeranjang = getKeranjang()
  //   let keranjangValue;
  //   if(allKeranjang) {
  //     let productIndex = allKeranjang.findIndex(element => element.productId === products.productId)
  //     if(productIndex >= 0) {
  //       allKeranjang[productIndex].qty += products.qty
  //     } else {
  //       allKeranjang.push(products)
  //     }
  //     keranjangValue = allKeranjang
  //   } else {
  //     keranjangValue = [products]
  //   }
  
  //   setLocalStorage("keranjang", JSON.stringify(keranjangValue))
  // }
  
  // export const updateKeranjang = products => {
  //   let allKeranjang = getKeranjang()
    
  //   let productIndex = allKeranjang.findIndex(element => element.productId === products.productId)
  //   allKeranjang[productIndex].qty = products.qty
    
  //   setLocalStorage("keranjang", JSON.stringify(allKeranjang))
  // }
  
  // // TEMPORARY DATA AFTER KERANJANG CHOOSE
  // export const getTempData = () => {
  //   let tempData = getLocalStorage("tempData")
  //   tempData = JSON.parse(tempData)
  //   return tempData
  // }
  
  // export const setTempData = (data) => {
  //   setLocalStorage("tempData", JSON.stringify(data))
  // }
  
  // export const delKeranjangData = (id) => {
  //   let allKeranjang = getKeranjang()
  //   let productIndex = allKeranjang.findIndex(element => element.productId == id)
    
  //   allKeranjang.splice(productIndex, 1)
  
    
  //   setLocalStorage("keranjang", JSON.stringify(allKeranjang))
  // }
  
  // // FETCH API
  // export const getProducts = async () => {
  //   // EDIT HERE
  //   const url = "https://6172fc04110a740017222f15.mockapi.io/products"
  //   let response = await fetch(url)
  //   let data = await response.json()
  //   return data
  // };
  
  // export const getProductById = async (productId) => {
  //   const url = `https://6172fc04110a740017222f15.mockapi.io/products/${productId}`
  //   let response = await fetch(url)
  //   let data = await response.json()
  //   return data
  // }
  
  // export const getTestimoniByPordId = async(productId) => {
  //   const url = 'https://6172fc04110a740017222f15.mockapi.io/userReview'
  //   let response = await fetch(url)
  //   let data = await response.json()
  //   let testimoni = data.filter(value => value.prodID == productId)
  //   return testimoni
  // }