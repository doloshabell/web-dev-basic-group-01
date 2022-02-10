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
      for (let i = 0; i < 5; i++) {
        digimonContainer.innerHTML += `
        <div class="col">
        <div class="card">
        <image src=${result[i].img} width=200 />
        <div class="card-body">
        <h5 class="card-title">${result[i].name}</h5>
        <p>Price</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
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
async function getDaerah() {
  const URL = "https://6201e508b8735d00174cb61f.mockapi.io/provinsi/daerah";

  try {
    const response = await fetch(URL);
    const result = await response.json();

    const daerah = document.querySelector(".daerah");

    for (let i = 2; i <= 2; i++) {
      daerah.innerHTML += `
      <img src=${result[i].img} class="card-img">
      <div class="card-img-overlay d-flex justify-content-center align-items-end">
      <h1 class="card-title text-center">${result[i].name}</h1>
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


async function getKategoriDaerah() {
    const URL = "https://6201e508b8735d00174cb61f.mockapi.io/provinsi/kategoridaerah";
  
    try {
      const response = await fetch(URL);
      const result = await response.json();
  
      const kategoriDaerah = document.querySelector(".kategori-daerah");
  
      for (let i = 0; i < 5; i++) {
        kategoriDaerah.innerHTML += `
        <div class="col">
        <div class="card">
        <image src=${result[i].img} width=200 height=300 />
        <div class="card-body">
        <h5 class="card-title">${result[i].name}</h5>
        <br>
        <a href="#" class="btn btn-primary">Lihat</a>
        </div>
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
  
  getDaerah();
  getKategoriDaerah();
>>>>>>> ac4fbecc7cb89c6c5c7bb005f7baadd40646c5ec
