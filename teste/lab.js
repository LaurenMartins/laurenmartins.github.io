const control = document.getElementById("type");

const form = document.getElementById("filters");

const img = document.getElementById("elgato");
let value = 0

const getIntensity = () => {
    return control.value
}

const getFilter = () => {
    return form.value
}


control.addEventListener("change", () => {
    img.style.filter=getFilter()+"("+getIntensity()+"%)"
})

form.addEventListener("click", () => {
img.style.filter=getFilter()+"("+getIntensity()+"%)"
})