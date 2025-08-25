 let ss = [
  { name: "Riad Hossain", email: "riadh@gmail.com", address: "Nowakhali, Bangladesh", age: 30 },
  { name: "Ket", email: "ket@gmail.com", address: "Berlin, Germany", age: 25 },
  { name: "Zus", email: "zus@gmail.com", address: "Paris, France", age: 28 },
  { name: "Mar", email: "dsd@gmail.com", address: "Rome, Italy", age: 32 },
];

function showPeoples(data = ss) {
  let rows = "";
  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    rows += `
      <tr>
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>${person.address}</td>
        <td>${person.age}</td>
      </tr>
    `;
  }
  document.getElementById("peoples").innerHTML = rows;
}

function searchPerson() {
  let val = document.getElementById("search").value.toLowerCase();
  let res = ss.filter(item =>
    item.name.toLowerCase().includes(val) ||
    item.email.toLowerCase().includes(val) ||
    item.address.toLowerCase().includes(val) ||
    item.age.toString().includes(val)
  );
  showPeoples(res);
}

showPeoples();
