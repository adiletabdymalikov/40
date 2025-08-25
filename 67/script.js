let ss = [
  { name: "Riad Hossain", email: "riadh@gmail.com", address: "Nowakhali, Bangladesh", age: 30 },
  { name: "Ket", email: "ket@gmail.com", address: "Berlin, Germany", age: 25 },
  { name: "Zus", email: "zus@gmail.com", address: "Paris, France", age: 28 },
  { name: "Mar", email: "dsd@gmail.com", address: "Rome, Italy", age: 32 },
];


function searchPerson() {
  let val = document.getElementById("search").value.toLowerCase();
  let res = ss.filter(item =>
    item.name.toLowerCase().includes(val) ||
  
    item.age.toString().includes(val)
  );
  
}




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
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        <td>${person.name}</td>
        <td>${person.age}</td>
      </tr>
    `;
  }
  document.getElementById('peoples').innerHTML = text;
}

function removeUser(name) {
  let index = ss.findIndex(item => item.id === name);
  if (index !== -1) {
    ss.splice(index, 1);
    updateDisplay2();
  }
}

updateDisplay2();
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}