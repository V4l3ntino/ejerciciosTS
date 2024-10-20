"use strict";
// modal.ts
// Abrir y cerrar el modal
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
const acceptButton = document.getElementById('acceptButton');
const cancelButton = document.getElementById('cancelButton');
// Función para abrir el modal
openModalButton.onclick = function () {
    modal.style.display = "block";
};
// Función para cerrar el modal
closeModalButton.onclick = function () {
    modal.style.display = "none";
};
// Función para manejar el botón de "Aceptar"
acceptButton.onclick = function () {
    modal.style.display = "none";
    handleModalResponse(true);
};
// Función para manejar el botón de "Cancelar"
cancelButton.onclick = function () {
    modal.style.display = "none";
    handleModalResponse(false);
};
// Función para manejar la respuesta del modal
function handleModalResponse(response) {
    if (response) {
        alert('Has aceptado.');
    }
    else {
        alert('Has cancelado.');
    }
}
// Permitir mover el modal (drag and drop)
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
const modalContent = document.getElementById('modalContent');
modalContent.onmousedown = function (event) {
    isDragging = true;
    offsetX = event.clientX - modalContent.offsetLeft;
    offsetY = event.clientY - modalContent.offsetTop;
};
document.onmousemove = function (event) {
    if (isDragging) {
        modalContent.style.left = (event.clientX - offsetX) + 'px';
        modalContent.style.top = (event.clientY - offsetY) + 'px';
    }
};
document.onmouseup = function () {
    isDragging = false;
};
