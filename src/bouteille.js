class Habitation {
   //Constructeur
constructor(nom_maison, largeur_maison, longueur_maison, nombre_etage) {
    this.nom = nom_maison;
    this.largeur = largeur_maison;
    this.longueur = longueur_maison;
    this.nbrEtage = nombre_etage;
}
   //Méthode
superficie() {
    if(this.nbrEtage > 0){
      return this.largeur * this.longueur * this.nbrEtage;
    } else if(this.nbrEtage == 0) {
        return this.largeur * this.longueur;
    } else{
        console.log(`Une maison avec ${this.nbrEtage} étages.... pour de vrai??`)
    }
}
}

const chateau = new Habitation("Chateau", 50, 30, 4);
const hobbitHome = new Habitation("Hobbit House", 2, 3, 0);
const himmeuble = new Habitation("Himmeuble", 20, 20, 12);

console.log("L'habitation: "+ chateau.nom + "à + une superficie de: " + chateau.superficie() + "m2");
console.log("L'habitation: "+ hobbitHome.nom + "à + une superficie de: " + hobbitHome.superficie() + "m2");
console.log("L'habitation: "+ himmeuble.nom + "à + une superficie de: " + himmeuble.superficie() + "m2");

