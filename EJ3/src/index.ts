const redSlider = document.getElementById('redSlider') as HTMLInputElement;
const greenSlider = document.getElementById('greenSlider') as HTMLInputElement;
const blueSlider = document.getElementById('blueSlider') as HTMLInputElement;

const textRedSlider = document.getElementById('textRedSlider') as HTMLInputElement;
const textGreenSlider = document.getElementById('textGreenSlider') as HTMLInputElement;
const textBlueSlider = document.getElementById('textBlueSlider') as HTMLInputElement;

const container = document.getElementById('container') as HTMLDivElement;
const colorInfo = document.getElementById('colorInfo') as HTMLParagraphElement;
const textColorInfo = document.getElementById('textColorInfo') as HTMLParagraphElement;

// Función para convertir valores RGB a hexadecimal
function rgbToHex(r: number, g: number, b: number): string {
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

redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

textRedSlider.addEventListener('input', updateTextColor);
textGreenSlider.addEventListener('input', updateTextColor);
textBlueSlider.addEventListener('input', updateTextColor);
