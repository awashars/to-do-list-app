function addTodo() {
    var todoInput = document.getElementById("newTodo");
    var todoText = todoInput.value.trim();

    if (todoText !== "") {
        var todoList = document.getElementById("todo-list");
        var listItem = document.createElement("li");
        listItem.className = "todo-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var todoLabel = document.createElement("label");
        todoLabel.innerText = todoText;

        listItem.appendChild(checkbox);
        listItem.appendChild(todoLabel);

        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = "";
    }
}