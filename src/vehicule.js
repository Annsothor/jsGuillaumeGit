export default class Vehicule {
    constructor(nomVehicule, nbrRoue, vitesse){
        this.nom = nomVehicule;
        this.roue = nbrRoue;
        this.vitesse = vitesse;
    }
    detect() {
        if(this.roue == 2){
            return "Moto"
        }
        else if(this.roue == 4){
            return "Voiture"
        }
        else{
            return "Indiquez le bon nombre de roue."
        }
    }
    boost() {
        return this.vitesse += 50;
    }
    rapide(a,b){
        if(a.vitesse > b.vitesse){
            return `${a.nom} est plus rapide`
        }
        else if(b.vitesse > a.vitesse) {
            return `${b.nom} est plus rapide`
        }
        else {
            return `${a.nom} et ${b.nom} spnt aussi rapide l'un que l'autregit az`
        }
    }
}

