function box(){
  const red = document.getElementById('red');
  const yel = document.getElementById('yel');
  const green = document.getElementById('green');      
  
  function showRed() {
    red.style.backgroundColor = 'red';
    yel.style.backgroundColor = 'gray';
    green.style.backgroundColor = 'gray';
    setTimeout(showYellow, 3000);
  }

  function showYellow(){
    red.style.backgroundColor = 'gray';
    yel.style.backgroundColor = 'yellow';
    green.style.backgroundColor = 'gray';
    setTimeout(showGreen, 3000);
  }

  function showGreen(){
    red.style.backgroundColor = 'gray';
    yel.style.backgroundColor = 'gray';
    green.style.backgroundColor = 'green';
    setTimeout(showRed, 3000);
  }

  showRed(); // Запуск
}

box(); // Вызов
