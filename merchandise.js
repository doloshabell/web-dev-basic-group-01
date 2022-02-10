<<<<<<< HEAD
// cara async await
async function getDataDigimon() {
    const URL = "https://digimon-api.vercel.app/api/digimon";
  
    try {
      // nerima paket
      const response = await fetch(URL);
  
      // unboxing paket
      const result = await response.json();
  
      // ambil element HTML
      const digimonContainer = document.querySelector(".digimon-container");
  
      // tampilkan data ke HTML
      for (let i = 0; i < 4; i++) {
        digimonContainer.innerHTML += `
        <div class="card">
        <image src=${result[i].img} width=200 />
        <div class="card-body">
        <h5 class="card-title">${result[i].name}</h5>
        <p>Price</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        `;
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  function handleClick(data) {
    console.log(data);
  }
  
  // cara promise
  // function getDataDigimonPromise() {
  //   const URL = "https://digimon-api.vercel.app/api/digimon";
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result[0]);
  //     })
  //     .catch((err) => console.log(err));
  // }
  
  // getDataDigimonPromise();
  getDataDigimon();
=======
>>>>>>> 6bd077d93cd629dd375f264a4b986658504fea42
