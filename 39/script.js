let name [
    (
        
    )
]
let tt = "";
for (let i = 0; i < names.length; i++) {
    tt += `<div class="col-12 p-2"> 
    <div class="col-12 bg-secondary-subtle   " > <img height="60px" width="60px" mt-3 src=" ${img[i]}">  ${names[i]} <br>  ${numbers[i]} </div>  </div>
    `;
}
document.getElementById("box").innerHTML = tt;
function seacrhPerson() {
    let val = document.getElementById("search").value;
    let res = peoples.filter((item) => item.Name.toLowerCase().includes(val.toLowerCase())
        || item.names.toLowerCase().includes(val.toLowerCase())
        || item.img.toLowerCase().includes(val.toLowerCase())
        || item.numbers.toLowerCase().includes(val.toLowerCase())
    );
    console.log(res); //[]
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls = peopls + `<div class="col-12 p-2"> 
      <div class="col-12 bg-secondary-subtle   " > <img height="60px" width="60px" mt-3 src=" ${res[i].img}">  ${res[i].Name} <br>  ${res[i].numbers} </div>  </div>
      `;
        }
        document.getElementById("box").innerHTML = tt;
    } else {
        schowPeoples();
    }
    }
