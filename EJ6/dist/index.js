"use strict";
const textarea = document.getElementById('textarea');
const numLetras = document.getElementById('numLetras');
const numPalabras = document.getElementById('numPalabras');
function actualizarContadores() {
    const texto = textarea.value.trim().replace(" ", "");
    // Contar letras
    const letras = texto.length;
    numLetras.textContent = letras.toString();
    // Contar palabras
    const palabras = texto ? texto.split(/\s+/).length : 0;
    numPalabras.textContent = palabras.toString();
}
// Escuchar el evento input para actualizar los contadores
textarea.addEventListener('input', actualizarContadores);
