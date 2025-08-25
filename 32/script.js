function box() {
  const red = document.getElementById('red');
  const green = document.getElementById('green');

  function showRed() {
    red.style.backgroundColor = 'red';
    green.style.backgroundColor = 'gray';
    setTimeout(showGreen, 3000);
  }

  function showGreen() {
    red.style.backgroundColor = 'gray';
    green.style.backgroundColor = 'green';
    setTimeout(showRed, 3000);
  }

  showRed(); // Запуск
}

box(); // Вызов
