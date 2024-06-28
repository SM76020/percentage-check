function calculatePercentage() {
    const number = parseFloat(document.getElementById('number1').value);
    const percentage = parseFloat(document.getElementById('percentage1').value);
    const resultElement = document.getElementById('result1');

    if (!isNaN(number) && !isNaN(percentage)) {
        const result = (number * percentage) / 100;
        resultElement.innerText = `${number} * ${percentage}% = ${result}`;
    } else {
        resultElement.innerText = 'Please enter valid numbers.';
    }
}

function calculatePercentageValue() {
    const number = parseFloat(document.getElementById('number2').value);
    const resultValue = parseFloat(document.getElementById('resultValue').value);
    const resultElement = document.getElementById('result2');

    if (!isNaN(number) && !isNaN(resultValue) && number !== 0) {
        const percentage = (resultValue / number) * 100;
        resultElement.innerText = `${resultValue} is ${percentage.toFixed(2)}% of ${number}`;
    } else {
        resultElement.innerText = 'Please enter valid numbers and ensure the number is not zero.';
    }
}

function toggleCalculationType() {
    var type = document.getElementById('calculationType').value;
    document.getElementById('percentageOfNumber').style.display = (type === 'percentageOfNumber') ? 'block' : 'none';
    document.getElementById('percentageValue').style.display = (type === 'percentageValue') ? 'block' : 'none';
}