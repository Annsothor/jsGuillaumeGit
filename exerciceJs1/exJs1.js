const productName = document.getElementById("nom_produit");
const numberOf = document.getElementById("quantite");
const price = document.getElementById("prix_ht");
const button = document.getElementById("calculer");
const tArea = document.getElementById("resultat")

function calcul(a,b) {
    let totalPrice = (a*b)
    return totalPrice
}

button.addEventListener("click", () => {
    // if(productName.value == "" || price=.value == "" || numberOf.value == "") {
    //     tArea.innerText = "Merci de renseigner tous les champs"
    // }
    calcul(quantite.value,price.value);
    tArea.innerText = calcul(quantite.value,price.value)
    console.log(calcul(quantite.value,price.value));
    
})