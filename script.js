const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    const taskListItem = document.createElement('li');
    taskListItem.innerHTML = `
      <span class="task-text">${task}</span>
      <span class="delete-btn">x</span>
    `;
    taskList.appendChild(taskListItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const taskListItem = e.target.parentNode;
    taskList.removeChild(taskListItem);
  }
});