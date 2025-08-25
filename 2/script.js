function f1() {
  var a = parseFloat(document.getElementById('inp1').value);
  var b = parseInt(document.getElementById('inp2').value);
  var sum = a + b;
  document.getElementById('p').innerHTML = 'Result:' + sum;
}
function f2() {
  var a = parseFloat(document.getElementById('inp1').value);
  var b = parseInt(document.getElementById('inp2').value);
  var sum = a - b;
  document.getElementById('p').innerHTML = 'Result:' + sum;
}
function showBox() {
  let box = `<div class="box">Footer</div>`;
  document.getElementById('box').innerHTML = box;
}
function f3() {
  var a = parseFloat(document.getElementById('inp1').value);
  var b = parseInt(document.getElementById('inp2').value);
  var sum = a * b;
   document.getElementById('p').innerHTML = 'Result:' + sum;
}

function f4() {
  var a = parseFloat(document.getElementById('inp1').value);
  var b = parseInt(document.getElementById('inp2').value);
  var sum = a / b ;
   document.getElementById('p').innerHTML = 'Result:' + sum;
}
function f5() {
  var a = parseFloat(document.getElementById('inp1').value);
  var b = parseInt(document.getElementById('inp2').value);
  var sum = a * 100 / 100;
   document.getElementById('p').innerHTML = 'Result:' + sum ;
}

