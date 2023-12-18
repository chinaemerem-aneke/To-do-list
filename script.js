const inputBox = document.getElementById('input-box');
const taskList = document.getElementById('task-list');

function addTask() {
    if(inputBox.value === ''){
        alert('Please input a task!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);

        // Addding edit button
        // let p = document.createElement('p');
        // p.innerHTML = '\u270E';
        // li.appendChild(p);

        // Addding delete button
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}

// Adding functinality to complete and delete button
taskList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    // else if(e.target.tagName === 'P'){
    //     let li = e.target.parentElement;
    //     let newTask = prompt('Edit task:', input.value);
    //         if (newTaskText !== null) {
    //             li.innerHTML = newTaskText;
    //         }
    //     saveData();
    // }

    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save progress in App
function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}
// Show saved progress
function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}
showTask();