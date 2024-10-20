const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const numLetras = document.getElementById('numLetras') as HTMLSpanElement;
const numPalabras = document.getElementById('numPalabras') as HTMLSpanElement;

function actualizarContadores() {
  const texto = textarea.value.trim().replace(" ", "")
  
  const letras = texto.length;
  numLetras.textContent = letras.toString();

  const palabras = texto ? texto.split(/\s+/).length : 0;
  numPalabras.textContent = palabras.toString();
}

textarea.addEventListener('input', actualizarContadores);
