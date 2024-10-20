const openModalButton = document.getElementById('openModal') as HTMLButtonElement;
const modal = document.getElementById('modal') as HTMLDivElement;
const closeModalButton = document.getElementById('closeModal') as HTMLSpanElement;
const acceptButton = document.getElementById('acceptButton') as HTMLButtonElement;
const cancelButton = document.getElementById('cancelButton') as HTMLButtonElement;

// Función para abrir el modal
openModalButton.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar el modal
closeModalButton.onclick = function() {
  modal.style.display = "none";
}

acceptButton.onclick = function() {
  modal.style.display = "none";
  handleModalResponse(true);
}

cancelButton.onclick = function() {
  modal.style.display = "none";
  handleModalResponse(false); 
}

// Función para manejar la respuesta del modal
function handleModalResponse(response: boolean) {
  if (response) {
    alert('Has aceptado.');
  } else {
    alert('Has cancelado.');
  }
}

// Permitir mover el modal (drag and drop)
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const modalContent = document.getElementById('modalContent') as HTMLDivElement;

//Calcula la diferencia de pixeles entre la pisicón del ratón en el eje X y el left del div, también del top respecto al eje Y del ratón
modalContent.onmousedown = function(event: MouseEvent) {
  isDragging = true;
  offsetX = event.clientX - modalContent.offsetLeft;
  offsetY = event.clientY - modalContent.offsetTop;
}

document.onmousemove = function(event: MouseEvent) {
  if (isDragging) {
    modalContent.style.left = (event.clientX - offsetX) + 'px';
    modalContent.style.top = (event.clientY - offsetY) + 'px';
  }
}

document.onmouseup = function() {
  isDragging = false;
}
