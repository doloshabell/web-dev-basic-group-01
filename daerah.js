async function getKategoriDaerah(){
    const url = 'https://6201e508b8735d00174cb61f.mockapi.io/provinsi/kategoridaerah'


try{
    const response=await fetch(url);

    const result = await response.json();

    const kategoriDaerah = document.querySelector(".kategori-daerah");

    for (let i = 0; i < 4; i++) {
        kategoriDaerah.innerHTML += `
            <div class="card rounded bg-white" style="width: 20rem;">
                <img src=${(result[i].img)} width="500px" height="250px" class="card-img-top">
                <div class="card-body d-grid">
                    <a href="https://www.google.com" class="btn btn-secondary stretched-link">${result[i].name}</a>
                </div>
            </div>
        `;
} 
} catch (err) {
    console.log(err);
}
}
getKategoriDaerah();