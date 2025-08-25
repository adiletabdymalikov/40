function ageCalculate() {
    var year = document.getElementById("year").value;
    let yearNow = new Date().getFullYear();
    let age = yearNow - year;
    document.getElementById("data").innerHTML = 'Ваш возраст: ' + age + ' лет';
}