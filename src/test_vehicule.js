import Vehicule from './vehicule.js';

const voiture = new Vehicule("MercedesCLK", 4, 250);
const moto = new Vehicule("HondaCBR", 2, 280);

console.log(`Le véhicule est une ${voiture.detect()}.`);
console.log(`Le véhicule est une ${moto.detect()}.`);

console.log(`Je booste la vitesse à ${voiture.boost()}.`)
console.log(`Je booste la vitesse à ${moto.boost()}.`)
console.log(voiture.rapide(voiture , moto));