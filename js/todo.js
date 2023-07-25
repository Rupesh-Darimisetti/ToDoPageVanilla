const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const DateTime = document.getElementById("date");

// todays date
const date = new Date();
DateTime.innerText = date.toDateString();


function addTask() {
    // to check whether there is an string or not
    // if no task typed or spaces it alerts to type a task.
    if (inputBox.value.trim() === '') {
        alert('you must write some task!')
    } else {
        // create a list to store itms
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // create a delete option with symbol "X"
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        // appends to the list
        li.appendChild(span);
    }
    // clear the input box
    inputBox.value = "";
    // shows the local storage of the tasks
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// stores the task in local storage.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// display the task from the local storage in the unordered list
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
// initial loading of data from the previous session
showTask();

