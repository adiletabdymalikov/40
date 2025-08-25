let img = [
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
];
let names = ["Product", "Jane Doe", "Bob Smith", "Kvin Dcss", "Oddegar Mar"];

let tt = '<div class="row">';
for (let i = 0; i < names.length; i++) {
  tt += `
    <div class="col-12 mb-2">
      <div class="bg-secondary-subtle align-items-center p-2 d-flex">
        <img src="${img[i]}" style="width:50px; height:50px; border-radius:50%; margin-right:10px;">
        <div>
          <div style="font-weight:bold;">${names[i]}</div>
          <div style="color:green;">120 сом</div>
        </div>
      </div>
    </div>
  `;
}
tt += '</div>';
document.getElementById("pp").innerHTML = tt;

let pizzas2 = [
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 1,
    name: "Peperoni",
    description: "Описание тут",
    price: 10,
    currency: "som"
  },
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 2,
    name: "Cola",
    description: "Холодный напиток",
    price: 5,
    currency: "som"
  },
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 1,
    name: "Peperoni",
    description: "Описание тут",
    price: 10,
    currency: "som"
  },
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 1,
    name: "Peperoni",
    description: "Описание тут",
    price: 10,
    currency: "som"
  },
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 1,
    name: "Peperoni",
    description: "Описание тут",
    price: 10,
    currency: "som"
  },
  
];

let pizzas = [
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 1,
    name: "Peperoni",
    description: "Описание тут",
    price: 10,
    currency: "som"
  },
  {
    img: "https://th.bing.com/th/id/OIP.uJv3KjwtY0cB49SMnl-gugHaFj?w=230&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    id: 2,
    name: "Cola",
    description: "Холодный напиток",
    price: 5,
    currency: "som"
  }
];

function showpizzas() {
  let content = "";
  for (let i = 0; i < pizzas.length; i++) {
    content += `
      <div class="col-12 col-md-4">
        <div class="bg-warning-subtle mb-3 p-4" style="border-radius:10px;">
          <img src="${pizzas[i].img}" style="width:100%; height:50px; border-radius:100px;">
          <h5>${pizzas[i].name}</h5>
          <p>${pizzas[i].description}</p>
          <p><strong>${pizzas[i].price} ${pizzas[i].currency}</strong></p>
        </div>
      </div>
    `;
  }
  document.getElementById("box").innerHTML = content;
}

function showpizzas2() {
  let content = "";
  for (let i = 0; i < pizzas2.length; i++) {
    content += `
      <div class="col-md-4">
        <div class="bg-warning-subtle mb-3 p-4" style="border-radius:10px;">
          <img src="${pizzas2[i].img}" style="width:100%; height:50px; border-radius:100px;">
          <h5>${pizzas2[i].name}</h5>
          <p>${pizzas2[i].description}</p>
          <p><strong>${pizzas2[i].price} ${pizzas2[i].currency}</strong></p>
        </div>
      </div>
    `;
  }
  document.getElementById("p").innerHTML = content;
}

function searchPerson() {
  let val = document.getElementById("search").value.toLowerCase();
  let res = pizzas2.filter((item) =>
    item.name.toLowerCase().includes(val)
  );
  if (res.length > 0) {
    let peopls = "";
    for (let i = 0; i < res.length; i++) {
      peopls += `
        <div class="col-md-4">
          <div class="bg-warning-subtle mb-3 p-4" style="border-radius:10px;">
            <img src="${res[i].img}" style="width:100%; height:50px; border-radius:100px;">
            <h5>${res[i].name}</h5>
            <p>${res[i].description}</p>
            <p><strong>${res[i].price} ${res[i].currency}</strong></p>
          </div>
        </div>
      `;
    }
    document.getElementById("i").innerHTML = peopls;
  } else {
    showpizzas2();
  }
}

showpizzas();
showpizzas2();
