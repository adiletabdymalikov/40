let names = "Teitel 2";
let peoples = [
    {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Item 1",
        city: "Bank Detalis",
    },
    {
         img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        city: "Serf",
    },
    {
         img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        city: "Serf",
    },
    {
         img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        city: "Serf",
    },
];

function showPeoples() {
    let peopls = "";
    for (let i = 0; i < peoples.length; i++) {
        peopls += `
            <div class="col-12">
                <div class="bg-success-subtle p-3" style="border-radius:10px;">
                   <p> <img height="60px" width="60px" src=" ${peoples[i].img} border-radius:50%; height:50px; width:50px"> </p>
                    <p>${peoples[i].Name}</p>
                    <p>${peoples[i].city}</p>
                </div>
            </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls ;
}
showPeoples();

let people = [
    {
       
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Item 32",
        city: "Bank Detalis",
    },
    {
         img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        city: "Serf",
    },
    {
         img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        city: "Serf",
    },
    {
         img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        city: "Serf",
    },
];

function showPeople() {
    let peopls = "";
    for (let i = 0; i < people.length; i++) {
        peopls += `
            <div class="col-12">
                <div class="bg-success-subtle p-3" style="border-radius:10px;">
                    <p> <img height="60px" width="60px" src=" ${people[i].img} border-radius:50%; height:50px; width:50px"> </p>
                    <p>${people[i].Name}</p>
                    <p>${people[i].city}</p>
                </div>
            </div>
        `;
    }
   
}
showPeople();

function seacrhPerson() {
    let val = document.getElementById("search").value;
    let res = peoples.filter((item) => item.Name.toLowerCase().includes(val.toLowerCase())
        || item.names.toLowerCase().includes(val.toLowerCase())

        || item.numbers.toLowerCase().includes(val.toLowerCase())
    );
    console.log(res); //[]
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls = peopls + 
            `<div class="col-4 p-3">
            <div class="bg-secondary-subtle">
            <p>${res[i].Names}</p>
            <p>${res[i].peoples}</p>
            
            </div>
            </div>`
        }
    document.getElementById("box").innerHTML = peopls;

    } else {
      showPeoples();

    }
    }