// Wait for the DOM to load fully
document.addEventListener('DOMContentLoaded', function () {
    // Select necessary elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // Validate input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // --- Task Creation and Removal: ---

        // Create a new <li> element and set its textContent to taskText
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new <button> element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign an onclick event to the remove button that removes the <li> from taskList
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li> element
        listItem.appendChild(removeButton);

        // Append the <li> to the taskList
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach click event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach keypress event listener to input field for "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
