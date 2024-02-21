const input = document.getElementById("task-input");
const ul = document.getElementById("task-list");

function addTask() {
    var task = input.value;
    if (task === "") {
        alert("Please enter a task!");
        return;
    } 
    var li = document.createElement("li");
    var paragraph = document.createElement("p");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var taskText = document.createTextNode(task);
    li.appendChild(checkbox);
    paragraph.appendChild(taskText);
    li.appendChild(paragraph);

    var span = document.createElement("span");
    span.innerHTML = "&times;";

    li.appendChild(span);
    ul.appendChild(li);
    input.value = "";

    checkbox.onclick = function () {
        if (checkbox.checked) {
            li.classList.add("checked");
        } else {
            li.classList.remove("checked");
        }
    };

    span.onclick = function () {
        var listItem = this.parentElement;
        ul.removeChild(listItem);
    };
}
