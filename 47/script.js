let product = [
  {
   
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: ""
  },
  {
 
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: "10% "
  },
  {
  
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: "SALE"
  },
  {
  
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
n: "NEW"
  },
   {
   
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: "NEWS"
  },
   {
   
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: "NEWS",
    t: "NEW"
  },
   {
   
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: "NEWS"
  },
   {
   
    name: "Name Brand Shoes",
    d: "Product fashion, hot trend and very cheap",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом",
    n: "NEWS"
  },
];

function showProducts() {
  let content = ""; 
  for (let i = 0; i < product.length; i++) {
    content += `
      <div class="col-12 col-md-3">
        <div class="bg-warning-subtle p-4 position-relative" style="border-radius:10px;">
        ${product[i].n == "" ? "" : `<span class="position-absolute top-0 start-0 badge bg-danger">${product[i].n}</span>`}
          
         ${product[i].t == "" ? "" : `<span class="position-absolute top-0 start-0 badge bg-success">${product[i].t}</span>`}
       
          <img src="${product[i].img}" style="width:100%; height:150px;">
          <div style="color:primary;">$63.50</div>
          <h5 class="mt-2">${product[i].name}</h5>
          <p>${product[i].d}</p>
        </div>
      </div>
    `;
  }
  document.getElementById("pp").innerHTML = content;
}

showProducts();
