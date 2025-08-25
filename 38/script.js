let names = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];





 
 let tt = "";
for (let i = 0; i<names.length; i++ ){
    tt += ` <div class=" bg-secondary col-12 p-2"> 
    <div class="col-12 bg-secondary-subtle   p-3" >${ names[i]} </div>  </div>
    `;

}
document.getElementById("rr").innerHTML = tt;

