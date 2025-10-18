let formEle=document.getElementById("task-form");
let task=document.getElementById("form-value");
let item=document.getElementById("item");
let taskList=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];



function display(taskList){
    if(taskList.length==0){
       item.innerHTML=`please add a task`;
       return;
    }
    item.innerHTML="";
    taskList.forEach((element,index) => {
        item.innerHTML+=`<li class="list-group-item list-group-item-dark mb-2">
                <span class="fw-bold">${element}</span>
                <button class="btn btn-light float-end" onclick="deleteDis(${index})">❌</button>
                <button class="btn btn-light float-end me-2" onclick="UpdateDis(${index})">✏️</button>
            </li>`;
    });
}

formEle.addEventListener('submit',function(e){
    e.preventDefault();
    let taskEle=task.value.trim();
    if (taskEle !== "")
    taskList.unshift(taskEle);
    localStorage.setItem('task',JSON.stringify(taskList));
    task.value="";
    display(taskList);
    
});


function deleteDis(index){
  taskList.splice(index,1);
  localStorage.setItem('task',JSON.stringify(taskList));
  display(taskList)
}

function UpdateDis(index){
    task.value=taskList[index];
    taskList.splice(index,1);
    localStorage.setItem('task',JSON.stringify(taskList));
    display(taskList)
}