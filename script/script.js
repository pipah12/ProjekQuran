const BASE_URL = "https://equran.id"
const params = new URL(document.location).searchParams;

const listSection = document.getElementById("list");
const loadingComp = document.getElementById("loaing");
const errorComp = document.getElementById("error");

asyinc function getData(){
    try {
    loadingComp.classList.remove("hidden")
    const response = await axios.get(BASE_URL+"/api/v2/surat")
    let dataSurat = response.data.data;

    dataSurat.forEach((item,idx)=>{
        listSection.innerHTML += `<div class="item-surah">
        <p class="number">${idx+1}</p>
        <div class="detail">
            <p>${item.nama} (${item.namaLatin})</p>
            <p>${item.arti}</p>
            <p>${item.tempatTurun} - ${item.jumlahAyat}</p>
        </div>
        </div>`
    })

    } catch(error) {
        console.error(error);
        errorComp.classList.remove("hidden")
    } finally {
        loadingComp.classList.add("hidden")
    }
}