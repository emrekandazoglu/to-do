let myinput=document.getElementById('myinput');
let todos=document.getElementById('todos');
let toDoList=["bugun eve erken gidicem","fizik ödevin var"];

function Add () {
    let newTask=myinput.value;
    toDoList.push(newTask);
    
    toDoList.forEach(element => {
    todos.innerHTML +=`<div class="row justify-content-center pt-4">
                <div class="col-9 d-flex justify-content-between align-items-center p-3 bg-light rounded shadow" 
                     style="max-width: 600px; min-height: 50px; flex-wrap: wrap;">
                    <p  class="mb-0 flex-grow-1" style="max-width: 70%;">${element}</p>
                    <div class="d-flex gap-2 flex-shrink-0">
                        <button onclick="Update()" type="button" class="btn btn-primary btn-sm">Güncelle</button>
                        <button onclick="Delete()" type="button" class="btn btn-secondary btn-sm">Sil</button>
                    </div>
                </div>
            </div>`;    
    });
}


