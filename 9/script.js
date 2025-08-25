function myFunction() {
  var name = document.getElementById("name").value;
  // console.log(name);  
  let saat = new Date().getHours(); //22 getMinutes() getSeconds() 07:12
  let min = new Date().getMinutes(); //45
  let sec = new Date().getSeconds();
  var salam;
  if (saat <= 4) {
    salam = "Доброй ночи";
  }
  else if (saat <= 10) {
    salam = "Доброе утро";
  }
  else if (saat <= 16) {
    salam = "Добрый день";
  } else if(saat<=23) {
    salam = "Добрый вечер";
  }
  document.getElementById("d").innerHTML = salam + ", " + name;
}
function myFunction2(){
  var kun = new Date().getDate(); //28 integer
  var ay = new Date().getMonth(); //7 0-11
  var jyl = new Date().getFullYear(); //2024
  ay = ay + 1; //8 08
  //kun = kun + 1;

  if(ay<10){
    ay = '0'+ ay;
  }
  if(kun<10){
    kun = '0'+ kun;
  }
  document.getElementById("d").innerHTML = "Сегодня: " + kun + "/" + ay + "/" + jyl;
}
//01.09.2024
//2024-04-05
//2024-04-07

let week = new Date().getDay(); //0-6 2

if(week == 0){
  week = 'Sunday';
}else if(week == 1){
  week = 'Monday';
}else if(week == 2){
  week = 'Tuesday';
}else if(week == 3){
  week = 'Wednesday';
}else if(week == 4){
  week = 'Thursday';
}else if(week == 5){
  week = 'Friday';
}else if(week == 6){
  week = 'Saturday';
}