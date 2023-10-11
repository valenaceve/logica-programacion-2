let celsius;

while (true) {
  let userInput = prompt("Ingresa la temperatura en grados Celsius:");

  if (userInput === null) {
    alert("Operación cancelada por el usuario.");
    break; // Salir del bucle si el usuario cancela
  }

  celsius = parseFloat(userInput);

  if (!isNaN(celsius)) {
    break; // Salir del bucle si la entrada es un número válido
  } else {
    alert("Por favor, ingresa un valor numérico.");
  }
}

if (!isNaN(celsius)) {
  // Realizar las conversiones
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  // Mostrar los resultados en la consola
  console.log("Grados Fahrenheit: " + fahrenheit.toFixed(1));
  console.log("Grados Kelvin: " + kelvin.toFixed(2));

  // Mostrar los resultados en el DOM
  document.body.innerHTML += `
    <h2>Resultados:</h2>
    <p>Grados Fahrenheit: ${fahrenheit.toFixed(1)}</p>
    <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
  `;
}
