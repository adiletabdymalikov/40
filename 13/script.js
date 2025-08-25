
function myFunction2(){
  var kun = new Date().getDate(); 
  var ay = new Date().getMonth(); 
  var jyl = new Date().getFullYear();
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
function myFunction3(){
    x = x + 1
  var kun = new Date().getHours(); 
  var ay = new Date().getMinutes(); //7 0-11
  var jyl = new Date().getSeconds(); //2024
  ay = ay + 0; //8 08
  //kun = kun + 1;

  if(ay<10){
    ay = '0'+ ay;
  }
  if(kun<10){
    kun = '0'+ kun;
  }
  document.getElementById("d").innerHTML = x +  kun + ":" + ay + ":" + jyl  ; 
  
} 
function 







