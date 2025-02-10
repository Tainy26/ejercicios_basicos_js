// Ejercicio 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las
// palabras que lo conforma.
// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
// Puedes usar este array para probar tu función:

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

  function repeatCounter(list) {
    const contador = []; // Necesito crear un objeto vacio donde guardar 
    
    for (const palabra of list) { //Se usa for of para recorrer el Array
      if (contador[palabra]){ 
        contador[palabra]++; //Si la palabra ya existe se incrementa 1.
      } else {
        contador[palabra] = 1; //Si no existe, palabra = 1.
      }
    }
    console.log(contador)
  }
  repeatCounter(words);