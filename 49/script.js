let product = [
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
    {

        name: "Name Brand Shoes",
        d: "Product fashion, hot trend and very cheap",
        img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        c: "сом",

    },
];

function showProducts() {
    let content = "";
    for (let i = 0; i < product.length; i++) {
        content += `
        <div class="col-md-12">
          <div class="bg-warning-subtle mb-3 p-3" >
            
            <div class="position-relative d-inline-block" style="width:20%; height:150px;">
              <img src="${product[i].img}" style="width:100%; height:100%; object-fit: cover;">
            
            </div>
            
            <div class=" d-inline-block " style="width:60%;">
              <h5 class="mt-2">${product[i].name}</h5>
              <p>${product[i].d}</p>
             
            
          </div>
        </div>
        `;
    }
    document.getElementById("pp").innerHTML = content;
}

showProducts();
