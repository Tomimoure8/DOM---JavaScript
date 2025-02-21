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
