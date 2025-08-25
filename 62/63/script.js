let list = [
    {
       
        id: 1,
        name: "User",
        email: 'demo@gmail.com',
        image: "",
        color: "red"
    },
    {
        id: 2,
        name: "User2",
        email: 'demo@gmail.com',
        image: "",
        color: "yellow"
    },
    {
        id: 3,
        name: "User3",
        email: 'demo@gmail.com',
        image: "",
        color: "green"
    }
];

function todolistPush2() {
    let input = document.getElementById('in1').value;

    if (input !== "") {
        list.push({
          
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
  for (let i = 0; i < list.length; i++) {
    let person = list[i];
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
    let index = list.findIndex(item => item.id === id);
    if (index !== -1) {
        list.splice(index, 1);
        updateDisplay2();
    }
}

updateDisplay2();

 function searchPerson() {
    let val = document.getElementById("search").value.toLowerCase();
    let res = list.filter(item =>
        item.name.toLowerCase().includes(val) ||
        item.email.toLowerCase().includes(val)
    );
    showPeoples(res);
}

   function showPeoples(list) {
    let text = "";
    for (let i = 0; i < list.length; i++) {
        text += `
        <div class="col-10 mx-5">
            <div class="card border-${list[i].color}">
                <div class="card-body">
                    <h5 class="card-title text-${list[i].color}">${list[i].name}</h5>
                    <button class="btn btn-danger" onclick="removeUser(${list[i].id})">X</button>
                </div>
            </div>
        </div>`;
    }
    document.getElementById('objects').innerHTML = text;

}

  

  