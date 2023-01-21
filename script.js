function commit_task(text) {
    const wrapper = document.querySelector(".task_list");
    const div = document.createElement("div");
    div.className = "task";

    create_label(div, text)
    complete_button_creator(div);
    remove_button_creator(div);

    wrapper.appendChild(div);
};

function add_task() {
    const new_item = document.getElementById("task_entry");

    if (new_item.value != "") {
        commit_task(new_item.value);
    } else {
        alert("You must enter a task that is not blank.");
    }

    new_item.value = "";
};

function create_label(div, task_text) {
    const label = document.createElement("label");
    const text = document.createTextNode(task_text);

    label.className = 'task_entry';

    div.appendChild(label);
    label.appendChild(text);
};

function complete_button_creator(div) {
    const button = document.createElement("button");
    button.className = "complete";

    const conf_text = document.createTextNode("Completed");
    button.appendChild(conf_text);

    div.appendChild(button);

    button.addEventListener('click', () => {
        div.style.backgroundColor = 'green';
    });
};

function remove_button_creator(div) {
    const button = document.createElement("button");
    button.className = "remove";
    
    const remove_text = document.createTextNode("Remove Task");
    button.appendChild(remove_text);

    div.appendChild(button);

    button.addEventListener('click', () => {
        div.remove()
    });
};