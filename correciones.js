// Versión mejorada del ejercicio 5:


//Área de mejora:

// Manejo de Errores: Es una buena práctica manejar posibles errores en el bloque catch, pero podrías ampliar el manejo de errores, por ejemplo, mostrando un mensaje más informativo en la consola o tomando alguna acción en el DOM si ocurre un error.

// Comentarios: Agregar algunos comentarios en el código ayudaría a explicar lo que hace cada sección, especialmente para alguien que pudiera leer tu código en el futuro o para ti mismo cuando repases este ejercicio más adelante.


// Aquí te dejo una versión mejorada del ejercicio con comentarios y un manejo de errores más informativo:

// Selecciona todos los elementos con la etiqueta "li"
let li = document.getElementsByTagName("li");

// Selecciona el sexto elemento de la colección
let liSexto = li[5];

console.log(liSexto);

// Función que devuelve una promesa que se resuelve o se rechaza después de 1 segundo
let funcionPromesa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("promesa resuelta");
            reject("promesa rechazada");
        }, 1000);
    });
}

// Manejo de la promesa y modificación del contenido del elemento
funcionPromesa2()
.then((ok) => {
    let i = 0;
    liSexto.innerText = "Hola chicos";
    let tiempo = setInterval(() => {
        console.log(liSexto, i);
        i++;
        if (i >= 4) { // Detiene la actualización después de 4 intervalos (6 segundos)
            console.log(ok);
            clearInterval(tiempo);
        }
    }, 1500);
})
.catch((no) => {
    console.error("Error en la promesa:", no);
});




// Versión mejorada del ejercicio 6:


//Área de mejora:

// Declaraciòn de Variables: Sería útil evitar la asignación de valores a las variables en la misma línea que la selección de elementos, ya que puede hacer que el código sea un poco más difícil de leer. Separar estas operaciones en líneas distintas mejora la claridad.

// Comentarios: Agregar algunos comentarios en el código ayudaría a explicar lo que hace cada sección, especialmente para alguien que pudiera leer tu código en el futuro o para ti mismo cuando repases este ejercicio más adelante.

// Manejo de Errores: Aunque tu promesa se resuelve correctamente, es una buena práctica manejar posibles errores que puedan ocurrir en el bloque catch. Podrías mostrar un mensaje más informativo en la consola o tomar alguna acción en el DOM si ocurre un error.


// Aquí te dejo una versión mejorada del ejercicio con comentarios y un manejo de errores más informativo:


// Selecciona un elemento específico utilizando querySelector
let elementoUnico;
elementoUnico = document.querySelector(".ola-query");

// Modifica el contenido del elemento seleccionado utilizando innerText
let elementoUnicoModificado;
elementoUnicoModificado = elementoUnico.innerText = "Titulo 5 modificado";

// Selecciona múltiples elementos utilizando querySelectorAll
let multiplesElementos;
multiplesElementos = document.querySelectorAll("li");

// Selecciona otro elemento específico utilizando querySelector
let olId;
olId = document.querySelector("#lii-oo");

// Función que devuelve una promesa resuelta inmediatamente
let funcionPromesa3 = () => {
    return new Promise((resolve) => {
        resolve("elementos seleccionados recorridos");
    });
}

// Manejo de la promesa y modificación del contenido del elemento
funcionPromesa3()
.then((abierto) => {
    let i = 0;
    let recorridoElementos = setInterval(() => {
        i++;
        console.log(i);
        if (i >= multiplesElementos.length) { // Detiene la actualización después de recorrer todos los elementos
            clearInterval(recorridoElementos);
            olId.innerHTML = `
                <li>Hola chicos</li>
                <li>Hola chicos</li>
                <li>Hola chicos</li>
                <li>Hola chicos</li>
            `;
            console.log(abierto);
        }
    }, 1000);
})
.catch((error) => {
    console.error("Error en la promesa:", error);
});
