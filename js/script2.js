
vector2 = JSON.parse(localStorage.getItem("vector2"))
console.log(vector2)
let title = vector2.name
console.log(title)
let imagen = `
<img src="${vector2.images.lg}"  class="card" alt="${vector2.name}">
`
let estadisticas1=`
    <div class="col">
        <h5> Power Stats</h5>
        <p class="card-text text-start ms-2"><b>Intelligence:</b> ${vector2.powerstats.intelligence}</p>
        <p class="card-text text-start ms-2"><b>Strength:</b> ${vector2.powerstats.strength}</p>
        <p class="card-text text-start ms-2"><b>Speed:</b> ${vector2.powerstats.speed}</p>
        <p class="card-text text-start ms-2"><b>Durability:</b> ${vector2.powerstats.durability}</p>
        <p class="card-text text-start ms-2"><b>Power:</b> ${vector2.powerstats.power}</p>
        <p class="card-text text-start ms-2"><b>combat:</b> ${vector2.powerstats.combat}</p>
    </div>
    <div class="col">
        <h5>Appearance</h5>
        <p class="card-text text-start ms-2"><b>Gender:</b> ${vector2.appearance.gender}</p>
        <p class="card-text text-start ms-2"><b>Race:</b> ${vector2.appearance.race}</p>
        <p class="card-text text-start ms-2"><b>Height:</b> ${vector2.appearance.height[1]}</p>
        <p class="card-text text-start ms-2"><b>Weight:</b> ${vector2.appearance.weight[0]}</p>
        <p class="card-text text-start ms-2"><b>Eye Color:</b> ${vector2.appearance.eyeColor}</p>
        <p class="card-text text-start ms-2"><b>Hair Color:</b> ${vector2.appearance.hairColor}</p>
    </div>
`
let estadisticas2=`
    <div class="col">
        <h5> Biography</h5>
        <p class="card-text text-start ms-2"><b>Full Name:</b>   ${vector2.biography.fullName}</p>
        <p class="card-text text-start ms-2"><b>Alter Egos:</b>   ${vector2.biography.alterEgos}</p>
        <p class="card-text text-start ms-2"><b>Aliases:</b>   ${vector2.biography.aliases[0]}</p>
        <p class="card-text text-start ms-2"><b>Place Of Birth:</b>   ${vector2.biography.placeOfBirth}</p>
        <p class="card-text text-start ms-2"><b>Publisher:</b>   ${vector2.biography.publisher}</p>
        <p class="card-text text-start ms-2"><b>Alignment:</b>   ${vector2.biography.alignment}</p>

    </div>
    <div class="col">
        <h5>Work</h5>
        <p class="card-text text-start ms-2"><b>Occupation:</b>${vector2.work.occupation}</p>
        <p class="card-text text-start ms-2"><b>Base:</b> ${vector2.work.base}</p>
        <h5>Connections</h5>
        <p class="card-text text-start ms-2"><b>Group Affiliation:</b> ${vector2.work.intelligence}</p>                            
    </div>
`
document.getElementById("dibujo").innerHTML = imagen
document.getElementById("titulo2").innerText  = title
document.getElementById("estadisticas1").innerHTML = estadisticas1
document.getElementById("estadisticas2").innerHTML = estadisticas2


