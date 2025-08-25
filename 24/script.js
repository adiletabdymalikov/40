

  function calculateFuelConsumption() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuel = parseFloat(document.getElementById('fuel').value);

    if (!isNaN(distance) && !isNaN(fuel) && distance > 0 && fuel > 0) {
      const consumption = (fuel / distance) * 100;
      document.getElementById('consumptionResult').textContent = consumption.toFixed(2);
    } else {
      alert('Пожалуйста, введите корректные значения расстояния и топлива.');
    }
  }
