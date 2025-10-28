let titulo = document.getElementById("titulo");

console.log(titulo);

let principal = document.querySelector(".principal");

console.log(principal);

let lista = document.querySelectorAll(".lista > li");

for(let elemento of lista){
  console.log(elemento);
}

titulo.innerText = "Estructurando el DOM";
titulo.innerHTML = "<em>Nuevo DOM</em>";

let foto = document.querySelector("img");

foto.src = "img/logo_javascript2.png";
foto.classList.add("foto_cambio");

principal.style.backgroundColor = "#ffcc00";

let extra = document.querySelector(".extra");

extra.remove();

let nuevoElemento = document.createElement("article");
nuevoElemento.innerText = "NUEVO article";

nuevoElemento.style.color = "white";
nuevoElemento.style.background = "purple";
nuevoElemento.style.padding = "20px";
document.body.appendChild(nuevoElemento);

let boton = document.querySelector("button");

// boton.addEventListener("click", e => {
//   alert("Has hecho click en el botón");
// })

const muestraMensaje = (mensaje) => {
  alert(mensaje);
}

boton.addEventListener("click", muestraMensaje.bind(null, "Has hecho click en el botón"));