
function promedio(){

    let c1 = Number(document.getElementById("calificacion1").value);
    let c2 = Number(document.getElementById("calificacion2").value);
    let c3 = Number(document.getElementById("calificacion3").value);
    let c4 = Number(document.getElementById("calificacion4").value);
    let c5 = Number(document.getElementById("calificacion5").value);

    let sumaCalificaciones = c1 + c2 + c3 + c4 + c5;

    let promedio = sumaCalificaciones / 5;

    document.getElementById("promedio").innerHTML = "El promedio es: " + promedio;

}
