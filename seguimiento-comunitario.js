let semana = 1
const semanasDeSeguimiento = 4
let propuestasAtendidas = 0

console.log("Seguimiento comunitario semanal")

while (semana <= semanasDeSeguimiento) {
  console.log("semana de seguimiento número:", semana)
  propuestasAtendidas = propuestasAtendidas + 2
  console.log ("propuestas atendidas hasta ahora:", propuestasAtendidas)
  semana = semana + 1
}

console.log("Seguimiento comunitario finalizado.")
console.log("Total de propuestas atendidas:", propuestasAtendidas)