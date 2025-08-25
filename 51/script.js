let peoples = [
    {
        Name: "Aplle",
       
    },
    {
        Name: "Orange",
      
    },
     {
        Name: "Banana",
     
    },
    {
        Name: "Chery",
     
    },
    {
        Name: "Milk",
     
    },
    {
        Name: "Peantus",
     
    },
{
        Name: "Butter",
     
    },
    {
        Name: "Tomato",
     
    },
];


let counst = "";
for (let i = 0; i < 0; i++) {
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
                
                </div>
            </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls;
}

showPeoples();


function searchPerson() {
    let val = document.getElementById("search").value.toLowerCase();
    let res = peoples.filter((item) =>
        item.Name.toLowerCase().includes(val)  
    );
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls += `
                <div class="col-4 p-3">
                    <div class="bg-secondary-subtle p-2" ">
                        <p><strong>Имя:</strong> ${res[i].Name}</p>
                    
                    </div>
                </div>
            `;
        }
       document.getElementById("peoples").innerHTML = peopls;
    } else {
        showPeoples();
    }
}
