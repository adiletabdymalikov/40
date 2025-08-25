function s() {
  let speed = "Welcome!";
  document.getElementById('p').innerHTML = speed;
  let box = document.getElementById('box');
  box.style.backgroundColor = 'green ', 'blue';
}
  setTimeout(s, 2000-3000);
  // setInterval(s, 5000);
function time(){
  var hour = new Date().getHours(); //10
  var min = new Date().getMinutes(); //5
  var sec = new Date().getSeconds(); //3
    if(min<10 && sec<10){
       document.getElementById("box").innerHTML = hour + ":0" + min + ":0" + sec;  
    }else if(min<10){
       document.getElementById("box").innerHTML = hour + ":0" + min + ":" + sec;
    }else if(sec<10){
       document.getElementById("box").innerHTML = hour + ":" + min + ":0" + sec;
    }
    else{
  document.getElementById("box").innerHTML = hour + ":" + min + ":" + sec;
   }
}
setInterval(time,1000); //2s = 2000ms