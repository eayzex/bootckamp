const tasks = [
    { id: 0, text: 'Vanilla JavaScript', done: false },
    { id: 1, text: 'Vue.js', done: false },
    { id: 2, text: 'React.js', done: false },
    { id: 3, text: 'Node.js', done: false }
];

let taskId = 4; 

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearTasks);


document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskId = parseInt(this.closest('.task-item').dataset.taskId);
        doneTask(taskId);
    });
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const taskId = parseInt(this.closest('.task-item').dataset.taskId);
        deleteTask(taskId);
    });
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    const task = {
        id: taskId++,
        text: taskText,
        done: false
    };
    
    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

function renderTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.id);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => doneTask(task.id));
    
    const label = document.createElement('label');
    label.className = 'task-label';
    label.textContent = task.text;
    if (task.done) {
        label.classList.add('checked');
    }
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '✓';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteBtn);
    
    taskList.appendChild(taskItem);
}

function doneTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.done = !task.done;
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        const checkbox = taskElement.querySelector('.task-checkbox');
        const label = taskElement.querySelector('.task-label');
        
        checkbox.checked = task.done;
        if (task.done) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        taskElement.remove();
    }
}

function clearTasks() {
    tasks.length = 0;
    taskList.innerHTML = '';
    taskId = 0; 
}