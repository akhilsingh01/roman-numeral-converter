const inputNumber = document.getElementById('number');
const outputText = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

inputNumber.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        displayRomanNumeral();
    }
});

convertBtn.addEventListener('click', () => {
    displayRomanNumeral();
});

const displayRomanNumeral = () => {
    outputText.classList.remove('output-error', 'output-success')
    const value = inputNumber.value;
    if (value === '' || !Number.isInteger(Number(value))) {
        outputText.innerText = "Please enter a valid number.";
        outputText.classList.add('output-error');
    } else if (value <= 0) {
        outputText.innerText = "Please enter a number greater than or equal to 1.";
        outputText.classList.add('output-error');
    } else if (value >= 4000) {
        outputText.innerText = "Please enter a number less than or equal to 3999.";
        outputText.classList.add('output-error');
    } else {
        const roman = convertToRoman(value);
        outputText.classList.add('output-success');
        outputText.innerText = roman;
    }
    outputText.classList.remove('hidden');
}

const romanNumeralMap = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
];

function convertToRoman(num) {
    let result = '';
    for (const { value, symbol } of romanNumeralMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}