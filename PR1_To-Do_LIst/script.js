const inputText = document.getElementById('inputText')
const AddBtn = document.getElementById('AddButton')
const Tasks = document.getElementById('tasks')


let finished = false;
let list = JSON.parse(localStorage.getItem("My_Data"))??[{TaskName: "Пример задачи", finished: false}]


function LoadList() {
    if (list.length > 0) { localStorage.setItem('My_Data', JSON.stringify(list)) }

    Tasks.innerHTML = ""
    for (let i=0; i< list.length; i++) {
        let task = null

        task = `
            <div class="task" id="${i}">
                &#x2022; <input type="text" value="${list[i].TaskName}" readonly class="inputTask ${list[i].finished ? "crosser" : ""}"
                onchange="changed(this)">
                <i class="clear-task">X</i>
            </div>
        `;

        Tasks.innerHTML += task;
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    LoadList();
})

AddBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(inputText.value !== ""){
        
        list.push({TaskName: inputText.value, finished: false});
        
        LoadList();
        inputText.value = "";
        
        e.stopPropagation();
    }
    
})

document.addEventListener("click", (e)=>{
    const targetElement = e.target;
    
    if(targetElement.classList.contains("clear-task")){
        list.splice(targetElement.parentElement.id, 1);

        if(list.length === 0){
            localStorage.clear();
        }

        LoadList();
    }
    
    if(targetElement.classList.contains("inputTask")){
        if(targetElement.readOnly){
            if(list[targetElement.parentElement.id].finished){list[targetElement.parentElement.id].finished = false}
            else {list[targetElement.parentElement.id].finished = true}

            localStorage.setItem("My_Data", JSON.stringify(list));
            
            targetElement.classList.toggle("finish");
            targetElement.classList.toggle("crosser");
        }
    }
})

document.addEventListener("dblclick", (e)=>{
    const targetElement = e.target;
    
    if(targetElement.classList.contains("inputTask")){

        targetElement.classList.remove("crosser");
        targetElement.readOnly = false;
        
        targetElement.addEventListener("blur", ()=>{
            list[e.target.parentElement.id].TaskName = e.target.value;
            localStorage.setItem("My_Data", JSON.stringify(list));
            
            targetElement.readOnly = true;
            
            if(targetElement.classList.contains("finish")){
                targetElement.classList.add("crosser")
            }
        })
    }
});

function changed(val){
    list[val.parentElement.id].TaskName = val.value;
}
