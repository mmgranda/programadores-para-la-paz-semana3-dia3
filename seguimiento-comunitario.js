let semana = 1;
const semanasdeseguimiento = 4;
let propuestasatendidas = 0;

console.log("seguimeinto comunitario semanal")

while (semana <= semanasdeseguimiento){
    console.log("Semana de seguimiento numero:", semana)
    propuestasatendidas = propuestasatendidas + 2
    console.log("Propuestas atendidas hasta ahora:", propuestasatendidas)
    semana = semana + 1
}
console.log("Seguimieo comunitario finalizado.")
console.log("Total de propuestas atendidas:", propuestasatendidas)  
