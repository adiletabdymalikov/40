let balance = 1000.0;

function getAmount() {
  const value = parseFloat(document.getElementById("amount").value);
  return isNaN(value) || value <= 0 ? null : value;
}

function updateDisplay() {
  document.getElementById("balance").textContent = balance.toFixed(2);
}

function deposit() {
  const amount = getAmount();
  if (amount) {
    balance += amount;
    updateDisplay();
    showMessage(`Пополнено: +${amount.toFixed(2)} ед.`);
  } else {
    showMessage("Введите корректную сумму.");
  }
}

function withdraw() {
  const amount = getAmount();
  if (amount && amount <= balance) {
    balance -= amount;
    updateDisplay();
    showMessage(`Снято: -${amount.toFixed(2)} ед.`);
  } else if (amount > balance) {
    showMessage("Недостаточно средств.");
  } else {
    showMessage("Введите корректную сумму.");
  }
}

function showBalance() {
  showMessage(`Ваш баланс: ${balance.toFixed(2)} ед.`);
}

function logout() {
  balance = 0;
  updateDisplay();
  showMessage("Вы вышли. Баланс сброшен.");
}

function showMessage(text) {
  document.getElementById("message").textContent = text;
}
