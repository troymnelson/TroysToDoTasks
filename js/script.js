const divEl = document.getElementById('main');
const headerEl = document.getElementById('title');
const taskEl = document.getElementById('task');
const tasksEl = document.getElementById('tasks');
const priorityEl = document.getElementById('priority');
const submitBtn = document.getElementById('submitBtn')

let id = 0;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = taskEl.value;
    const priority = priorityEl.value;
    const HTML = `<li id='task-${id}'>${task} . . . ${priority}</li>`;
    id += 1;
    tasksEl.insertAdjacentHTML('beforeend', HTML);
})