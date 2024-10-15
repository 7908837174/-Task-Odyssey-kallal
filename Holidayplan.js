
let todoList = JSON.parse(localStorage.getItem('todoList5')) || [];

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if (todoItem && todoDate) {
        todoList.push({ item: todoItem, dueDate: todoDate });
        localStorage.setItem('todoList5', JSON.stringify(todoList));
        inputElement.value = '';
        dateElement.value = '';
        displayItems();
    } else {
        alert('Please enter both a task and a due date.');
    }
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="deleteTodo(${i});">Delete</button>
        `;
    }
    
    containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList5', JSON.stringify(todoList));
    displayItems();
}
