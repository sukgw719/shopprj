let taskInput = $('#task-input');
let addButton = $('#add-button');
let tabs = $('.task-tabs div');
let taskList = [];
let mode = 'all';
let filterList = [];

addButton.on('click', addTask);

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener('click', function (event) {
        filter(event);
    });
}

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.val(),
        isComplete: false
    };
    taskList.push(task);
    render();
}

function render(){
    //1. 내가 선택한 탭에 따라서
    let list = [];
    if(mode === 'all'){
        list = taskList;
    }else if(mode === 'ongoing'){
        list = filterList;
    }else{
        list = filterList;
    }
    let resultHTML = '';
    list.forEach((task) => {
        if(task.isComplete === true){
            resultHTML += `<div class="task">
                   <div class="task-done">${task.taskContent}</div>
                   <div>
                       <button onclick="toggleComplete('${task.id}')">Check</button>
                       <button onclick="deleteTask('${task.id}')">Delete</button>
                   </div>
               </div>`;
        }else{
            resultHTML += `<div class="task">
                   <div>${task.taskContent}</div>
                   <div>
                       <button onclick="toggleComplete('${task.id}')">Check</button>
                       <button onclick="deleteTask('${task.id}')">Delete</button>
                   </div>
               </div>`;
        }
    });

    $('#task-board').html(resultHTML);
}

function toggleComplete(id){
    taskList.filter((task) => {
       if(task.id === id){
           task.isComplete = !task.isComplete;
       }
    });

    render();
}

function deleteTask(id){
    taskList.filter((task, index) => {
        if(task.id === id){
            taskList.splice(index, 1);
        }
    });
    filterList = taskList;

    render();
}

function filter(event){
    mode = event.target.id;

    if(mode === 'all'){
        //전체 리스트를 보여준다
        render();
    }else if(mode === 'ongoing'){
        //진행중인 아이템을 보여준다.
        filterList = taskList.filter((task) => task.isComplete === false);
        render();
    }else{
        //종료된 아이템을 보여준다.
        filterList = taskList.filter((task) => task.isComplete === true);
        render();
    }
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
