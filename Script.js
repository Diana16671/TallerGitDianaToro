function convertNumberToWords() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number) || number < 0 || number > 999999999) {
        alert('Por favor, ingresa un número entre 0 y 999,999,999.');
        return;
    }

    resultElement.value = numberToWords(number);
}

function numberToWords(number) {
    const ones = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const tens = ['cero', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const hundreds = ['cero', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
    
    if (number === 0) return 'cero';

    if (number < 10) return ones[number];
    if (number < 20) return teens[number - 10];
    if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 === 0 ? '' : ' y ' + ones[number % 10]);
    if (number < 1000) return hundreds[Math.floor(number / 100)] + (number % 100 === 0 ? '' : ' ' + numberToWords(number % 100));
    if (number < 1000000) return numberToWords(Math.floor(number / 1000)) + ' mil' + (number % 1000 === 0 ? '' : ' ' + numberToWords(number % 1000));
    if (number < 1000000000) {
        const millions = Math.floor(number / 1000000);
        const remainder = number % 1000000;
        return numberToWords(millions) + ' millones' + (remainder === 0 ? '' : ' ' + numberToWords(remainder));
    }

    return '';
}