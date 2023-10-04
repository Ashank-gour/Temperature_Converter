function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    let result = '';

    if (selectedUnit === 'celsius') {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        result = `${temperatureInput} Celsius is equal to ${fahrenheit} Fahrenheit.`;
    } else if (selectedUnit === 'fahrenheit') {
        const celsius = (temperatureInput - 32) * 5/9;
        result = `${temperatureInput} Fahrenheit is equal to ${celsius} Celsius.`;
    }

    document.getElementById('result').innerText = result;
}