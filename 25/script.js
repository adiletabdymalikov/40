function calculateConsumption() {
  const consumption = parseFloat(document.getElementById("consumption").value); // л/100 км
  const price = parseFloat(document.getElementById("price").value); // сом
  const distance = parseFloat(document.getElementById("distance").value); // км
  const fuelOutput = document.getElementById("fuelAmount");
  const costOutput = document.getElementById("cost");

  if (isNaN(consumption) || isNaN(price) || isNaN(distance) || consumption <= 0 || price <= 0 || distance <= 0) {
    fuelOutput.textContent = "";
    costOutput.textContent = "";
    alert("Пожалуйста, введите корректные значения.");
    return;
  }

  const litersNeeded = (consumption / 100) * distance;
  const totalCost = litersNeeded * price;


  fuelOutput.textContent = litersNeeded.toFixed(2) + " л";
  costOutput.textContent = totalCost.toFixed(2) + " сом";
}
