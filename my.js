function addTask() {
    const taskInput = document.getElementById("taskInput");
    let taskText = document.getElementById("all");
    taskText = taskInput.value;

    if (taskInput.value.trim() === '') {
        alert('Please enter a valid task.');
        return;
    }

    function newElement() {
        let li = document.createElement("li");
        let inputValue = document.getElementById("myInput").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("item").appendChild(li);
        }
        document.getElementById("myInput").value = "";
    }

}