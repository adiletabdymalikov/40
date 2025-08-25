function ageCalculate() {
    var value = parseFloat(document.getElementById("value").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    if (!value) {
        document.getElementById("result").innerHTML = "Введите корректное число!";
        return;
    }

   
    var conversionRates = {
        cm: { cm: 1, m: 0.01, km: 0.00001, in: 0.3937, ft: 0.0328 },
        m: { cm: 100, m: 1, km: 0.001, in: 39.37, ft: 3.281 },
        km: { cm: 100000, m: 1000, km: 1, in: 39370, ft: 3281 },
        in: { cm: 2.54, m: 0.0254, km: 0.0000254, in: 1, ft: 0.0833 },
        ft: { cm: 30.48, m: 0.3048, km: 0.0003048, in: 12, ft: 1 }
    };

    var result = value * conversionRates[fromUnit][toUnit];

    document.getElementById("result").innerHTML = `Результат: ${result.toFixed(4)} ${toUnit}`;
}