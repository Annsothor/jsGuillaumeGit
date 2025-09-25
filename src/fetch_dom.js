import { apiKey } from './env';

const meteo = document.querySelector("#bloc_meteo");
const city = document.querySelector("#city");
const btnGo = document.querySelector("#charger");

const box = document.createElement("div");
box.style.cssText = `
    display: flex;
    flex-direction: column;
`

meteo.appendChild(box);

for(let i = 0 ; i<3 ; i++){
    const h2 = document.createElement("h2");
    h2.style.cssText = `
        width: auto;
        height: 10vh;
        background-color: grey;
        text-align: center;
        align-content: center;
        padding-top: 20px;
        padding-bottom 20px;
    `;
    h2.textContent = "vide";
    h2.setAttribute("id", `title${i+1}`);
    box.appendChild(h2);
}

async function getMeteoJson() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=${city.value}&appid=` + apiKey)
            return response.json();
        };

// getMeteoJson().then(json => {
//     console.log(json.name);
// })

const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');

btnGo.addEventListener('click', () => {
    const ville = city.value.trim();
    if (ville !== "") {
        getMeteoJson(ville)
            .then(data => {
                if(data.cod=="404"){
                title1.textContent = `Cette ville n'existe pas`
                title2.textContent = `Retente une fois`
                title3.textContent = `petit malin`
                }
                else {
                console.log("Données météo :", data);
                title1.textContent = `ville : ${data.name}`;
                title2.textContent = `Température : ${data.main.temp} °`;
                title3.textContent = `Temps : ${data.weather[0].description}`;
                const photo = document.createElement('img');
                Object.assign(photo.style, {
                    width : "90px", 
                    height : "90px",
                    alignSelf : "start",
                })
                photo.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                box.appendChild(photo);
                }
            })
    } else {
        alert("Veuillez entrer le nom d'une ville.");
    }
});




