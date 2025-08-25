let img = [
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
   "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.glfJjVFjOvJzevQ5cSAWSgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  
];
let names = ["Product", "Jane Doe", "Bob Smith", "Kvin Dcss", "Oddegar Mar", "Jane Doe", "Bob Smith", "Kvin Dcss", "Oddegar Mar"];

let tt = '<div class="row">';
for (let i = 0; i < names.length; i++) {
  tt += `
    <div class="col-4 mb-3">
      <div class="bg-secondary-subtle  align-items-center p-2 ">
        <img src="${img[i]}" style="width:300px; height:200px; margin-left:100px;">
        <div>
        <br>
          <div style="font-weight:bold; margin-left:60px;">${names[i]}</div>
          <br>
          <div style="color:red; margin-left:60px;">45990 сом</div>
        </div>
      </div>
    </div>
  `;
}
tt += '</div>';
document.getElementById("pp").innerHTML = tt;