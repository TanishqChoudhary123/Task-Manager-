const form = document.getElementById("task-form");
const taskInput = document.getElementById("task");
const taskLists = document.querySelectorAll(".column ul");

let draggedTask;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;
    task.draggable = true;

    task.addEventListener("dragstart", function () {
        draggedTask = task;
    });

    task.addEventListener("dragend", function () {
        draggedTask = null;
    });

    document.getElementById("todo").appendChild(task);
    taskInput.value = "";
});

taskLists.forEach(function (list) {
    list.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    list.addEventListener("drop", function (event) {
        event.preventDefault();

        if (draggedTask) {
            list.appendChild(draggedTask);
        }
    });
});
