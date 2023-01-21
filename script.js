function commit_task() {
    const div = document.createElement("div");
    const label = document.createElement("label")
    const text = document.createTextNode("This is a task");
    const conf_button = document.createElement("button");
    const conf_text = document.createTextNode("Completed");
    const remove_button = document.createElement("button");
    const remove_text = document.createTextNode("Remove Task");
    conf_button.className = "complete";
    conf_button.onclick = "temp()";
    conf_button.appendChild(conf_text);
    remove_button.className = "remove";
    remove_button.appendChild(remove_text);

    div.className = "task";
    div.appendChild(label);
    label.appendChild(text);
    div.appendChild(conf_button);
    div.appendChild(remove_button);

    const wrapper = document.getElementsByClassName("task_list")[0];
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