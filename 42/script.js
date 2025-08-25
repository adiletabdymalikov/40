let pizza = [
    {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Vegabond",
        phone: "120$",
    },
    {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Vegabond",
        phone: "120$",
    },
    {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        phone: "58$",
    },
      {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Vegabond",
        phone: "120$",
    },
    {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Vegabond",
        phone: "120$",
    },
    {
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name: "Moin",
        phone: "58$",
        
    }
];

function showPeoples() {
   
    let content = "";
    for (let i = 0; i < pizza.length; i++) {
        content += `
            <div class="row mb-3 col-12">  
                <div class="col-4">
                    <div class="bg-success-subtle p-3" style="border-radius:10px;">
                        <img 
                            src="${pizza[i].img}"
                            style="width:100%; height:150px; border-radius:8px;">
                        <p style="margin-top:10px;">${pizza[i].Name}</p>
                        <p style="font-weight:bold; color:green;">${pizza[i].phone}</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("box").innerHTML = content;
}
showPeoples();
