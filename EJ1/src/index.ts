// Función para actualizar el valor del slider
function updateRangeValue(value: string) {
    const rangeValueSpan = document.getElementById('rangeValue');
    if (rangeValueSpan) {
      rangeValueSpan.textContent = value;
    }
  }
  
  // Validar el formulario
  function validateForm(event: Event) {
    event.preventDefault();
  
    const form = document.getElementById('exampleForm') as HTMLFormElement;
    
    if (!form.checkValidity()) {
      alert('Por favor, completa correctamente todos los campos requeridos.');
      return;
    }
  
    // Validación de la edad
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const age = parseInt(ageInput.value);
    if (age < 18) {
      alert('Debes tener al menos 18 años.');
      return;
    }
  
    alert('Formulario enviado correctamente.');
  }
  
  document.getElementById('exampleForm')?.addEventListener('submit', validateForm);
  