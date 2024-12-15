import './style.css'



console.warn('Ejercicio A')

let cantidadDeGatos = 10

for (let i = 1; i <= cantidadDeGatos; i++) {
  if (i % 3 === 0) {
   console.log("Gato #" + i + ": 😹");
} else if (i % 3 === 1) {
   console.log("Gato #" + i + ": 😺");
} else {
   console.log("Gato #" + i + ": 😸");
}}

//---------------------------------------------------------
console.warn('Ejercicio B')

const cantidadDeGatosB = 5
const cantidadDePasosB = 3
const huella = "🐾".repeat(cantidadDePasosB)

for (var i = 1; i <=
 cantidadDeGatosB; i++) {
 console.log(`Gato #${i}: 🐈${huella}`);
}

//---------------------------------------------------------

console.warn('Ejercicio C')
const cantidadDeGatosC = 10
const cantidadDePasosC = 4
const huellas = "🐾".repeat(cantidadDePasosC)

for (var i = 1; i <= cantidadDeGatosC; i++) {
 i % 2 === 0 ? console.log(`Gato #${i}: 🐈😸${huellas}`) : console.log(`Gato #${i}: 🐈${huellas}`)
 }

