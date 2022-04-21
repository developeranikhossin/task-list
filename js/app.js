// Define UI Element

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');


// Define Event Listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);


// Define functions
//Add Task

function addTask(e) {
    if(taskInput.value === ''){
        alert('add a new task');
    } else{ 
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value +
            " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}


// remove Task

function removeTask(e){
    if(e.target.hasAttribute("href")){
        if (confirm("are you sure?")) {
            let ele = e.target.parentElement;
            // console.log(ele);
            ele.remove();
        }       
    } 
}


// clear Task

function clearTask(){
    taskList.innerHTML = "";

    // faster
    // while(taskList.firstChild) {
    //     taskList.removeChild(taskList.firstChild)
    // }
}



// filter  Task


function filterTask(e){
    let text = e.target.value.toLowerCase();
    

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text)!= -1) {
            task.style.display = 'block';
        } else{
            task.style.display = 'none';
        }
    });
}





















