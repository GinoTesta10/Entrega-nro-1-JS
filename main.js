function promedionotas() {
  let alumno = prompt("ingresa tu nombre");
  const notas = parseFloat(prompt("Cuantas notas deseas promediar?"));
  let suma = 0;
  {
    if (notas > 0) {
      for (let i = 1; i <= notas; i++) {
        let notatotal = parseInt(prompt("ingrese sus notas"));
        suma += notatotal;
      }
    }
  }
  const promedio = suma / notas;
  console.log(alumno + "tu promedio es " + promedio);
}

promedionotas();
