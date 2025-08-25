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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edet</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
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
