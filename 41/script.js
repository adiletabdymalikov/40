let peoples = [
    {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name:"Vegabond",
       
        phone:"120$",
       
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name:"Vegabond",
       
        phone:"120$",
       
    },
    {
          img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        Name:"Moin",
      
        phone:"58$",
     
    }
]

 
function showPeoples() {
    let peopls = "";
    for (let i = 0; i < peoples.length; i++) {
        peopls += `
            <div class="row mb-3 col-12">  
            <div class="col-4">
                <div class="bg-success-subtle">
                <p> <img height="150px" width="100%" src=" ${peoples[i].img} border-radius:50%; height:50px; width:50px"> </p>
                    <p> ${peoples[i].Name}</p>
                   
                    <p> ${peoples[i].phone}</p>
                </div>
            </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls;
}
showPeoples();
