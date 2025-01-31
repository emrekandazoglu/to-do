let myinput=document.getElementById('myinput');
let todos=document.getElementById('todos');
let toDoList=["bugun eve erken gidicem","fizik ödevin var"];

function Add () {
    let newTask=myinput.value;
    toDoList.push(newTask);
    todos.innerHTML = "";
    toDoList.forEach((element, index) => {
    todos.innerHTML +=`<div class="row justify-content-center pt-4">
                <div class="col-9 d-flex justify-content-between align-items-center p-3 bg-light rounded shadow" 
                     style="max-width: 600px; min-height: 50px; flex-wrap: wrap;">
                    <p  class="mb-0 flex-grow-1" style="max-width: 70%;">${element}</p>
                    <div class="d-flex gap-2 flex-shrink-0">
                        <button onclick="Update(${index})" type="button" class="btn btn-primary btn-sm">Güncelle</button>
                        <button onclick="Delete(${index})" type="button" class="btn btn-secondary btn-sm">Sil</button>
                    </div>
                </div>
            </div>`;    
    });
}

function Delete(index) {
    delete toDoList[index];
    todos.innerHTML = "";
    toDoList.forEach((element, index)=> {
        todos.innerHTML +=`<div class="row justify-content-center pt-4">
                    <div class="col-9 d-flex justify-content-between align-items-center p-3 bg-light rounded shadow" 
                         style="max-width: 600px; min-height: 50px; flex-wrap: wrap;">
                        <p  class="mb-0 flex-grow-1" style="max-width: 70%;">${element}</p>
                        <div class="d-flex gap-2 flex-shrink-0">
                            <button onclick="Update(${index})" type="button" class="btn btn-primary btn-sm">Güncelle</button>
                            <button onclick="Delete(${index})" type="button" class="btn btn-secondary btn-sm">Sil</button>
                        </div>
                    </div>
                </div>`;    
        });
   
}


function Update(index) {
    editingIndex = index; // Hangi görev düzenleniyor kaydet
    editInput.value = toDoList[index]; // Güncellenen görevi inputa koy
    editSection.style.display = "flex"; // Güncelleme inputunu göster
    addSection.style.display="none";
}


function SaveEdit() {
    if (editingIndex !== null && editInput.value.trim() !== "") {
        toDoList[editingIndex] = editInput.value.trim(); // Yeni değeri kaydet
        editingIndex = null; // Güncelleme modundan çık
        editSection.style.display = "none"; // Güncelleme inputunu gizle
        addSection.style.display="flex";
        renderList(); // Listeyi güncelle
    }
}


function renderList() {
    todos.innerHTML = "";
    toDoList.forEach((task, index) => {
        todos.innerHTML += `
            <div class="row justify-content-center pt-4">
                <div class="col-9 d-flex justify-content-between align-items-center p-3 bg-light rounded shadow" 
                     style="max-width: 600px; min-height: 50px; flex-wrap: wrap;">
                    <p class="mb-0 flex-grow-1" style="max-width: 70%;">${task}</p>
                    <div class="d-flex gap-2 flex-shrink-0">
                        <button onclick="Update(${index})" type="button" class="btn btn-primary btn-sm">Güncelle</button>
                        <button onclick="Delete(${index})" type="button" class="btn btn-secondary btn-sm">Sil</button>
                    </div>
                </div>
            </div>`;
    });
}