// AJAX & FETCH

// Ejercicio 4: Selección específica de elementos en una clase con petición HTTP.
// Consigna: Selecciona un elemento específico dentro de una clase y modifica su contenido utilizando una promesa. Además, realiza una petición HTTP simulada para obtener datos y actualiza el contenido del elemento seleccionado con la información recibida.
// 1) Crea una variable donde almacenarás los elementos de una clase específica utilizando getElementsByClassName.
// 2) Selecciona la posición del índice del elemento que deseas modificar y almacénalo en una nueva variable.
// 3) Crea una función que devuelva una promesa que se resuelva después de 1.5 segundos.
// 4) Realiza una petición HTTP utilizando fetch y simula la obtención de datos en formato JSON.
// 5) Utiliza .then para modificar el contenido del elemento seleccionado con la información recibida de la petición HTTP.
// màs detalles:
// Realiza la petición HTTP.
// Actualiza el contenido del elemento seleccionado con la información recibida.


// let claseEspecifica = document.getElementsByClassName ("parrafo");

// let elementoAmodificar = claseEspecifica [0];

// console.log (elementoAmodificar);

// let newFunction = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("pedido enviado");
//         }, 1500);
//     });
// }

// let realizarPeticion = () => {
//     return fetch ("")
//         .then (response => response.json ());
// }

// newFunction()
// .then ((mensaje) => {
//     console.log (mensaje);
//     return realizarPeticion;
// })
// .then ((data) => {
//     elementoAmodificar.innerText = "Título: ${data.title}\nCuerpo: ${data.body}"
//     console.log ("error:", data);
// })