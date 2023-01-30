// BIENVENIDA
let nombre = prompt("Ingrese el nombre del alumno: ")
alert("Bienvenido " + nombre + "vamos a calcular tu promedio.");

for (let i = 0; i < 50; i++) {

    // CALCULO
    function calculo(alumno) {
        while (alumno != "Exit") {
            let notaA = parseInt(prompt("Ingrese a continuacion la primera nota"))
            let notaB = parseInt(prompt("Ahora la segunda nota"))
            let promedio = (notaA + notaB) / 2
            if (promedio < 4) {
                alert(nombre + " has desaprobado con un promedio de " + promedio)
                break;
            }
            else if (promedio == 4) {
                alert(nombre + " aprobaste raspando con un promedio de " + promedio);
                break;
            }
            else (promedio > 4);
            alert(nombre + " aprobaste, FELICITACIONES! Tu promedio fue de " + promedio)
            break;
        }
    }

    alumno = prompt("Ingrese el nombre del alumno: ")

    calculo(alumno);


}
