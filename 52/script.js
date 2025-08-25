let ss = [
    {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"you",
        number:"555-555-5555",
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"you",
        number:"444-444-4444",
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"you",
        number:"333-333-3333",
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"tt",
        number:"2222-222-2222",
    },
]
 let counst = "";
 for (let i= 0; i < 5; i++){
    counst += `<p>${i}</p>`;
 }
 document.getElementById("p").innerHTML = counst;

 function showPeople(){
    let peopls ="";
    for (let i = 0; i < ss.length; i++){
        peopls += `
        <div class="col-12">
        <div class="bg-success-subtle p-3" style="border-radius:10px;">
        <img height="60px" width="60px" src=" ${ss[i].img} border-radius:50%; height:50px; width:50px">
       <p>${ss[i].name}</p>
       <p>${ss[i].number}</p>
        </div>
        </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls;
 }
 showPeople();

 function searchPerson() {
    let val = document.getElementById("search").value.toLowerCase();
    let res = ss.filter((item) =>
        item.name.toLowerCase().includes(val)  
    );
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls += `
                <div class="col-4 p-3">
                    <div class="bg-secondary-subtle p-2" ">
                        <p>${res[i].name}</p>
                    <p>${res[i].number}</p>
                    </div>
                </div>
            `;
        }
       document.getElementById("peoples").innerHTML = peopls;
    } else {
        showPeople();
    }
}
