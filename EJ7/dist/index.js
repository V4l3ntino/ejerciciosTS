"use strict";
function generatePassword(options) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = options.customSymbols || '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let allChars = '';
    if (options.useLowercase)
        allChars += lowercaseChars;
    if (options.useUppercase)
        allChars += uppercaseChars;
    if (options.useNumbers)
        allChars += numberChars;
    if (options.useSymbols && symbolChars)
        allChars += symbolChars;
    if (allChars === '')
        return ''; // Devuelve vacío si no se seleccionan opciones
    let generatedPassword = '';
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars[randomIndex];
    }
    return generatedPassword;
}
