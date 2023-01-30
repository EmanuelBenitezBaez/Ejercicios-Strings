/*Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/
let nombre="Emanuel";
let apellido="Benitez Baez";
let estudiante=" Estudiante ";
let estudianteMayus="estudiante";
let estudianteMinus="estudiante";

console.log("Estudiante " + nombre+ " " + apellido );
console.log(estudianteMayus.toUpperCase());
console.log(estudianteMinus.toLowerCase());
var numeroLetras= console.log(estudiante.length);
var primerLetraNombre= console.log(nombre.charAt(0));
var ultimaLetraApellido= console.log(apellido.charAt(11));
var eliminaEspacios= console.log(estudiante.trim());
var estaContenido=console.log(estudiante.includes("Emanuel"));

