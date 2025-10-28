document.write("<h1>Hola Mundo desde JavaScript en el body</h1>");
console.log("Hola Mundo desde la consola");
// console.log("Lanza un error");
let x = 1; // débilmente tipado
console.log(x);
console.log(typeof x);
/*
Tipos de datos:
- Undefined: variable no definida
- Booleanos (Boolean): true, false
- Números (Number): 10, 3.14, -5
- Cadenas de texto (Strings): "Hola", 'Mundo'
- BigInt: 1234567890123456789012345678901234567890n
- Símbolos (Symbol): Symbol("descripción")
- Null: ausencia de valor
- Objetos (Objects): {nombre: "Juan", edad: 30}
- Funciones (Functions): function saludar() { return "Hola"; }
- Arreglos (Arrays): [1, 2, 3], ["a", "b", "c"]
*/
let esPW = false
if (esPW) {
    console.log("Estamos en clase");
} else {
    console.log("No estamos en clase");
}
let numero = -345435.345;
console.log("Número:", numero);
// Cadenas string
let cadena = "Hola 'Mundo'";
let cadena2 = ' desde una cadena de "texto: "';
let cadena3 = `Una cadena
con mas de una linea y puedo
agregar interpolacion de 
variables, ejemplo: numero = ${numero}`;
let cadena4 = cadena + cadena2 + numero;
console.log(cadena3);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
let usuario={nombre:"Yuli", [id1]: 48};
console.log(`${usuario.nombre} ${usuario[id1]}`);