function promedionotas() {
  let alumno = prompt("ingresa tu nombre");
  const notas = parseFloat(prompt("Cuantas notas deseas promediar?"));
  let suma = 0;

  if (notas > 0) {
    for (let i = 1; i <= notas; i++) {
      let notatotal = parseInt(prompt("ingrese sus notas"));
      if (notatotal > 0 && notatotal <= 10) {
        suma += notatotal;
      } else {
        alert("Ingrese numeros entre 1-10");
        return;
      }
    }
  } else {
    alert("Ingrese un numero valido.");
    return;
  }

  const promedio = suma / notas;
  console.log(alumno + "tu promedio es de" + Math.round(promedio));
}

promedionotas();
