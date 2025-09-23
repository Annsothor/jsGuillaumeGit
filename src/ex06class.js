export default class CompteBancaire{
    constructor(unNom, unSolde){
        this.nom = unNom;
        this.solde = unSolde;
    }
    retrait(n){
        if(n<=this.solde){
        this.solde -= n;
        console.log(`Retrait de ${n} pour ${this.nom}. Le nouveau solde est de ${this.solde}`)
    }
    else {
        throw new Error(`----->${this.nom}, retrait de: ${n} refusé avec un solde: ${this.solde}`)
    }

}
    ajout(n){
        this.solde += n;
        console.log(`Ajout de ${n} pour ${this.nom}. Le nouveau solde est de ${this.solde}`)
    }
    virement(a,n){
        if (n>this.solde){
            throw new Error(`----->${this.nom}, virement de ${n} refusé avec un solde: ${this.solde}`)        }
        else{
            console.log(`Virement de: ${n} de: ${this.nom} vers ${a.nom}`);
            this.retrait(n);
            a.ajout(n);       
    }
}
    displayCompte(){
        console.log(`titulaire: ${this.nom}, solde: ${this.solde}`)
    }
}
