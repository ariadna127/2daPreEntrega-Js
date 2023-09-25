const calcularPromedio = () => {
    alumnos.forEach(alumno => {
        alumno.promedio = ((alumno.nota1 + alumno.nota2 + alumno.nota3) / 3).toFixed(2);
    })
}
calcularPromedio();

const ordenarAZ = () => {
    alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

const ordenarZA = () => {
    alumnos.sort((a, b) => b.nombre.localeCompare(a.nombre));
}

const ordenarLista = () =>{
    const listaOrdenada = confirm("¿Desea ordenar la lista en orden alfabetico de la A a la Z?");
        if(ordenarLista){
            ordenarAZ();
        }else{
            ordenarZA();
        }

}
const mostrarListaAlumnos = () =>{
    ordenarLista();
    let listaAlumnos = alumnos.map(alumno =>{
        return alumno.nombre + "\n" + "Nota final: " + alumno.promedio + "\n";
            })
    alert(listaAlumnos.join("\n"))
}

const mostrarAlumnosAprobados = () => {
    ordenarLista();
    const alumnosAprobados = alumnos.filter(alumno => alumno.promedio >= 5);
    alert(alumnosAprobados);
}

const mostrarAlumnosDesaprobados = () => {
    ordenarLista();
    const alumnosDesaprobados = alumnos.filter(alumno => alumno.promedio < 5);
    alert(alumnosDesaprobados);
}

const buscarAlumno = () => {
    const idAlumno = Number(prompt("Por favor ingrese ID del alumno.(Del 0 al 10)"));
    let alumno = alumnos.find(alumno => alumno.id === idAlumno);
    if(alumno){
        alert("Nombre: " + alumno.nombre + "\n" + "Nota 1: " + alumno.nota1 + "\n" + "Nota 2 : " + alumno.nota2 + "\n" + "Nota 3: " + alumno.nota3 +  "\n" + "Promedio: " + alumno.promedio);
    }else{
        alert("Alumno no encontrado.")
    }
    
}

const elegirAcción = () => {
    let elegirOtraOpcion = false;
    let accionElegida = "";
    do {
        accionElegida = (prompt("ACCEDER A LISTADO DE ALUMNOS" + "\n" + "Por favor seleccione una opción: (A, B, C)" + "\n\n" + "A: Lista de todos los alumnos." + "\n" + "B: Lista de alumnos aprobados. " + "\n" + "C: Lista alumnos desaprobados." + "\n" + "D: Buscar alumno.")).toLowerCase();
        if (accionElegida == "a") {
            mostrarListaAlumnos();
        }else if (accionElegida == "b") {
            mostrarAlumnosAprobados();
        }else if(accionElegida == "c"){
            mostrarAlumnosDesaprobados();
        }else if(accionElegida == "d"){
            buscarAlumno();
        }else{
            alert("La opción elegida no existe.")
        }
        elegirOtraOpcion = confirm("¿Desea elegir otra opción?");
    } while (elegirOtraOpcion);
}

elegirAcción();



