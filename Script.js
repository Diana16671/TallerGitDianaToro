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
    const hundreds = ['cero', 'cien', 'ciento','doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
    
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
function translateToEnglish() {
    const resultElement = document.getElementById('result');
    const spanishNumber = resultElement.value.trim().toLowerCase();

    // Definir un diccionario de traducciones básicas
    const translationDictionary = {
        'cero': 'zero',
        'uno': 'one',
        'dos': 'two',
        'tres': 'three',
        'cuatro': 'four',
        'cinco': 'five',
        'seis': 'six',
        'siete': 'seven',
        'ocho': 'eight',
        'nueve': 'nine',
        'diez': 'ten',
        'once': 'eleven',
        'doce': 'twelve',
        'trece': 'thirteen',
        'catorce': 'fourteen',
        'quince': 'fifteen',
        'dieciséis': 'sixteen',
        'diecisiete': 'seventeen',
        'dieciocho': 'eighteen',
        'diecinueve': 'nineteen',
        'veinte': 'twenty',
        'treinta': 'thirty',
        'cuarenta': 'forty',
        'cincuenta': 'fifty',
        'sesenta': 'sixty',
        'setenta': 'seventy',
        'ochenta': 'eighty',
        'noventa': 'ninety',
        'cien': 'one hundred',
        'doscientos':'two hundred',
        'trescientos': 'three hundred',
        'cuatrocientos': 'four hundred',
        'quinientos': 'five hundred',
        'seiscientos': 'six hundred',
        'setecientos': 'seven hundred',
        'ochocientos': 'eight hundred ',
        'novecientos': 'nine hundred',
        'mil': 'thousand',
        'millones': 'millions',
        'ciento': 'hundred'
        // Agrega más traducciones según sea necesario
    };

    // Traducir palabra por palabra
    const translatedWords = spanishNumber.split(' ').map(word => translationDictionary[word] || word);
    const englishNumber = translatedWords.join(' ');

    // Mostrar el resultado traducido
    resultElement.value = englishNumber.charAt(0).toUpperCase() + englishNumber.slice(1);
}