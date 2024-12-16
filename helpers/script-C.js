
const ejercicioC = () => {
const cantidadDeGatos = 10
const cantidadDePasos = 4
const huellas = "🐾".repeat(cantidadDePasos)

for (var i = 1; i <= cantidadDeGatos; i++) {
 i % 2 === 0 ? console.log(`Gato #${i}: 🐈😸${huellas}`) : console.log(`Gato #${i}: 🐈${huellas}`)
 }
}

export default ejercicioC