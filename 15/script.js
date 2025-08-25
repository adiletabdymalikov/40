
function ageCalculate(){
  
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  let yearNow = new Date().getFullYear();
  let age = yearNow - year;
  let monthNow = new Date().getMonth();
  monthNow = monthNow + 1;
  let ageMonth = monthNow - month;
  let dayNow = new Date().getDate();
  let ageDay = dayNow - day;
  if(ageMonth < 0){
    age = age - 1;
  }
  if(ageMonth == 0 && ageDay < 0){
    age = age - 1;
  }
  document.getElementById("data").innerHTML = 'Ваш возраст: ' + age + ' лет' + ' ' + ageMonth + ' месяцев' + ' ' + ageDay + ' дней';
}