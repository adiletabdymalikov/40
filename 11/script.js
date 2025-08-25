function updateTime() {
    var now = new Date();
    var hours = Date(now.getHours()).padStart( '0');
    var minutes = Date(now.getMinutes()).padStart(2, '0');
   
    document.getElementById('t').innerText = `${hours}:${minutes}:${seconds}`;
    var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    document.getElementById('d').innerText = days[now.getDay()];
}

setInterval(updateTime, 100);
updateTime();

function.f1(){
    var a = dat
}