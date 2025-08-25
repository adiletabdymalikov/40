let ss = [
  { name: "germany", email: "riadh@gmail.com", address: "Nowakhali, Bangladesh", age: 30 },
 
];


function showPeoples(data = ss) {
  let rows = "";
  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    rows += `
      <label class="form-label">Person </label>
      <select class="form-select mb-3">
        <option>Name: ${person.name}</option>
        <option>Email: ${person.email}</option>
        <option>Address: ${person.address}</option>
        <option>Age: ${person.age}</option>
      </select>
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


function todolistPush2() {
  let input = document.getElementById('in1').value;

  if (input !== "") {
    ss.push({
      name: input,
      email: 'default@gmail.com',
      address: 'unknown',
      age: 0
    });
    showPeoples();
    document.getElementById('in1').value = '';
  } else {
    alert('Пусто!');
  }
}


showPeoples();
