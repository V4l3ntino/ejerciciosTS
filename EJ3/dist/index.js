"use strict";
// colorControl.ts
// Obtener referencias a los sliders y elementos del DOM
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const textRedSlider = document.getElementById('textRedSlider');
const textGreenSlider = document.getElementById('textGreenSlider');
const textBlueSlider = document.getElementById('textBlueSlider');
const container = document.getElementById('container');
const colorInfo = document.getElementById('colorInfo');
const textColorInfo = document.getElementById('textColorInfo');
// Función para convertir valores RGB a hexadecimal
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
// Función para actualizar el color de fondo
function updateBackgroundColor() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);
    const hexColor = rgbToHex(red, green, blue);
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorInfo.textContent = `Color de fondo: ${hexColor} (RGB: ${red}, ${green}, ${blue})`;
}
// Función para actualizar el color del texto
function updateTextColor() {
    const red = parseInt(textRedSlider.value);
    const green = parseInt(textGreenSlider.value);
    const blue = parseInt(textBlueSlider.value);
    const hexColor = rgbToHex(red, green, blue);
    container.style.color = `rgb(${red}, ${green}, ${blue})`;
    textColorInfo.textContent = `Color del texto: ${hexColor} (RGB: ${red}, ${green}, ${blue})`;
}
// Escuchar eventos de cambio en los sliders de fondo
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);
// Escuchar eventos de cambio en los sliders de texto
textRedSlider.addEventListener('input', updateTextColor);
textGreenSlider.addEventListener('input', updateTextColor);
textBlueSlider.addEventListener('input', updateTextColor);
