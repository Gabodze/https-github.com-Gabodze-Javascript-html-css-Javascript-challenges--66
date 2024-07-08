var btn = document.getElementById("saveButton");

btn.onclick = function() {
    var task = document.getElementById("value");
    var taskList = document.getElementById("taskList");

    if (task.value.trim() !== '') {
        var listItem = document.createElement("li");
        listItem.classList.add("d-flex", "align-items-center", "pt-3", "mb-3");
        listItem.style.borderTop = "2px solid lightgray";

        var checkElement = document.createElement("input");
        checkElement.setAttribute("type", "checkbox");
        checkElement.classList.add("me-3");

        var span = document.createElement("span");
        span.innerText = task.value;
        span.setAttribute("contenteditable", "true");
        span.classList.add("editable");

        var saveBtn = document.createElement("button");
        saveBtn.style.display = "none";
        saveBtn.classList.add("btn", "btnSv", "ms-2");
        saveBtn.textContent = "Save";

        span.oninput = function() {
            saveBtn.style.display = "block";
        };

        saveBtn.onclick = function() {
            span.innerText = span.innerText;
            saveBtn.style.display = "none";
        };

        span.addEventListener("focus", function() {
            span.classList.add("editing");
        });

        span.addEventListener("blur", function() {
            span.classList.remove("editing");
        });

        var removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "btn btn-danger");
        removeBtn.style.height = "40px";
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(checkElement);
        listItem.appendChild(span);
        listItem.appendChild(saveBtn);
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        task.value = ""; 
    }
};
