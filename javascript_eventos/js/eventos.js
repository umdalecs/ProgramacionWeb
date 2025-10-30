
const elemento = document.querySelector('#elemento');
const botonAgregar = document.querySelector('#agregar');
const lista = document.querySelector('#listadinamica');

botonAgregar.addEventListener('click', () => {
  const texto = elemento.value;

  if (texto.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = texto;

  lista.appendChild(li);

  elemento.value = '';

  elemento.focus();
});

elemento.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    botonAgregar.click();
  }
});

// Arastrar y soltar

const arrastra = document.querySelector('#arrastra');
const zonaSoltar = document.querySelector('#zonasoltar');

arrastra.addEventListener('dragstart', event => {
  arrastra.style.border = "5px solid red";
});

zonaSoltar.addEventListener('dragover', event => {
  event.preventDefault();
});

zonaSoltar.addEventListener('drop', event => {
  event.preventDefault();
  arrastra.style.border = "none";
  zonaSoltar.appendChild(arrastra);
});
