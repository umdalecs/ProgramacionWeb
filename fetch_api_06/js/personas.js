
const url = 'https://randomuser.me/api/'


const boton = document.querySelector('button')
const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const direccion = document.querySelector('#direccion')
const telefono = document.querySelector('#telefono')

const obtenerPersona = () => {
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
      respuesta.results.forEach(persona => {
          nombre.textContent = persona.name.first + ' ' + persona.name.last
          foto.setAttribute('src', persona.picture.large)
          direccion.textContent = persona.location.city + ', ' + persona.location.country
          telefono.textContent = persona.phone
      });
    })
}

boton.addEventListener('click', obtenerPersona)