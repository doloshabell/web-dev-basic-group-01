async function getBarangDetail() {
    const URL = "https://6201e508b8735d00174cb61f.mockapi.io/barangdetail/";
  
    try {
      const response = await fetch(URL);
      const result = await response.json();
  
      const barangDetailContainer = document.querySelector(".barang-detail-container");
  
      for (let i = 0; i < 1; i++) {
        barangDetailContainer.innerHTML += `
        <div class="col-md-6">
        <div class="pro-img-details">
          <img
            src=${result[i].img} width=200 height=400
          />
        </div>
        <div class="pro-img-list">
            <img
              src=${result[i].img2} width=115 height=100
            />
            <img
              src=${result[i].img3} width=115 height=100
            />
            <img
              src=${result[i].img4} width=115 height=100
            />
            <img
              src=${result[i].img5} width=115 height=100
            />
        </div>
      </div>

      <div class="col-md-6">
        <h4 class="pro-d-title">
          <h3>${result[i].name}</h3>
        </h4>
        <p>
        ${result[i].detail}
        </p>
        <div class="product_meta">
          <span class="posted_in">
            <strong>Kategori:</strong>
            <a rel="tag" href="#">${result[i].kategori}</a></span
          >
        </div>
        <div class="m-bot15">
          <span class="pro-price">${result[i].harga}</span>
        </div>
        <div class="form-group">
        <br>
        <p>
          <button class="btn btn-round btn-danger" data-bs-toggle="modal" data-bs-target="#addToCart" onclick="addToCart('Getas', 26000, 1)" ">
            Add to Cart
          </button>
        </p>
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
getBarangDetail()

let cartList = [];

const addToCart = (name, price, quantity) => {
  cartList.push({
    name,
    price,
    quantity,
  });
  console.log("cart", cartList);

  localStorage.setItem("cart", JSON.stringify(cartList));
};
