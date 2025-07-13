function promedionotas() {
  let alumno = prompt("ingresa tu nombre");
  const notas = parseFloat(prompt("Cuantas notas deseas promediar?"));
  let cantidadtotal = 0;
  let notastotales = 0;

  if (notas > 0 || isNaN(notas)) {
    notastotales = notastotales + notas;
  } else {
    alert("ingresa numeros para poder continuar");
    return;
  }

  for (let i = 1; i <= notas; i++) {
    const evaluaciones = parseFloat(prompt("Ingrese las notas"));
    if (evaluaciones > 0) {
      cantidadtotal = cantidadtotal + evaluaciones;
    } else {
      alert("Por favor, ingrese numeros validos");
      return;
    }
  }
  alert(alumno + " su promedio es de:" + dividir(cantidadtotal, notastotales));
}
promedionotas();

function sumadenotas(a, b) {
  a + b;
}

function dividir(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (isNaN(a) || isNaN(b)) {
    return "Error: Valores no numéricos";
  }
  if (b === 0) {
    return "Error: División por cero";
  }

  return a / b;
}
