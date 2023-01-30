// BIENVENIDA
let nombre = prompt("Ingrese el nombre del alumno: ")
alert("Bienvenido " + nombre) + "vamos a calcular tu promedio."
alert("Puedes insertar -Exit- para salir")

function calculo(alumno) {
    while (alumno != "Exit") {
        let notaA = parseInt(prompt("Ingrese a continuacion la primera nota"))
        let notaB = parseInt(prompt("Ahora la segunda nota"))
        let promedio = (notaA + notaB) / 2
        if (promedio < 4) {
            alert(nombre + " has desaprobado con " + promedio)
            break;
        }
        else if (promedio = 4) {
            alert(nombre + " aprobaste raspando!");
            break;
        }
        else (promedio > 4);
        alert(nombre + " aprobaste, FELICITACIONES!")
        break;
    }
}



alumno = prompt("Ingrese el nombre del alumno: ")

calculo(alumno);

