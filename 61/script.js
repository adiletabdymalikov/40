let list = [
    {
        id: 1,
        name: "User",
        email: 'demo@gmail.com',
        image: "",
        color:"red"
    },
    {
        id: 2,
        name: "User2",
        email: 'demo@gmail.com',
        image: "",
        color:"yellow"
    }
]
function todolistPush2() {
    let input = document.getElementById('in1').value;
    let input2 = document.getElementById('in2').value;
    if (input != "" && input2 != "") {
        list.push(
            {
                id: list.length,
                name: input,
                email: input2
            }
        );
        updateDisplay2();
        document.getElementById('in1').value = '';
        document.getElementById('in2').value = '';
    } else {
        alert('Пусто!');
    }
}

function updateDisplay2() {
    let text = "";
    // document.getElementById('p').innerHTML = todoList.join('<br>');
    for (let i = 0; i < list.length; i++) {
        text = text + `<div class="col-4 text-success p-3">
        <img src="${list[i].image}" width="100%">
        Email:${list[i].email}<br>
        Name:${list[i].name}
        <button class="btn btn-dark">Details</button>
        <button class="btn btn-danger" onclick="removeUser(${list[i].id})">Delete</button>
        </div>`;
    }
    document.getElementById('objects').innerHTML = text;
}
updateDisplay2();
function removeUser(id){
    let index = list.findIndex(item => item.id == id);
    list.splice(index, 1);
    updateDisplay2();
}