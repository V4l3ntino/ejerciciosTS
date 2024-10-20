"use strict";
const seatMap = document.getElementById('seatMap');
const reserveButton = document.getElementById('reserveButton');
const seatList = document.getElementById('seatList');
const selectedSeats = [];
// Datos de las butacas (0 = libre, 1 = ocupada)
const rows = 5;
const cols = 10;
const seats = [
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
];
function dibujarMapa() {
    seats.forEach((row, rowIndex) => {
        row.forEach((seat, colIndex) => {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            if (seat === 1) {
                seatDiv.classList.add('occupied');
            }
            else {
                seatDiv.classList.add('available');
                seatDiv.addEventListener('click', () => seleccionarButaca(rowIndex, colIndex, seatDiv));
            }
            seatMap.appendChild(seatDiv);
        });
    });
}
// Seleccionar o deseleccionar butacas
function seleccionarButaca(rowIndex, colIndex, seatDiv) {
    const seatID = `${rowIndex}-${colIndex}`;
    if (selectedSeats.includes(seatID)) {
        // Deseleccionar butaca
        selectedSeats.splice(selectedSeats.indexOf(seatID), 1);
        seatDiv.classList.remove('selected');
    }
    else {
        // Seleccionar butaca
        selectedSeats.push(seatID);
        seatDiv.classList.add('selected');
    }
    actualizarListaButacas();
}
// Actualizar la lista de butacas seleccionadas
function actualizarListaButacas() {
    seatList.textContent = selectedSeats.join(', ');
}
// Reservar butacas
reserveButton.addEventListener('click', () => {
    selectedSeats.forEach(seatID => {
        const [rowIndex, colIndex] = seatID.split('-').map(Number);
        seats[rowIndex][colIndex] = 1; // Marcar como ocupada
    });
    // Reiniciar selección
    selectedSeats.length = 0;
    seatList.textContent = '';
    seatMap.innerHTML = '';
    dibujarMapa();
});
dibujarMapa();
