function f1() {
  var a = parseFloat(document.getElementById('inp1').value);
  var b = parseInt(document.getElementById('inp2').value);
  var sum = a * b / 100;
  document.getElementById('p').innerHTML = 'Result:' + sum;
}
function f2() {
  var a = parseFloat(document.getElementById('inp3').value);
  var b = parseInt(document.getElementById('inp4').value);
  var sum = a * 100 / b;
  document.getElementById('p').innerHTML = 'Result:' + sum;
}
