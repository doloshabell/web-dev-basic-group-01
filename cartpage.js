async function getBarang(){
    const url = 'https://6201e508b8735d00174cb61f.mockapi.io/provinsi/barangdetail'


try{
    const response=await fetch(url);

    const result = await response.json();

    const barangDetail = document.querySelector(".product");

    for (let i = 0; i < 1; i++) {
        barangDetail.innerHTML += `
        <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img src=${(result[i].img)}
                class="img-fluid rounded-3">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">${(result[i].name)}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              
              <input id="form1" min="0" name="quantity" value="1" type="number"
                class="form-control form-control-sm" />
      
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0">${(result[i].harga)}</h5>
              <p class="muted">harga per buah</p>
            </div>
          </div>
        </div>
      </div>
        `;
} 
} catch (err) {
    console.log(err);
}
}


getBarang();


