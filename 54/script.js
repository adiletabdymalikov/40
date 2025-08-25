let ss = [
    {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"ket",
      
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"zus",
       
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
      
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"wer",
      
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
      
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
      
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
      
    },
]
 

 function showPeople(){
    let peopls ="";
    for (let i = 0; i < ss.length; i++){
        peopls += `
        <div class="col-12">
        <div class=" " style="border-radius:10px;">
     
      
      
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
                <div class="col-4 ">
                    <div class=" p-3" ">
                      <img src=" ${res[i].img}">  
                  
                    </div>
                </div>
            `;
        }
       document.getElementById("peoples").innerHTML = peopls;
    } else {
        showPeople();
    }
}