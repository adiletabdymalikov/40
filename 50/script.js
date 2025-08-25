let product = [
    {
        name:"apple",
    },
    {
        name:"Orange",
    },
    {
        name:"Banana",
    },
    {
        name:"Chery",
    },
    {
        name:"Milk",
    },
    {
        name:"Peantus",
    },
    {
        name:"Butter",
    },
    {
        name:"Tomato",
    }

];


function showProduct (){
     let content = "";
   for (i = 0; i < product.length; i++){
    content += `
        <div class="col-12 col-md-3">
        <div class="bg-warning-subtle mb-3 p-4 position-relative" style="border-radius:10px;">
        <p>${product[i].name}</p>
        </div>
        </div>
        `;
   }
   document.getElementById("box").innerHTML = content;
}
showProduct();

function searсhPerso() {
    let val = document.getElementById("search").value;
    let res = product.filter((item) => item.name.toLowerCase().includes(val.toLowerCase())
        || item.name.toLowerCase().includes(val.toLowerCase())
       
    );
    console.log(res); //[]
    if (res.length > 0) {
        let peopls = "";
        for (let i = 0; i < res.length; i++) {
            peopls += `   <div class="col-12 col-md-3">
        <div class="bg-warning-subtle mb-3 p-4 position-relative" style="border-radius:10px;">
        <p>${res[i].name}</p>
        </div>
        </div>
   
      `;
        }
        document.getElementById("box").innerHTML = peopls;
    } else {
        showProduct();
    }
    }
     
    let input = document.getElementById("search");
    input.addEventListener("input", searсhPerso);