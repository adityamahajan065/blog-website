// script.js
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
        `;
        
        todoList.appendChild(li);
        input.value = '';
    }
}

// Add todo when Enter key is pressed
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
