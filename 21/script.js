function s() {
    document.getElementById('p').innerHTML = "Welcome!";
    let box = document.getElementById('box');
    box.style.backgroundColor = 'green';
}
setTimeout(s, 2000);
document.body.backgroundImage = "url( https://th.bing.com/th/id/OIP.B8XSETJbLmQyKUNK9zAyoAHaEK?w=333&h=187&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3 )";
function ss() {
    document.getElementById('t').innerHTML = "";
    let box = document.getElementById('rr');
    box.style.backgroundColor = 'blue';
}
setTimeout(ss, 3000);

function sss() {
    document.getElementById('tt').innerHTML = "";
    let imageBox = document.getElementById('im');
    imageBox.style.border = "5px solid red"; // вместо 'backgroundColor = img'
}
let images = [
  "https://th.bing.com/th/id/OIP.B8XSETJbLmQyKUNK9zAyoAHaEK?w=333&h=187&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.e1stGgyoCXXf2NmLcxwjawHaE7?w=203&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",

];

let index = 0;

function с() {
  let imgElement = document.getElementById("im");
  imgElement.src = images[index];
  index = (index + 1) % images.length; // Перезапуск по кругу
}

setInterval(с, 3000); // Смена каждые 3 секунды

setTimeout(sss, 7000);

function time() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // добавляем нули, если нужно
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    document.getElementById("box").innerHTML = hour + ":" + min + ":" + sec;
}
setInterval(time, 1000);