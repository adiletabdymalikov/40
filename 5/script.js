let x = 0
function f1() {
 x = x + 1
 
  
  document.getElementById('p').innerHTML =  x;
}
function f2() {
  x = x - 1
  document.getElementById('p').innerHTML = x ;
}
function showBox() {
  let box = `<div class="box">1+</div>`;
  document.getElementById('box').innerHTML = box;
}