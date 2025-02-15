// // HOJA 4 REPASO
// // createElement y appendChild
// // 1) Creamos una variable con el valor de acceso a la ubicación donde crearemos el elemento.
// let listaOrdenada = document.querySelector ("ol");
// // 2) Creamos el elemento en la ubicación llamada anteriormente.
// let nuevoElemento = document.createElement ("li");
// // 3) Le asignamos al nuevo elemento un nombre de clase.
// nuevoElemento.className = "itemListaOrdenada";
// // 4) Creamos el nodo donde se ubicará el nuevo elemento.
// listaOrdenada.appendChild (nuevoElemento);
// // 5) Agregamos dos nuevas clases.
// nuevoElemento.classList.add ("itemNodoDos");
// nuevoElemento.classList.add ("kkk");
// // 6) Ahora vamos a remover la última y anteúltima clase.
// nuevoElemento.classList.remove ("itemNodoDos");
// nuevoElemento.classList.remove ("kkk");
// // 6) Ahora vamos a invertir la última modificación de clase que hicimos.
// nuevoElemento.classList.toggle ("kkk");
// // 7) Creamos los atributos dentro del elemento creado.
// nuevoElemento.setAttribute ("title" ,"item de lista");


// // createElement y appendChild
// // 1) Creamos una variable asignando la ubicación del nuevo elemento a crear como valor.
// let nuevoElementoDos = document.querySelector (".titulares");
// // 2) Creamos un nuevo elemento para la ubicación llamada.
// let nombreJugador = document.createElement ("li");
// // 3) Creamos una nueva estructura de lista dentro del nuevo elemento.
// nombreJugador.innerHTML = `            
//             <li>Exequiel Palacios</li>
//             <li>Leandro Paredes</li>
//             <li>Giovani Lo Celso</li>
//             <li>Angel Di María</li>
//             <li>Lautaro Martinez</li>
// `
// // 4) Ahora creamos un nuevo nodo en la ubicaciòn donde se creo el nuevo elemento.
// nuevoElementoDos.appendChild (nombreJugador);
// // 5) Creamos los atributos dentro del elemento creado.
// nombreJugador.setAttribute ("alt" ,"MUCHAAAACHOOOS");

// // REPASO getElement
// console.log (document.getElementById ("tituloUno"));
// console.log (document.getElementsByClassName ("parrafo"));
// // creamos una variable para almacenarle el llamado a parrafo.
// let classParrafo = document.getElementsByClassName ("parrafo");
// let classParrafoDos = classParrafo[1];

// // getElementByTagName
// let listaOrdenadaDos = document.getElementsByTagName ("ol");
// console.log (listaOrdenadaDos[1]);

// // querySelector
// let listaOrdenadaDosQuery = document.querySelector ("ol");
// console.log (listaOrdenadaDosQuery);
// let classParrafoQuery = document.querySelector ("#id_section");
// console.log (classParrafoQuery);

// // QUERY SELECTOR ALL
// let parrafoQuery = document.querySelectorAll ("p");
// console.log (parrafoQuery);

// // INNER TEXT E INNER HTML
// classParrafoDos.innerText = "pete";
// let claseParrafoTres = classParrafo [2];
// claseParrafoTres.innerText = "maricon";

// // INNER HTML
// let listaOrdenadaId = document.querySelector ("#lii-oo");
// listaOrdenadaId.innerHTML = `
// <ol>
//     <li>hola mai</li>
//     <li>hola ma</li>
//     <li>hola nahue</li>
//     <li>hola pa</li>
// </ol>`;

// // REPASO CREATE ELEMENT Y APPEND CHILD
// // 1) Crea una variasble con la ubicación donde pondremos el nuevo elemento.
// let nuevoElementoXd = document.getElementById ("listaDesordenada");
// // 2) creamos el nuevo elemento en una variable.
// let nuevaLi = document.createElement ("li");
// // 3) le agregamos un texto al elemento.
// nuevaLi.innerText = "hola puto";
// // 4) creamos el nodo en la ubicación.
// nuevoElementoXd.appendChild (nuevaLi);

// // REPASO CREATE ELEMENT Y APPEND CHILD 2
// let otraLi = document.createElement ("li");
// otraLi.innerText = "pelotudo";
// nuevoElementoXd.appendChild (otraLi);

// // REPASO CLASS NAME
// otraLi.className = "otra-li";
// console.log (otraLi);
// nuevoElementoXd.className = "nuevoElemento-xd"
// console.log (nuevoElementoXd);

// // REPASO CLASS LIST
// otraLi.classList.add ("otraOtra-li");
// nuevoElementoXd.classList.add ("nuevoNoTanNuevo-elemento");
// nuevoElementoXd.classList.remove ("nuevoNoTanNuevo-elemento");
// otraLi.classList.toggle ("otraOtra-li");
// otraLi.classList.toggle ("otraOtra-li");
// // REPASO SETT ATRIBUTE
// otraLi.setAttribute ("title" ,"Full Stack Web Developer");
// otraLi.setAttribute ("alt" ,"Tomás Moure");


// // REPASO GET ELEMENT
// // aCCedemos a un elemento con getElementbyId, almacenado en una variable.
// let tituloTres = document.getElementById ("titulo-3");
// let tituloOca = document.getElementsByClassName ("titulo-oca");
// let tituloOla = document.getElementsByTagName ("h5");
// // let classParrafo = document.getElementsByClassName ("parrafo");
// let classParrafoAro = classParrafo[0];
// classParrafoAro.innerText = "pedazo de puto culero";


// // QUERY SELECTOR
// let olaQuery = document.querySelector (".ola-query");
// let contenedorDeTitulos = document.querySelector (".titulos");
// contenedorDeTitulos.appendChild (olaQuery);
// olaQuery.innerText = "Te tengo putita.";

// // INNER HTML
// let divHtml = document.querySelector (".html");
// contenedorDeTitulos.appendChild (divHtml);
// divHtml.innerHTML = `
// <ol class="putos">
//     <li>a</li>
//     <li>b</li>
//     <li>c</li>
//     <li>d</li>
//     <li>d</li>
// </ol>
// `

// // Creamos un nuevo elemento.
// let nuevoElementoTea = document.createElement ("ul");
// contenedorDeTitulos.appendChild (nuevoElementoTea);
// nuevoElementoTea.innerHTML = `
//     <li>aa</li>
//     <li>bb</li>
//     <li>cc</li>
//     <li>dd</li>
//     <li>ee</li>
// `;
// // CLASS NAME
// nuevoElementoTea.className = "bizcochito";
// console.log (nuevoElementoTea);
// nuevoElementoTea.className = "bizcochuavezito";
// console.log (nuevoElementoTea);
// nuevoElementoTea.classList.add ("bizcochuavezito");
// console.log (nuevoElementoTea);
// nuevoElementoTea.classList.add ("bizcochito");
// console.log (nuevoElementoTea);
// nuevoElementoTea.classList.remove ("bizcochuavezito");
// nuevoElementoTea.classList.toggle ("bizcochuavezito");
// nuevoElementoTea.classList.remove ("bizcochuavezito");
// nuevoElementoTea.classList.add ("bizcochoUno");
// nuevoElementoTea.classList.remove ("bizcochoUno");
// nuevoElementoTea.classList.remove ("bizcochuavezito");
// nuevoElementoTea.setAttribute ("title", "Full Stack Web Developer");


// Tema: Selección de elementos con getElementById

// Consigna: Selecciona un elemento por su ID y muestra su contenido en la consola.
let elementoH1 = document.getElementById ("tituloUno");
console.log (elementoH1);



// Tema: Selecciona elementos con getElementsByTagName.

// Consigna: Selecciona todos los elementos de un tipo de etiqueta específico y muestra su contenido en la consola.

let parrafo = document.getElementsByTagName ("p");

console.log (parrafo);



// Tema: Selección de elementos con getElementsByClassName

// Consigna: Selecciona todos los elementos de una clase específica y realiza operaciones sobre ellos.

let clase = document.getElementsByClassName ("parrafo");

console.log (clase);



// Tema: Selección específica de elementos en una clase

// Consigna: Selecciona un elemento específico dentro de una clase y modifica su contenido.

let claseAro = clase[0];

console.log (claseAro);

claseAro.innerText = 'hola';



// Tema: Selección de elementos con querySelector

// Consigna: Utiliza querySelector para seleccionar elementos y muestra su contenido en la consola.

let ol = document.querySelector ("ol");

console.log (ol);

let claseNoeQuery = document.querySelector (".titulo-oca");

console.log (ol);

let elementoH1Query = document.querySelector ("#tituloUno");

console.log (elementoH1Query);

// ******************************************************************************************************************************************

// Manual de JavaScript: Integración de Promesas y DOM


// Ejercicio 1: Selección de elementos con getElementById
// Consigna: Selecciona un elemento por su ID y muestra su contenido en la consola. Luego, utiliza una promesa para simular una operación asincrónica y actualiza el contenido del elemento después de un tiempo.
// 1) Crea una variable y asigna a ella el elemento que deseas seleccionar utilizando getElementById.
// 2) Imprime el contenido del elemento seleccionado en la consola.
// 3) Crea una función que devuelva una promesa que se resuelva después de 2 segundos.
// Utiliza .then para actualizar el contenido del elemento después de que la promesa se resuelva.

let titulo2 = document.getElementById ("mugrientos");

console.log (titulo2);

let funcionTitulo2 = function title () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (success === true ) {
                resolve ("enviado");
            }
            else {
                reject ("cancelado");
            }
        }, 2000);
    })
}

funcionTitulo2(false)
.then ((abierto) => {
    console.log ("recibi el paquete, fue "+abierto);
})
.catch ((queja) => {
    console.error ("se "+queja+" el pedido");
})