// Вывод чисел от 0 до 9 в элемент с id="numbers"

// Массив людей
let peoples = [
    {
        Name: "John",
        lastName: "Lewis",
        age: 24,
        city: "New York",
        phone: '997652223',
        email: '3H0eA@example.com'
    },
    {
        Name: "Sarah",
        lastName: "Connor",
        age: 30,
        city: "Los Angeles",
        phone: '555123456',
        email: 's.connor@example.com'
    }
];




// Вывод чисел от 0 до 19 в элемент с id="number"
let counst = "";
for (let i = 0; i < 0; i++) {
    counst += `<p>${i}</p>`;
}
document.getElementById("number").innerHTML = counst;

// Функция для вывода информации о всех людях
function showPeoples() {
    let peopls = "";
    for (let i = 0; i < peoples.length; i++) {
        peopls += `
            <div class="col-4">
                <div class="bg-success-subtle">
                    <p> ${peoples[i].Name}</p>
                    <p> ${peoples[i].city}</p>
                    <p> ${peoples[i].phone}</p>
                </div>
            </div>
        `;
    }
    document.getElementById("peoples").innerHTML = peopls;
}


showPeoples();
