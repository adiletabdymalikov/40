let peoples = [
    {
        Name: "Moin",
        Lastname: "Hr",
        city: "serf",
        phone: "938293392",
        email: "dekda@example.com"
    },
    {
        Name: "Moin",
        Lastname: "Hr",
        city: "serf",
        phone: "938293392",
        email: "dekda@example.com"
    },
     {
        Name: "hrr",
        Lastname: "Hr",
        city: "serf",
        phone: "938293392",
        email: "dekda@example.com"
    },

];

// 🔢 Показать цифры от 0 до 4
let counst = "";
for (let i = 0; i < 5; i++) {
    counst += `<p>${i}</p>`;
}
document.getElementById("p").innerHTML = counst;

// 👥 Показать всех пользователей
function showPeoples() {
    let peopls = "";
    for (let i = 0; i < peoples.length; i++) {
        peopls += `
            <div class="col-4 p-3">
                <div class="bg-success-subtle p-2" style="border-radius:10px;">
                    <p><strong>Имя:</strong> ${peoples[i].Name}</p>
                    <p><strong>Фамилия:</strong> ${peoples[i].Lastname}</p>
                    <p><strong>Город:</strong> ${peoples[i].city}</p>
                    <p><strong>Телефон:</strong> ${peoples[i].phone}</p>
                    <p><strong>Email:</strong> ${peoples[i].email}</p>
                </div>
            </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls;
}

showPeoples();

// 🔎 Поиск пользователей
function searchPerson() {
    let val = document.getElementById("search").value.toLowerCase();

    let res = peoples.filter((item) =>
        item.Name.toLowerCase().includes(val) ||
        item.Lastname.toLowerCase().includes(val) ||
        item.city.toLowerCase().includes(val) ||
        item.phone.toLowerCase().includes(val) ||
        item.email.toLowerCase().includes(val)
    );

    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls += `
                <div class="col-4 p-3">
                    <div class="bg-secondary-subtle p-2" style="border-radius:10px;">
                        <p><strong>Имя:</strong> ${res[i].Name}</p>
                        <p><strong>Фамилия:</strong> ${res[i].Lastname}</p>
                        <p><strong>Город:</strong> ${res[i].city}</p>
                        <p><strong>Телефон:</strong> ${res[i].phone}</p>
                        <p><strong>Email:</strong> ${res[i].email}</p>
                    </div>
                </div>
            `;
        }
       document.getElementById("peoples").innerHTML = peopls;

    } else {
        showPeoples();
    }
}
