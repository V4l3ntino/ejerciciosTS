"use strict";
// form.ts
var _a;
// Función para actualizar el valor del slider
function updateRangeValue(value) {
    const rangeValueSpan = document.getElementById('rangeValue');
    if (rangeValueSpan) {
        rangeValueSpan.textContent = value;
    }
}
// Validar el formulario
function validateForm(event) {
    event.preventDefault();
    const form = document.getElementById('exampleForm');
    if (!form.checkValidity()) {
        alert('Por favor, completa correctamente todos los campos requeridos.');
        return;
    }
    // Validación adicional si es necesario
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    if (age < 18) {
        alert('Debes tener al menos 18 años.');
        return;
    }
    // Si todo está correcto
    alert('Formulario enviado correctamente.');
}
// Escuchar el evento de envío del formulario
(_a = document.getElementById('exampleForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', validateForm);
