let ss = [
    {
       
        name:"you ",
        god:"2013",
    },
      {
       
        name:"you",
        god:"2010",
    },
      {
      
        name:"you",
        god:"2009",
    },
      {
       
        name:"tt",
        god:"2004",
    },
]
 function showPeople(){
    let peopls ="";
    for (let i = 0; i < ss.length; i++){
        peopls += `
        <div class="col-12">
        <div class=" p-3" style="border-radius:10px;">
        
       <p>${ss[i].name}</p>
     
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
        item.god.toLowerCase().includes(val)  
    );
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls += `
                <div class="col-12  p-1">
                    <div class="bg-secondary-subtle p-2 " ">
                        <p>${res[i].name}</p>
                   
                    </div>
                </div>
            `;
        }
       document.getElementById("peoples").innerHTML = peopls;
    } else {
        showPeople();
    }
}