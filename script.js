// Wait for the DOM to load fully
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');     // "Add Task" button
    const taskInput = document.getElementById('task-input');       // Input field for tasks
    const taskList = document.getElementById('task-list');         // UL element to display tasks

    // Step 2: Define the addTask function
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Step 3: Validate that the input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // --- Step 4: Task Creation and Removal ---

        // Create a new <li> element and set its textContent to taskText
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new "Remove" button and set its class
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign an onclick event to remove the <li> when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the <li> element
        listItem.appendChild(removeButton);

        // Append the <li> element to the task list <ul>
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Step 5: Attach click event to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Step 6: Attach keypress event to the input field to support "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 7: Optional - You can call addTask() here to add an initial task on load if needed
    // (Not required unless there's a specific task to pre-fill)
});
