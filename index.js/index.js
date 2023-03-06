/*const fs =require('fs');
fs.writeFileSync('manofailas.txt', 'Tekstas');
let tekstas = fs.readFileSync('manofailas.txt', {encoding: 'utf-8'});
console.log(tekstas);
*/
const fs =require('fs');
const arr = JSON.stringify([3, 4, 5]);
fs.writeFileSync('pazymiai.json', arr);
let tekstas = fs.readFileSync('manofailas.txt', {encoding: 'utf-8'});
console.log(tekstas);


