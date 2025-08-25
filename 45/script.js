let product = [
  {
    name: "Apple 64gb",
    price: 100,
    oldPrice: 2000,
    d: "смартфоны",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом"
  },
  {
    name: "Apple 64gb",
    price: 100,
    oldPrice: 2000,
    d: "смартфоны",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом"
  },
  {
    name: "Apple 64gb",
    price: 100,
    oldPrice: 2000,
    d: "смартфоны",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом"
  },
  {
    name: "Apple 64gb",
    price: 100,
    oldPrice: 2000,
    d: "смартфоны",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом"
  },
  {
    name: "Apple 64gb",
    price: 100,
    oldPrice: 2000,
    d: "смартфоны",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом"
  },
  {
    name: "Apple 64gb",
    price: 100,
    oldPrice: 2000,
    d: "смартфоны",
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    c: "сом"
  },
];

function showpizzas() {
  let content = ""; 
  for (let i = 0; i < product.length; i++) {
    content += `
      <div class="col-12 col-md-4">
        <div class="bg-warning-subtle mb-3 p-4" style="border-radius:10px;">
          <img src="${product[i].img}" style="width:100%; height:150px; ">
          <h5>${product[i].name}</h5>
          <p>${product[i].d}</p>
          <p><del>${product[i].oldPrice} ${product[i].c}</del></p>
          <p><strong>${product[i].price} ${product[i].c}</strong></p>
           <div style="color:green; margin-left:60px;">45990 сом</div>
        </div>
      </div>
    `;
  }
  document.getElementById("pp").innerHTML = content;
}


showpizzas();
