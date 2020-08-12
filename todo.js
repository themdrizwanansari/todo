
var task = [];
var input = document.getElementById("new_todo");

input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) createTodoItem();
});

function createTodoItem() {

    if (input.value === '') {
        alert("Enter something to add...");
        input.focus();
        return;
    }

    // List item
    var item = document.createElement("li");

    //CheckBox Button
    var cb = document.createElement("span");
    cb.appendChild(document.createTextNode('\u2713'));
    cb.className = "check_box";

    //Label
    var label = document.createElement("label");
    label.innerText = input.value;
    label.className = "itemLabel";

    //Close Button
    var closeBtn = document.createElement("span");
    closeBtn.appendChild(document.createTextNode('\u00D7'));
    closeBtn.className = "close_button";
    closeBtn.onclick = close;


    //var tn = document.createTextNode(input.value);
    item.appendChild(cb);
    item.appendChild(label);
    item.appendChild(closeBtn);

    item.onclick = toggleChecked;

    document.getElementById("list").appendChild(item)

    input.value = "";
}

function close() {
    this.parentElement.style.display = "none";
}

function toggleChecked() {
    this.classList.toggle("completed");
}

