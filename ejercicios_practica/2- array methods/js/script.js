"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/

// const data = JSON.parse(personasJSON);
// console.log(data)

// const mayores18 = data.filter(p => {
//     return p.edad >= 18
// })

// console.log(mayores18)


/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/

// const body = document.getElementById("body")

// mayores18.forEach(per => {
//     const personDiv = document.createElement("div");

//     const nombreH3 = document.createElement("h3");
//     nombreH3.textContent = `Nombre: ${per.nombre}`;

//     const edadSpan = document.createElement("span");
//     edadSpan.textContent = `Edad: ${per.edad}`;

//     personDiv.appendChild(nombreH3);
//     personDiv.appendChild(edadSpan);

//     body.appendChild(personDiv);

// });

/* 3 - BONUS TRACK

- Su misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/

const data = JSON.parse(personasJSON);
console.log(data)

document.getElementById("btnFilter").addEventListener("click", function() {
    const filterEdad = document.getElementById("edadFiltro").value;
    const section = document.getElementById("filtered");

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    const mayores = data.filter(p => {
        return p.edad >= filterEdad
    });

    
    mayores.forEach(per => {
        const personDiv = document.createElement("div");

        const nombreH3 = document.createElement("h3");
        nombreH3.textContent = `Nombre: ${per.nombre}`;

        const edadSpan = document.createElement("span");
        edadSpan.textContent = `Edad: ${per.edad}`;

        personDiv.appendChild(nombreH3);
        personDiv.appendChild(edadSpan);

        section.appendChild(personDiv);

    });

});


