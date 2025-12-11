let ToDoArray=[
    {task:"i want to go home",time:"10pm"},
    {task:"i want to go hostel",time:"1pm"},
    {task:"i want to go farm",time:"10am"},
    {task:"i want to go restaurant",time:"2pm"},
]
let refElem=document.getElementById("ref");
let MyFormElem=document.forms.MyForm;
let taskElem=MyFormElem.task;
let timeElem=MyFormElem.time;
let editTaskelem=document.getElementById("editTask");
let editTimeelem=document.getElementById("editTime");
let editIndex=0;
function display(){
    let prabhas="";
    for(let ind in ToDoArray){
        prabhas+=`
            <tr>
                <td>${ToDoArray[ind].task}</td>
                <td>${ToDoArray[ind].time}</td>
                <td>
                   <button onclick="deleteTask(${ind});">Delete</button>
                </td>
                <td>
                   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTask(${ind});">Edit</button>
                </td>
            </tr>
        `
    }
     let table=`
        <table border="1px">
            ${prabhas}
        </table>
    `
    refElem.innerHTML=table;      
}
display();

function deleteTask(i){
    let res=confirm("Are you sure you want to delete this task?");
    if(res==false){
        return;
    }
    ToDoArray.splice(i,1);
    display();
}

function addTask(event){
    event.preventDefault();
    if(taskElem.value=="" || timeElem.value==""){
        alert("Please fill all the fields");
        return;
    }
    let obj={
        task:taskElem.value,
        time:timeElem.value
    }
    ToDoArray.push(obj);
    alert("Task Added Successfully");
    display();
    taskElem.value="";
    timeElem.value="";
}

function editTask(i){
    editIndex=i;
    editTaskelem.value=ToDoArray[i].task;
    editTimeelem.value=ToDoArray[i].time;
}

function saveTask(){
    let obj={
        task:editTaskelem.value,
        time:editTimeelem.value
    }
    ToDoArray[editIndex]=obj;
    display();
    alert("Task Updated Successfully");
}