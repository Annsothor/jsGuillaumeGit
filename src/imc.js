export default class Imc {
    constructor(unNom, unPoids, uneTaille){
        this.nom = unNom;
        this.poids = unPoids;
        this.taille = uneTaille;
    }
    calcImc(){
        let calc = this.poids / this.taille **2;
        return calc.toFixed(2);
    }
    display(){
        console.log(`${this.nom} (${this.poids} kg, ${this.taille} M) a un imc de ${this.calcImc()}`)
    }
}

