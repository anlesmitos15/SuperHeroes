var vector1 = []
init()
function init() {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json").then((Response) => { return Response.json(); }).then((info) => {
        vector1 = info;
        for (let i = 0; i < 20; i++) {
            let x = Math.floor(Math.random() * info.length)
            template(info[x])
        }
    })
}
function template(diositodamefuerza) {
    let template = `
            <div class="col-3 d-flex justify-content-center my-3">            
                <div class="card card-encima p-4 bg-mono" style="width: 18rem;" onclick="llenadoSuper(${diositodamefuerza.id})">
                    <img src="${diositodamefuerza.images.sm}"  class=" card-img-top" alt="${diositodamefuerza.name}">
                    <div class="card-body text-black">
                        <h5 class="card-title">${diositodamefuerza.name}</h5>
                        <p class="card-text">Race: ${diositodamefuerza.appearance.race}</p>
                        <p class="card-text">Strength: ${diositodamefuerza.powerstats.strength}</p>
                        <p class="card-text">Intelligence: ${diositodamefuerza.powerstats.intelligence}</p>
                        <p class="card-text">Speed: ${diositodamefuerza.powerstats.speed}</p>
                        <p class="card-text">Power ${diositodamefuerza.powerstats.power}</p>
                        <p class="card-text text-end">${diositodamefuerza.id}</p>
                    </div>
                </div>               
            </div> 
          `
    document.getElementById("llenado").innerHTML += template
}

function llenadoSuper(y) {
    let stringatexto = JSON.stringify(vector1[y])
    localStorage.setItem('vector2', stringatexto)
    console.log(y, stringatexto)
    location.assign("index2.html")
}
// includes=string  contains=array
function filter(event) {
    if (event.target.value.length > 2) {
        let heroeabuscar = document.getElementById("abuscar").value.toLowerCase()
        let Arrayfiltrado = vector1.filter((heroe) => heroe.name.toLowerCase().includes(heroeabuscar))
        document.getElementById("llenado").innerHTML = ''
        Arrayfiltrado.forEach((info) => {
            template(info)
        })
    } else if (event.target.value.length == 0) { init() }

}
