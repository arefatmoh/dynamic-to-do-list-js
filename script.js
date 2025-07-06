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

        // Create <li> element and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li>
        listItem.appendChild(removeButton);

        // Append the <li> to the task list
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
