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
  
    item.age.toString().includes(val)
  );
  showPeoples(res);
}

showPeoples();


function todolistPush2() {
  let input = document.getElementById('in1').value;

  if (input !== "") {
    ss.push({
      
      name: input,
      email: 'default@gmail.com',
      image: "",
      color: "blue"
    });
    updateDisplay2();
    document.getElementById('in1').value = '';
  } else {
    alert('Пусто!');
  }
}

function updateDisplay2() {
  let text = "";
  for (let i = 0; i < ss.length; i++) {
    let person = ss[i];
    text +=  `
      <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
      </tr>
    `;
  }
  document.getElementById('peoples').innerHTML = text;
}

function removeUser(id) {
  let index = ss.findIndex(item => item.id === id);
  if (index !== -1) {
    ss.splice(index, 1);
    updateDisplay2();
  }
}

updateDisplay2();