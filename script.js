
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return; 
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskValue;
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}
document.getElementById('taskInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
