let names = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K"];
let dd = ["@","&","?","" ];

console.log(names[10]);
console.log(names[3]);
console.log(names[11]);
console.log(names[12]);

var name = names[10];
 let peoples = [
    {
        Name:"2",
       
        
    },
    {
        Name:"3",
       
        
    },
    {
        Name:"4",
       
        
    },
    {
        Name:"5",
       
        
    },
    {
        Name:"6",
       
        
    },
    {
        Name:"7",
       
        
    },
    {
        Name:"8",
       
        
    },
    {
        Name:"9",
       
        
    },
    {
        Name:"10",
       
        
    },
    
    {
        Name:"J",
      
    },
    {
        Name:"Q",
       
        
    },
{
    
    Name:"K",
},
{
    Name:"A",
}

 ]
 let counst = "";
for (let i = 0; i<0; i++ ){
    counst += `<p>${i}</p>`;
}
document.getElementById("p").innerHTML = counst;
 document.getElementById("names").innerHTML = names[10] + names[3] + names[11] + names[12] + names[9]; ;
 
function showPeoples() {
    let peopls = "";
    for (let i = 0; i < peoples.length; i++) {
        peopls += `
            <div class="col-4 row g-2">
                <div class="bg-success-subtle">
                
                    <p> ${peoples[i].Name}</p>
                    
                </div>
            </div>
        `;
    }
    document.getElementById("box").innerHTML = peopls;
}
showPeoples();
 let tt = "";
for (let i = 0; i<names.length; i++ ){
    tt += ` <div class="col-3 p-2"> 
    <div class="col-12 bg-success text-center p-5" >${i} </div>  </div>
    `;

}
document.getElementById("rr").innerHTML = tt;
