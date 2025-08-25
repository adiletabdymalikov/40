let ss = [
    {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        
        name:"T-shirt",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
      prece:"$ 15.00"
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"zus",
          text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
           prece:"$ 15.00",
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
         text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
          prece:"$ 15.00",
    },
      {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"wer",
         text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
 prece:"$ 15.00",
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
         text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
          prece:"$ 15.00",
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
         text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
          prece:"$ 15.00",
    },
     {
        img:"https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        name:"mar",
         text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, autem.",
          prece:"$ 15.00",
    },
]
 

 function showPeople(){
    let peopls ="";
    for (let i = 0; i < ss.length; i++){
        peopls += `
        <div class="col-12">
       
        </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls;
 }
 showPeople();

 function searchPerson() {
    let val = document.getElementById("search").value.toLowerCase();
    let res = ss.filter((item) =>
        item.name.toLowerCase().includes(val) ||
        item.prece.toLowerCase().includes(val) ||
        
    );
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls += `
                <div class="col-4 ">
                    <div class=" p-2 m-5" ">
                      <img src=" ${res[i].img}">  
                  <h3 class="text-center p-2 ">${res[i].name}</h3>
                  <p class="text-center">${res[i].text}</p>
                  <p class="text-center">${res[i].prece}</p>
                    </div>
                </div>
            `;
        }
       document.getElementById("peoples").innerHTML = peopls;
    } else {
        showPeople();
    }
}