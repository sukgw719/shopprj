let taskInput = $('#task-input');
let addButton = $('#add-button');
let taskList = [];

addButton.on('click', addTask);

function addTask(){
    let task = {
        taskContent: taskInput.val(),
        isComplete: false
    };
    taskList.push(task);
    render();
}

function render(){
    let resultHTML = '';
    taskList.forEach((task) => {
        resultHTML += `<div class="task">
                   <div>${task.taskContent}</div>
                   <div>
                       <button>Check</button>
                       <button>Delete</button>
                   </div>
               </div>`
    });

    $('#task-board').html(resultHTML);
}
