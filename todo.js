
var task=[];

function createTodoItem() {
    var input = document.getElementById("new_todo");

    if (input.value === '') {
        alert("Enter something to add");
        return;
    }

    var item = document.createElement("li");
    var closeBtn = document.createElement("span");
    closeBtn.appendChild(document.createTextNode('\u00D7'));
    closeBtn.className = "close_button";

    closeBtn.onclick = close;

    var cb = document.createElement("span");
    cb.appendChild(document.createTextNode('\u2713'));
    cb.className = "check_box";



    var tn = document.createTextNode(input.value);
    item.appendChild(cb);
    item.appendChild(tn);
    item.appendChild(closeBtn);

    item.onclick = toggleChecked;

    document.getElementById("list").appendChild(item)

    input.value = "";
}

function close() {
    this.parentElement.style.display = "none";
}

function toggleChecked(){
    this.classList.toggle("completed");
}

