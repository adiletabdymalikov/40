
function day() {
  let block = document.getElementsByClassName('block1')[0];
block.style.bagckgraoundColor = '#ffffcc';
document.body.style.backgroundColor = 'white';

}

function night() {
  let block = document.getElementsByClassName('block1')[0];
      block.style.backgroundColor = '';
      document.body.style.backgroundColor = 'black'; 
    
}

document.getElementById('day').addEventListener('click', day);
document.getElementById('night').addEventListener('click', night);
