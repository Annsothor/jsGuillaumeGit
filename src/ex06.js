import CompteBancaire from './ex06class.js';

const Alex = new CompteBancaire("Alex", 0);
const Clovis = new CompteBancaire("Clovis", 0);
const Marco = new CompteBancaire("Marco", 0);

const Clients = [
    Alex,
    Clovis,
    Marco
]

for(const client of Clients){
    client.ajout(1000)
}

try{
Alex.retrait(100)
}
catch(error){
    console.log(error)
}

try{
Marco.virement(Clovis, 300)
}
catch(error){
    console.log(error.message)
}

try{
Alex.retrait(1200)
}
catch(error){
    console.log(error.message)
}

for(const client of Clients){
    client.displayCompte()
}

